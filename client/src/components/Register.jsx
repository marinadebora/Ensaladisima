import react from "react";
import axios from "axios"
import { useState } from "react";

export default function Register(){

    const [registerEmail, setRegisterEmail]=useState("");
    const [registerPassword, setRegisterPassword]=useState("");
    const [registerLastName, setRegisterLastname]=useState("");
    const [registerName, setRegisterName]=useState("");
    const [registerAdress, setRegisterAdress]=useState("");
    const [registerPhone, setRegisterPhone]=useState("");

    
    const register =()=>{

        axios({
            method:"POST",
            data:{
                email:registerEmail,
                password:registerPassword,
                firstName:registerName,
                lastName:registerLastName,
                adress:registerAdress,
                phone:registerPhone

            },
            withCredentials:true,
            url: "/registro", 
        }).then((res)=>console.log(res))
    };

   
    return(<div>
        <div>
            <br /><br /><br /><br /><br /><br />


            <div>
            
                <h1>Registro</h1>
                <input type="email" placeholder="email"  onChange={e=>setRegisterEmail(e.target.value)}/> <br/>
                <input type="password" placeholder="password"  onChange={e=>setRegisterPassword(e.target.value)}/><br/>
                <input type="text" placeholder="Nombre"  onChange={e=>setRegisterName(e.target.value)}/><br/>
                <input type="text" placeholder="Apellido"  onChange={e=>setRegisterLastname(e.target.value)}/><br/>
                <input type="text" placeholder="Direc."  onChange={e=>setRegisterAdress(e.target.value)}/><br/>
                <input type="text" placeholder="telefono"  onChange={e=>setRegisterPhone(e.target.value)}/><br/>
                <button onClick={register}>Submit</button><br/>
            
            </div>
           
        </div>
    </div>)
} ;