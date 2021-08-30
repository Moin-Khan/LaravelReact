import Header from './Header'
//import { Button } from 'react-bootstrap'
import React ,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


function Register()
{
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
    {
        history.push("/AddProduct")
    }
    },[])
    const history=useHistory();
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    

    async function signUp()
    {
        let item={name,email,password}
        console.warn(item)
        
        let result=await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/AddProduct")

    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-comtrol" placeholder="name"/> <br/>       <br/> 
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-comtrol" placeholder="email"/>     <br/>   <br/>        
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-comtrol" placeholder="password"/>     <br/>   <br/>        
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}

export default Register 
