
import React from 'react';
import { imag } from '../imagenes';

const CarrouselEP = () => {
  return( 
    
    <div class="container">

        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Tus ultimas ensaladas</h3>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
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

                            
                    