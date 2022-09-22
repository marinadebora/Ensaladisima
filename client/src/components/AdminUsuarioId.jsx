import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putActivo, putAdmin, usuariosId } from "../action";
import CardUsuariosId from "./CardUsuarioId";
import Swal from 'sweetalert2'


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
        Swal.fire({title: '😉', text:'Activo editado',showConfirmButton: false, timer: 1500})
    }
    function handleSubmitAdmin(){
        dispatch(putAdmin(id))
        Swal.fire({title: '😉', text:'Admin editado',showConfirmButton: false, timer: 1500})
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
            
                <div id="containerActive">
                <button id="activeButton" onClick={handleSubmitActivo}>Activo Si/No</button>
                <button id="activeButton" onClick={handleSubmitAdmin}>Admin Si/No</button>
                </div>
                <Link id="butonCarrouselMain" to="/admin_usuarios">
                    <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver</i>
                </Link>
              

        </div>
    )


};