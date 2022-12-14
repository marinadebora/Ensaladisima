import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { historialCompra, modificarPedido } from '../action/'
import { imag } from '../imagenes';
import "../styles/Carousel.css";


const CarrouselEP = () =>
{
  const dispatch = useDispatch()
  const loguearUser = JSON.parse(localStorage.getItem("loguearUsuario"))
  const userID = loguearUser?.id
  const myHistorial = useSelector(state => state?.historial);
  let myHistorialCompra = myHistorial?.filter(e => e.user[0]?._id === userID)

  let comprar = (id, orders) =>
  {
    let repetirEnsalada = {
      id:id,
      orders:orders
    }
    dispatch(modificarPedido(repetirEnsalada))
    console.log(repetirEnsalada)
  }
 
  let arrayM = []
  myHistorialCompra?.map(e => (
    e.orders?.map(e => (
      e.saladsMed && e.saladsMed.map(e => (
        arrayM.push(e)
      ))))))

  let arrayG = []
  myHistorialCompra?.map(e => (
    e.orders?.map(e => (
      e.saladsMed && e.saladsBig.map(e => (
        arrayG.push(e)
      ))))))

  let ensalada = [...arrayM, ...arrayG]
  let ensaladas = ensalada.slice(ensalada?.length - 6, ensalada?.length)
  
  useEffect(() =>
  {
    dispatch(historialCompra())
  }, [dispatch])



  return (
    <div class="container ">
      <div class="row">

      { loguearUser&&ensaladas?.length>0&&
        <div class="col-10">
          <h3 class="mb-3" id="carrouselTitle">Tus ultimas ensaladas:</h3>
        </div>
      }
      
        <div class="col-12">
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
              <div id="carouselContainer" class="container">
                <div class="row">
                  {
                    loguearUser&&ensaladas?.map((e, i) => (
                      <div class="col-md-2 mb-1">
                        <div class="card">
                          <img class="img" alt="100%x280" src={imag[i] || e.image} />
                          <div class="card-body">
                            <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                  <button id="buttonCarousel" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> <p class="card-title">{e.name}</p></button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div class="accordion-body">
                                    <ul className="ulEnsaladas">
                                      {
                                        e.base && e.base.map(e => (
                                          <li className="liIngredientes">{e}, </li>
                                        ))
                                      }
                                    </ul>
                                    <ul className="ulEnsaladas">
                                      {
                                        e.protein && e.protein.map(e => (
                                          <li className="liIngredientes">{e}, </li>
                                        ))
                                      }
                                    </ul>
                                    <ul className="ulEnsaladas">
                                      {
                                        e.complement && e.complement.map(e => (
                                          <li className="liIngredientes">{e}, </li>
                                        ))
                                      }
                                    </ul>
                                    
                                     <button id="buttoonPlus2" onClick={() => comprar(e?._id,loguearUser?.orders[0])}>Comprar</button>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
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

