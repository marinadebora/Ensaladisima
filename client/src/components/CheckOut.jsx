import
  {
    /* MDBBtn, */
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import { useLocalStorage } from '../useLocalStorage'
import React from "react";

import { Link } from 'react-router-dom';
/* import { useState } from "react"; */


export default function QuantityEdit()
{
  //para renderizar bebidas y postres desde localStorage
  let bebidas = useLocalStorage('bebidas', [])
  let postres = useLocalStorage('postres', [])
  let beb=bebidas[0]
  let post=postres[0]
 

  //para renderizar ensaladas medianas desde localStorage
  let ensaladasMed = useLocalStorage('medianas', [])
  let ensaladasGr = useLocalStorage('grandes', [])
  let med=ensaladasMed[0]
  let gran=ensaladasGr[0]


  // eleiminar del carrito
  
  const remove = (e)=>{
    const buscarMed = JSON.parse(localStorage.getItem('medianas'))
    const buscarBig = JSON.parse(localStorage.getItem('grandes'))
    const buscarBebidas = JSON.parse(localStorage.getItem('bebidas'))
    const buscarPostres = JSON.parse(localStorage.getItem('postres'))
    
    const filtroMed = /* buscarMed?.indexOf({_id:e.target.value}) */buscarMed?.find(a => a._id === e.target.value )
    console.log(filtroMed)
    const filtroBig = buscarBig?.find(a => a._id === e.target.value )
    const filtroBebida = buscarBebidas?.indexOf(a => a._id === e.target.value )
    const filtropostre = buscarPostres?.find(a => a._id === e.target.value )
    console.log(buscarMed?.indexOf(filtroMed))
    
    if(filtroMed){
      const borrar = /* buscarMed?.indexOf(filtroMed) */buscarMed[0]?buscarMed?.splice(buscarMed?.indexOf(filtroMed), buscarMed?.indexOf(filtroMed)+1) :buscarMed?.splice(buscarMed?.indexOf(filtroMed), buscarMed?.indexOf(filtroMed)+1)
      console.log(borrar)
      localStorage.setItem('medianas', JSON.stringify(buscarMed))
      window.location.reload(false)
    }else if(filtroBig){
      const borrar = buscarBig?.filter(e => e._id !== filtroBig._id)
      console.log(borrar)
      localStorage.setItem('grandes', JSON.stringify(borrar))
      window.location.reload(false)
    }else if(filtroBebida){
      const borrar = buscarBebidas?.filter(e => e._id !== filtroBebida._id)
      localStorage.setItem('bebidas', JSON.stringify(borrar))
      window.location.reload(false)
    }else if(filtropostre){
      const borrar = buscarPostres?.filter(e => e._id !== filtropostre._id)
      localStorage.setItem('postres', JSON.stringify(borrar))
      window.location.reload(false)
    }
  }


  

  //unir todos los productos
  let todosLosProductos = [beb,post,med,gran].flat()
  let total = todosLosProductos?.map(e => e?.price)
  let suma = total?.reduce((e, i) => e + i, 0)
  /* console.log(todosLosProductos) */

  let productosMap = todosLosProductos.map(item=>{
    return [item._id,item]
  })
  let productosMapArr = new Map(productosMap)
  let unicos = [...productosMapArr.values()]

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#94D2DE", paddingTop: "100px" }}>
      <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#94D2DE" }}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12" style={{ backgroundColor: "#207140", paddingTop: "12px", paddingBottom: "12px" }}>
            <MDBCard className="card-registration card-registration-2">
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h2" className="fw-bold mb-0 text-black" style={{ color: "#207140", fontFamily: "Tommy-regular" }}>
                          Pedido
                        </MDBTypography>
                        {
                          todosLosProductos && <MDBTypography className="mb-0 text-muted">{todosLosProductos.length} Productos  </MDBTypography>
                        }

                      </div>

                      <hr className="my-4" />
                      {
                        unicos?.map(e => (

                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={e?.image}
                                fluid className="rounded-3" alt="Cotton T-shirt" />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              {/* <MDBTypography tag="h6" className="text-muted">
                                {e?.name}
                              </MDBTypography> */}
                              <MDBTypography tag="h6" className="text-black mb-0">
                                {e?.name}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">

                              
                              <MDBInput type="number" min="1" defaultValue={todosLosProductos?.filter(d=> d._id === e._id).length} size="sm" />
                              


                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                US$ {e?.price ? e?.price : e?.median}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="2" lg="1" xl="1" className="text-end">
                            <MDBTypography tag="h6" className="mb-0">
                              <button onClick={(e)=>remove(e)} value={e._id} class="buttonChico">X</button>
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <a href="#!" className="text-muted">
                                <MDBIcon fas icon="times" />
                              </a>
                            </MDBCol>
                          </MDBRow>
                        ))
                      }

                      <hr className="my-4" />


                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" />
                            Volver a la tienda
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1" style={{ color: "#207140", fontFamily: "Tommy-regular" }}>
                        Resumen
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          {todosLosProductos.length} Productos
                        </MDBTypography>
                        <MDBTypography tag="h5">US$ {suma}</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        ENVÍO
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">TAKE AWAY</option>
                          <option value="2">DIRECCION 1</option>
                          <option value="3">DIRECCION 2</option>
                          <option value="4">DIRECCION 3</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Comentarios
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total
                        </MDBTypography>
                        <MDBTypography tag="h5">US$ {suma}</MDBTypography>
                      </div>

                      <Link class="buttonChico" to="/">Registrate</Link>
                      <Link class="buttonChico" to="/">Comprar</Link>

                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}