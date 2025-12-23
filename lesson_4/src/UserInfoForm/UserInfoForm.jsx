import { useState } from "react";
import Button from "./Button";

const UserInfoForm = () =>{
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    const  [isShowData, setIsShowData] = useState(false)
    const getName = (e) =>{
        const value = e.target.value
        setName(value)
    }
    const getEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsShowData(true)
    }   

    return(
    <div>
        <form className="form-input" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="" placeholder="Nhap ten" onChange={getName}/>
            <label htmlFor="">Email</label>
            <input type="text" name="email" placeholder="Nhap email" onChange={getEmail}/>
            <Button type="submit" label={"Submit"}/>
        </form>
        {isShowData ?
        (
            <>
                <p>{name}</p>
                <p>{email}</p>
            </>
        ) : <></>}
        
    </div>

    )
}

export default UserInfoForm;