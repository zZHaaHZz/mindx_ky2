import { Form, Input, Button, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './SignUpForm.css';
import { useState, useEffect } from 'react';
import { use } from 'react';

const { Option } = Select;

function LoginForm({ onSwitchToSignUp, onLoginSuccess }) {
  const [form] = Form.useForm();

  const getUser = async () => {
    const URLAPI = "https://mindx-mockup-server.vercel.app/api/resources/Users?apiKey=69512fa21ce8b472cf42cf85"

    const response = await fetch(URLAPI,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      })
    const data = await response.json();
    // console.log(data.data.data)
    return data.data.data
  }


  const onFinish = async (values) => {
    console.log('Login values:', values);
    let data = await getUser()
    console.log(data)
    const user = await data.find(u =>
      (u.email === values.emailOrPhone)
      &&
      (u.password === values.password))

    if (user) {
      console.log("Dang nhap thanh cong")
      let local =  [user.fullName, values.emailOrPhone, values.password, values.phoneNumber]
      localStorage.setItem('dataUSer', JSON.stringify(local))
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      onLoginSuccess();
    } else {
      console.log("Sai tai khoan mat khau")
      alert("Sai tai khoan mat khau")
    }
    console.log(data)
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1 className="auth-title">Welcome back</h1>
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          className="auth-form"
        >
          <Form.Item
            label="Email address or Phone number"
            name="emailOrPhone"
            rules={[{ required: true, message: 'Please enter your email or phone number' }]}
          >
            <Input size="large" placeholder="yourname@email.com or phone number" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="auth-submit-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="auth-footer">
          <span>Don't have an account? </span>
          <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToSignUp(); }}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

