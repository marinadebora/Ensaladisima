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

import { Link/* , useParams  */} from 'react-router-dom';
import { useEffect, useState} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { eliminarDelCarrito, getPedidos, agregarAlCarrito } from "../action";


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

  // agregar cal carrito
  const agregar = (e)=>{
    const buscarMed = JSON.parse(localStorage.getItem('medianas'))
    const buscarBig = JSON.parse(localStorage.getItem('grandes'))
    const buscarBebidas = JSON.parse(localStorage.getItem('bebidas'))
    const buscarPostres = JSON.parse(localStorage.getItem('postres'))

    const filtroMed = buscarMed?.find(a => a._id === e.target.value )
    const filtroBig = buscarBig?.find(a => a._id === e.target.value )
    const filtroBebida = buscarBebidas?.find(a => a._id === e.target.value )
    const filtropostre = buscarPostres?.find(a => a._id === e.target.value )

    if(filtroMed){
      const agregar = buscarMed?.push(filtroMed)
      console.log(agregar)
      localStorage.setItem('medianas', JSON.stringify(buscarMed))
      window.location.reload(false)
    }else if(filtroBig){
      const agregar = buscarBig?.push(filtroBig)
      console.log(agregar)
      localStorage.setItem('grandes', JSON.stringify(buscarBig))
      window.location.reload(false)
    }else if(filtroBebida){
      const agregar = buscarBebidas?.push(filtroBebida)
      console.log(agregar)
      localStorage.setItem('bebidas', JSON.stringify(buscarBebidas))
      window.location.reload(false)
    }else if(filtropostre){
      const agregar = buscarPostres?.push(filtropostre)
      console.log(agregar)
      localStorage.setItem('postres', JSON.stringify(buscarPostres))
      window.location.reload(false)
    }
  }

  // eleiminar del carrito
  
  const remove = (e)=>{
    const buscarMed = JSON.parse(localStorage.getItem('medianas'))
    const buscarBig = JSON.parse(localStorage.getItem('grandes'))
    const buscarBebidas = JSON.parse(localStorage.getItem('bebidas'))
    const buscarPostres = JSON.parse(localStorage.getItem('postres'))
    
    const filtroMed = buscarMed?.find(a => a._id === e.target.value )
    const filtroBig = buscarBig?.find(a => a._id === e.target.value )
    const filtroBebida = buscarBebidas?.find(a => a._id === e.target.value )
    const filtropostre = buscarPostres?.find(a => a._id === e.target.value )
    
    if(filtroMed){
      const borrar = buscarMed?.splice(buscarMed?.indexOf(filtroMed), 1)
      console.log(borrar)
      localStorage.setItem('medianas', JSON.stringify(buscarMed))
      window.location.reload(false)
    }else if(filtroBig){
      const borrar = buscarBig?.splice(buscarBig?.indexOf(filtroBig), 1)
      console.log(borrar)
      localStorage.setItem('grandes', JSON.stringify(buscarBig))
      window.location.reload(false)
    }else if(filtroBebida){
      const borrar = buscarBebidas?.splice(buscarBebidas?.indexOf(filtroBebida), 1)
      console.log(borrar)
      localStorage.setItem('bebidas', JSON.stringify(buscarBebidas))
      window.location.reload(false)
    }else if(filtropostre){
      const borrar = buscarPostres?.splice(buscarPostres?.indexOf(filtropostre), 1)
      console.log(borrar)
      localStorage.setItem('postres', JSON.stringify(buscarPostres))
      window.location.reload(false)
    }
  }

  // carrito de usuario registrado
  const [user, setUser] = useState(null)
  const pedido = useSelector(state => state.pedidos)
  const dispatch = useDispatch()
  /* const {id} = useParams() */

  useEffect(()=>{
    if(localStorage.getItem('loguearUsuario')){
      const usuario = JSON.parse(localStorage.getItem('loguearUsuario'))
      setUser(usuario)
      dispatch(getPedidos())
    }
  },[dispatch])

  const resultado = pedido?.find(e => e._id === user?.orders[0])
  const armadoCarrito ={
    _id: resultado?._id,
    user: resultado?.user[0].email,
    producto: resultado?.salads?.map(e => e).concat(resultado?.beverages?.map(e => e)).concat(resultado?.desserts?.map(e => e)),
    total: resultado?.totalPayable,
    direccion: resultado?.adress
  }

  const agregarAlpedido = (e)=>{
    dispatch(agregarAlCarrito({id:resultado?._id,_id:e.target.value}))
    window.location.reload(false)
  }

  const removeDelCarrito = (e)=>{
    dispatch(eliminarDelCarrito({id:resultado?._id,_id:e.target.value}))
    /* dispatch(getPedidos()) */
    window.location.reload(false)
  }

  let productosMapInicio = armadoCarrito?.producto?.map(item=>{
    return [item._id,item]
  })
  let productosMapArrInicio = new Map(productosMapInicio)
  let unicosInicio = [...productosMapArrInicio.values()]

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
    <div>
    {user ? user?.orders[0] ?(
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
                          Pedido usuario con orders
                        </MDBTypography>
                        {
                          armadoCarrito?.producto && <MDBTypography className="mb-0 text-muted">{armadoCarrito?.producto?.length} Productos  </MDBTypography>
                        }
                      </div>
                      <hr className="my-4" />
                      {
                        unicosInicio?.map(e => (
                          <MDBRow key={e._id} className="mb-4 d-flex justify-content-between align-items-center">
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={e?.image}
                                fluid className="rounded-3" alt="Cotton T-shirt" />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-black mb-0">
                                {e?.name}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                            <button onClick={(e)=>removeDelCarrito(e)} value={e._id} style={{border:'none',color:'#fff',fontWeight:"bolder", backgroundColor:'red', fontSize:'larger',width:'2rem', marginRight:'0.5rem'}}>
                              -
                            </button>
                              <MDBInput type="number" min="1" defaultValue={armadoCarrito?.producto?.filter(d=> d._id === e._id).length} size="sm"/>
                              <button onClick={(e)=>agregarAlpedido(e)} value={e._id} style={{border:'none',color:'#fff', backgroundColor:'green',width:'2rem', marginLeft:'0.5rem',fontSize:'larger'}}>
                              +
                            </button>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                US$ {e?.price ? e?.price : e?.median}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="2" lg="1" xl="1" className="text-end">
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
                          {armadoCarrito?.producto?.length} Productos
                        </MDBTypography>
                        <MDBTypography tag="h5">US$ {armadoCarrito?.total}</MDBTypography>
                      </div>
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        ENVÍO
                      </MDBTypography>
                      <div className="mb-4 pb-2">
                        {/* <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">TAKE AWAY</option>
                          <option value="2">DIRECCION 1</option>
                          <option value="3">DIRECCION 2</option>
                          <option value="4">DIRECCION 3</option>
                        </select> */}
                      <MDBInput size="lg"  defaultValue={armadoCarrito?.direccion?armadoCarrito?.direccion:''} placeholder={armadoCarrito?.direccion}/>
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
                        <MDBTypography tag="h5">US$ {armadoCarrito?.total}</MDBTypography>
                      </div>
                      {user?<Link class="buttonChico" to="/">Comprar</Link>:<Link class="buttonChico" to="/registro">Registrate</Link>}
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>):(
    <div>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <h1>ya iniciamos</h1>
    </div>):(
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
                            <button onClick={(e)=>remove(e)} value={e._id} style={{border:'none',color:'#fff',fontWeight:"bolder", backgroundColor:'red', fontSize:'larger',width:'2rem', marginRight:'0.5rem'}}>
                              -
                            </button>
                              <MDBInput type="number" min="1" defaultValue={todosLosProductos?.filter(d=> d._id === e._id).length} size="sm"/>
                              <button onClick={(e)=>agregar(e)} value={e._id} style={{border:'none',color:'#fff', backgroundColor:'green',width:'2rem', marginLeft:'0.5rem',fontSize:'larger'}}>
                              +
                            </button>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                US$ {e?.price ? e?.price : e?.median}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="2" lg="1" xl="1" className="text-end">
                            {/* <MDBTypography tag="p" className="mb-0">
                              <button onClick={(e)=>remove(e)} value={e._id} class="buttonChico">X</button>
                              </MDBTypography> */}
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

                      <div className="pt-2">
                        
                        <Link id="butonCarrouselMain" to="/menu">
                          <i id="butonCarrousel" class="bi bi-arrow-left-circle-fill"> Volver a la tienda</i>
                        </Link>
                        
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
                      <Link class="buttonChico" to="/pago">Comprar</Link>

                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>)}</div>
  );
}
