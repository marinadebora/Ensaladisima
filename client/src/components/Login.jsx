import react from "react";
import axios from "axios"
import { useState } from "react";

export default function Login(){

    const [loginEmail, setLoginEmail]=useState("");
    const[loginPassword, setLoginPassword]=useState("");

  
    const login= ()=>{
        axios({
            method:"POST",
            data:{
                email:loginEmail,
                password:loginPassword

            },
            withCredentials:true,
            url: "http://localhost:4000/autenticar",
            headers: { "X-Requested-With": "XMLHttpRequest" },
            
        }).then((res)=>console.log(res))

        
    };
    
   
    return(<div>
        <div>
            <br /><br /><br /><br /><br /><br />

            <div>
                <h1>Login</h1>
                <input type="email" placeholder="email" onChange={e=>setLoginEmail(e.target.value)} />
                <input type="text" placeholder="password" onChange={e=>setLoginPassword(e.target.value)}/>
                <button onClick={login}>Submit</button>
            </div>
           
        </div>
    </div>)
} ;