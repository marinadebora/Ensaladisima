import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usuariosId } from "../action";
import CardUsuariosId from "./CardUsuarioId";



export default function AdminUsuarioId() {

    const dispatch = useDispatch();
    const { detail } = useSelector(state => state);
    let { id } = useParams();


    useEffect(() => {
        dispatch(usuariosId(id));
    }, [dispatch, id]);

    
    return (
        
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div><Link to="/admin_usuarios"><button>Volver</button></Link></div>
            {
                detail ?
                    (
                        <div>
                            <CardUsuariosId
                                firstName={detail.firstName}
                                email={detail.email}
                                phone={detail.phone}
                                adress={detail.adress}
                                admin={detail.admin}
                                activo={detail.activo}
                                id={detail._id}
                            />
                            {console.log(detail)}
                        </div>
                    )
                    : <h1>Cargando</h1>
            }
        </div>
    )


};