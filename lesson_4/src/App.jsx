import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfoForm from "./UserInfoForm/UserInfoForm"
import TodoList from "./TodoList/TodoList"
function App() {
  return <>
    {/* <UserInfoForm/> */}
    <div className="divider"> <TodoList/></div> 
 
  </>
}

export default App;

