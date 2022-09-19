import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putActivo, putAdmin, usuariosId } from "../action";
import CardUsuariosId from "./CardUsuarioId";



export default function AdminUsuarioId() {

    const dispatch = useDispatch();
    const { detail } = useSelector(state => state);
    let { id } = useParams();
   
    useEffect(() => {
        dispatch(usuariosId(id));
    }, [dispatch, id]);
    // console.log(detail?.purchaseHistory[0].facheyhora) 
    
    // console.log(detail.activo)
    function handleSubmitActivo(){
        dispatch(putActivo(id))
        alert("Activo editado")
    }
    function handleSubmitAdmin(){
        dispatch(putAdmin(id))
        alert("Admin editado")
    }
    return (
        
        <div>
            
            {
                detail ?
                (
                    <div>
                       { console.log(detail)}
                            <CardUsuariosId
                                firstName={detail.firstName}
                                lastName={detail.lastName}
                                email={detail.email}
                                phone={detail.phone}
                                adress={detail.adress}
                                admin={detail.admin}
                                activo={detail.activo}
                                id={detail._id}
                                purchaseHistory={detail.purchaseHistory[1]}
                                />
                        </div>
                    )
                    : <h1>Cargando</h1>

                 }
            
                <Link id="butonCarrouselMain" to="/admin_usuarios">
                    <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver</i>
                </Link>
                <div id="containerActive">
                <button onClick={handleSubmitActivo}>Activo Si/No</button>
                <button onClick={handleSubmitAdmin}>Admin Si/No</button>
                </div>
              

        </div>
    )


};