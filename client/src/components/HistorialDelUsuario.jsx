import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux"
import { historialCompra } from "../action";
import CardHistorial from "./CardHistorial";



export default function HistorialDelUsuario() {
    const {historial} = useSelector(state=>state)
     console.log(historial)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(historialCompra())
        },[dispatch])
    
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           {
            historial?
            historial?.map(e=>{
               return(
                <div>
                    <CardHistorial
                    _id={e._id}
                    canceled={e?.canceled}
                    pending={e?.pending}
                    processing={e?.processing}
                    received={e?.received}
                    totalPayable={e.totalPayable}
                    facheyhora={e.facheyhora}
                    />
                </div>
               )
            }):<></>
           }
        </div>
    )
}