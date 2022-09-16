
import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import {getUsuarioId} from '../action/'
import { imag } from '../imagenes';
import "../styles/Card.css";

const CarrouselEP = () => {
    const dispatch=useDispatch()
    const loguearUser = JSON.parse(localStorage.getItem("loguearUsuario"))
    const loguearUserGoogle=JSON.parse(localStorage.getItem("logueadoGoogle"))
    const userID =loguearUser?.id
    const userIDGoogle=loguearUserGoogle?.id
    //const myUserDetail = useSelector(state => state?.userId);




    useEffect(()=>{
        dispatch(getUsuarioId(userID||userIDGoogle))
        },[dispatch,userID,userIDGoogle])


  return( 
    
    <div class="container mt-2">
        
        <div class="row">
            <div class="col-10">
                <h3 class="mb-3" id="carrouselTitle">Tus ultimas ensaladas</h3>
            </div>
    
            <div class="col-2 ml-2">
                <button id="butonCarrouselMain" href="#carouselExampleIndicators2" data-slide="prev">
                <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"></i>
                </button>
                <button id="butonCarrouselMain" href="#carouselExampleIndicators2" data-slide="next">
                <i id="butonCarrousel" class="bi bi-arrow-right-circle-fill"></i>
                </button>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img" alt="100%x280" src={imag.image1}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">25/08/2022</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img" alt="100%x280" src={imag.image2}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">17/08/2022</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img" alt="100%x280" src={imag.image3}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">05/08/2022</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src={imag.image4} />
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">17/07/2022</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src={imag.image5} />
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">09/07/2022</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src={imag.image6}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">25/06/2022</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x200" src={imag.image7}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">05/06/2022</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x200" src={imag.image8}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">20/05/2022</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x200" src={imag.image9} />
                                        <div class="card-body">
                                            <h4 class="card-title">Tu ensalada</h4>
                                            <p class="card-text">02/05/2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    )
}

export default CarrouselEP

                            
                    