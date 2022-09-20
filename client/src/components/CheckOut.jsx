import {
  /* MDBBtn, */
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useLocalStorage } from '../useLocalStorage'
import React from "react";
import '../styles/CheckOut.css'
import {
  Link,
  /* useNavigate */
} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eliminarDelCarrito, getPedidos, agregarAlCarrito,
  putPedidocargarPedido
} from "../action";
import NavBar from "./NavBar";





export default function QuantityEdit() {
  //estados globales de arrays de ensaladas creadas por el usuario con id
  let ensaladaMed = useLocalStorage('ensaladaM', [])
  let ensaladaGr = useLocalStorage('ensaladaG', [])
  let ensaladaMediana = ensaladaMed[0]
  let ensaladaGrande = ensaladaGr[0]
  //imagen para ensaladas creadas por el usuario 
  //https://res.cloudinary.com/deqbqghhq/image/upload/v1663241770/ensaladas/ensaladaCreada_ags3pn.png
  //para renderizar bebidas y postres desde localStorage
  let bebidas = useLocalStorage('bebidas', [])
  let postres = useLocalStorage('postres', [])
  let beb = bebidas[0]
  let post = postres[0]
  const pedido = useSelector(state => state.pedidos)

  //para renderizar ensaladas medianas desde localStorage
  let ensaladasMed = useLocalStorage('medianas', [])
  let ensaladasGr = useLocalStorage('grandes', [])
  let med = ensaladasMed[0]
  let gran = ensaladasGr[0]

  const [user, setUser] = useState(null)

  /* const todosLosPedidos = pedido?.filter(e => e._id === user?.orders[0]) */

  const crearOrders = () => {
    const buscarMedianasM = JSON.parse(localStorage.getItem('medianas'))
    const buscarGrandesM = JSON.parse(localStorage.getItem('grandes'))
    const buscarBebidasM = JSON.parse(localStorage.getItem('bebidas'))
    const buscarPostresM = JSON.parse(localStorage.getItem('postres'))
    const localUser = JSON.parse(localStorage.getItem('loguearUsuario'))
    const buscarPedido = pedido?.filter(e => e._id === localUser?.orders[0])

    if (buscarPedido?._id) {
      if (buscarPedido?.salads === [] && buscarPedido?.beverages === [] && buscarPedido?.desserts === []) {
        const ensladaMenuMediana = buscarMedianasM ? buscarMedianasM?.map(e => e._id) : []
        const ensladaMenuGrande = buscarGrandesM ? buscarGrandesM?.map(e => e._id) : []
        const bebidasMenus = buscarBebidasM ? buscarBebidasM?.map(e => e._id) : []
        const postreMenus = buscarPostresM ? buscarPostresM?.map(e => e._id) : []
        const data = {
          user: localUser.id,
          saladsMenu: ensladaMenuMediana,
          saladsMenuBig: ensladaMenuGrande,
          saladsMed: [],
          saladsBig: [],
          beverages: bebidasMenus,
          desserts: postreMenus,
          totalPayable: 0,
          delievery: true,
          adress: localUser?.adress ? localUser?.adress : ''
        }
        console.log(data)
           /* const reas = await */ dispatch(putPedidocargarPedido(data))

      } else {
        localStorage.getItem('loguearUsuario')
      }
    } else {
      localStorage.getItem('loguearUsuario')
    }
  }

  // agregar cal carrito
  const agregar = (e) => {
    const buscarMed = JSON.parse(localStorage.getItem('medianas'))
    const buscarBig = JSON.parse(localStorage.getItem('grandes'))
    const buscarBebidas = JSON.parse(localStorage.getItem('bebidas'))
    const buscarPostres = JSON.parse(localStorage.getItem('postres'))
    const buscarEnsaladaM = JSON.parse(localStorage.getItem('ensaladaM'))
    const buscarEnsaladaG = JSON.parse(localStorage.getItem('ensaladaG'))

    const filtroMed = buscarMed?.find(a => a._id === e.target.value)
    const filtroBig = buscarBig?.find(a => a._id === e.target.value)
    const filtroBebida = buscarBebidas?.find(a => a._id === e.target.value)
    const filtropostre = buscarPostres?.find(a => a._id === e.target.value)
    const filtroEnsaladaM = buscarEnsaladaM?.find(a => a._id === e.target.value)
    const filtroEnsaladaG = buscarEnsaladaG?.find(a => a._id === e.target.value)

    if (filtroMed) {
      const agregar = buscarMed?.push(filtroMed)
      console.log(agregar)
      localStorage.setItem('medianas', JSON.stringify(buscarMed))
      window.location.reload(false)
    } else if (filtroBig) {
      const agregar = buscarBig?.push(filtroBig)
      console.log(agregar)
      localStorage.setItem('grandes', JSON.stringify(buscarBig))
      window.location.reload(false)
    } else if (filtroBebida) {
      const agregar = buscarBebidas?.push(filtroBebida)
      console.log(agregar)
      localStorage.setItem('bebidas', JSON.stringify(buscarBebidas))
      window.location.reload(false)
    } else if (filtropostre) {
      const agregar = buscarPostres?.push(filtropostre)
      console.log(agregar)
      localStorage.setItem('postres', JSON.stringify(buscarPostres))
      window.location.reload(false)
    } else if (filtroEnsaladaM) {
      const agregar = buscarEnsaladaM?.push(filtroEnsaladaM)
      console.log(agregar)
      localStorage.setItem('ensaladaM', JSON.stringify(buscarEnsaladaM))
      window.location.reload(false)
    } else if (filtroEnsaladaG) {
      const agregar = buscarEnsaladaG?.push(filtroEnsaladaG)
      console.log(agregar)
      localStorage.setItem('ensaladaG', JSON.stringify(buscarEnsaladaG))
      window.location.reload(false)
    }
  }

  // eleiminar del carrito

  const remove = (e) => {
    const buscarMed = JSON.parse(localStorage.getItem('medianas'))
    const buscarBig = JSON.parse(localStorage.getItem('grandes'))
    const buscarBebidas = JSON.parse(localStorage.getItem('bebidas'))
    const buscarPostres = JSON.parse(localStorage.getItem('postres'))
    const buscarEnsaladaM = JSON.parse(localStorage.getItem('ensaladaM'))
    const buscarEnsaladaG = JSON.parse(localStorage.getItem('ensaladaG'))


    const filtroMed = buscarMed?.find(a => a._id === e.target.value)
    const filtroBig = buscarBig?.find(a => a._id === e.target.value)
    const filtroBebida = buscarBebidas?.find(a => a._id === e.target.value)
    const filtropostre = buscarPostres?.find(a => a._id === e.target.value)
    const filtroEnsaladaM = buscarEnsaladaM?.find(a => a._id === e.target.value)
    const filtroEnsaladaG = buscarEnsaladaG?.find(a => a._id === e.target.value)

    if (filtroMed) {
      const borrar = buscarMed?.splice(buscarMed?.indexOf(filtroMed), 1)
      console.log(borrar)
      localStorage.setItem('medianas', JSON.stringify(buscarMed))
      window.location.reload(false)
    } else if (filtroBig) {
      const borrar = buscarBig?.splice(buscarBig?.indexOf(filtroBig), 1)
      console.log(borrar)
      localStorage.setItem('grandes', JSON.stringify(buscarBig))
      window.location.reload(false)
    } else if (filtroBebida) {
      const borrar = buscarBebidas?.splice(buscarBebidas?.indexOf(filtroBebida), 1)
      console.log(borrar)
      localStorage.setItem('bebidas', JSON.stringify(buscarBebidas))
      window.location.reload(false)
    } else if (filtropostre) {
      const borrar = buscarPostres?.splice(buscarPostres?.indexOf(filtropostre), 1)
      console.log(borrar)
      localStorage.setItem('postres', JSON.stringify(buscarPostres))
      window.location.reload(false)
    } else if (filtroEnsaladaM) {
      const borrar = buscarEnsaladaM?.splice(buscarEnsaladaM?.indexOf(filtroEnsaladaM), 1)
      console.log(borrar)
      localStorage.setItem('ensaladaM', JSON.stringify(buscarEnsaladaM))
      window.location.reload(false)
    } else if (filtroEnsaladaG) {
      const borrar = buscarEnsaladaG?.splice(buscarEnsaladaG?.indexOf(filtroEnsaladaG), 1)
      console.log(borrar)
      localStorage.setItem('ensaladaG', JSON.stringify(buscarEnsaladaG))
      window.location.reload(false)
    }
  }

  // carrito de usuario registrado

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('loguearUsuario')) {
      const usuario = JSON.parse(localStorage.getItem('loguearUsuario'))
      setUser(usuario)
      dispatch(getPedidos())

    }
  }, [dispatch])

  let resultado = pedido?.find(e => e._id === user?.orders[0])
  let armadoCarrito = {
    _id: resultado?._id,
    user: resultado?.user?.email,
    producto: resultado?.salads?.map(e => e).concat(resultado?.beverages?.map(e => e)).concat(resultado?.desserts?.map(e => e)),
    total: resultado?.totalPayable,
    direccion: resultado?.adress
  }

  const agregarAlpedido = (e) => {
    dispatch(agregarAlCarrito({ id: resultado?._id, _id: e.target.value }))
    window.location.reload(false)
  }

  const removeDelCarrito = (e) => {
    dispatch(eliminarDelCarrito({ id: resultado?._id, _id: e.target.value }))
    window.location.reload(false)
    /* console.log(e.target.value)
    console.log(armadoCarrito?.producto?.filter(e => e._id ) === toString(e.target.value)).length )
    if(resultado?.salads?.filter(e => e._id == e.target.value) .length > 1 ){
      dispatch(eliminarDelCarrito({ id: resultado?._id, _id: e.target.value }))
      window.location.reload(false)
    }else{
      alert('no puede borrar todo el carrito')
    } */

  }

  let productosMapInicio = armadoCarrito?.producto?.map(item => {
    return [item._id, item]
  })
  let productosMapArrInicio = new Map(productosMapInicio)
  let unicosInicio = [...productosMapArrInicio.values()]



  let todosLosProductos = [beb, post, med, gran, ensaladaMediana, ensaladaGrande].flat()
  let productosReales = todosLosProductos.filter(e => e !== undefined && e !== null)
  let total = productosReales?.map(e => e?.price)
  let suma = total?.reduce((e, i) => e + i, 0)


  let productosMap = productosReales.map(item => {
    return [item._id, item]
  })
  let productosMapArr = new Map(productosMap)
  let unicos = [...productosMapArr.values()]

  /* const borrarDelCarrito = (e)=>{
    console.log(e.target.value)
    console.log(resultado?.beverages?.find(a=> a._id === e.target.value))
    if(resultado?.beverages?.find(a=> a._id === e.target.value)){
      resultado = resultado?.beverages?.find(a=> a._id !== e.target.value)
      console.log(resultado)
    }else if(resultado?.salads?.find(a=> a._id === e.target.value)){
      resultado?.salads?.find(a=> a._id !== e.target.value)
    }else if(resultado?.desserts?.find(a=> a._id === e.target.value)){
      resultado?.desserts?.find(a=> a._id !== e.target.value)
    }
  } */

  const [envio, setEnvio] = useState(true)


  const handleClick = () => {
    if (envio === true) {
      setEnvio(false)
      setDatos({
        adress: datos?.adress,
        delivery: false,
        id: user?.orders[0],
        comentario: datos?.comentario
      })
    } else {
      setEnvio(true)
      setDatos({
        adress: "",
        delivery: true,
        id: user?.orders[0],
        comentario: datos?.comentario
      })
    }
  }

  const cambiarDireccion = (e)=>{
  setDatos({
    adress: e.target.value,
    delivery: true,
    id: user?.orders[0],
    comentario: datos?.comentario
  })
  }

  const cambiarComentario = (e)=>{
    setDatos({
      adress: datos?.adress,
      delivery: true,
      id: user?.orders[0],
      comentario: e.target.value
    })
  }

  const enviarEnTrue = () => {
    return (
      <div>
        <div className="mb-4 pb-2">
          <spam style={{ fontSize: '1.7em' }}>Delivery</spam>
          <label class="toggleSwitch nolabel" >
            <input defaultValue={user?.adress ? user?.adress[0] : ''} onClick={handleClick} value={false} style={{ width: '1em' }} type="checkbox" />
            <span style={{ marginLeft: '0.2rem', fontSize: '1.5em' }}>Cambiar</span>
          </label>
        </div>
      </div>
    )
  }

  const enviarEnFalse = () => {
    return (
      <div>
        <div className="mb-4 pb-2">
          <spam style={{ fontSize: '1.7em' }}>Retirar en la tienda</spam>
          <label class="toggleSwitch nolabel" >
            <input onClick={handleClick} value={true} style={{ width: '1em' }} type="checkbox" />
            <span style={{ marginLeft: '0.2rem', fontSize: '1.5em' }}>Cambiar</span>
          </label>
        </div>
      </div>)
  }

  const [datos, setDatos] = useState({
    adress:"",
    delivery: envio,
    id: user?.orders[0],
    comentario: ""
  })
  console.log(datos)
  const cargarDatos = ()=>{
    console.log(datos)
  }

  const direction = new Set(user?.adress)
  console.log(direction)
  const totales = [...direction]
  console.log(totales)
  return (
    <div>
      <NavBar />
      {user ? /* user?.orders[0] ? */ (

        <section className="h-100 h-custom" style={{ backgroundColor: "#94D2DE", paddingTop: "100px" }}>
          {productosReales?.salads === [] && productosReales?.beverages === [] && productosReales?.desserts === [] ? crearOrders() : <></>}
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
                                  <button onClick={(e) => removeDelCarrito(e)} value={e._id} style={{ border: 'none', color: '#fff', fontWeight: "bolder", backgroundColor: 'red', fontSize: 'larger', width: '2rem', marginRight: '0.5rem' }}>
                                    -
                                  </button>
                                  <p style={{ marginLeft: '10%', marginRight: '10%', marginTop: '10%' }}>{armadoCarrito?.producto?.filter(d => d._id === e._id).length} </p>
                                  <button onClick={(e) => agregarAlpedido(e)} value={e._id} style={{ border: 'none', color: '#fff', backgroundColor: 'green', width: '2rem', marginLeft: '0.5rem', fontSize: 'larger' }}>
                                    +
                                  </button>
                                </MDBCol>
                                <MDBCol md="3" lg="2" xl="2" className="text-end">
                                  <MDBTypography tag="h6" className="mb-0">
                                    US$ {e?.price ? e?.price : e?.median}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol md="3" lg="2" xl="2" className="text-end">
                                  <MDBTypography tag="h6" className="mb-0">
                                    <button id="buttonDeleteCheckOut" value={e._id} /* onClick={borrarDelCarrito} */>X</button>
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
                              {armadoCarrito?.producto?.length} Productos
                            </MDBTypography>
                            <MDBTypography tag="h5">US$ {armadoCarrito?.total}</MDBTypography>
                          </div>
                          <MDBTypography tag="h5" className="text-uppercase mb-3">
                            Forma De Entrega
                          </MDBTypography>
                          <div className="mb-4 pb-2">
                            <span>
                              {envio === true ? enviarEnTrue() : enviarEnFalse()}
                            </span>
                            <span>
                              {envio === true ?
                                <div>
                                  <select name="direction" onChange={cambiarDireccion}>
                                    <option value=''>Selecciona</option>
                                    {totales?.map(e => {
                                      return (
                                        <option value={e}>{e}</option>
                                      )
                                    })}
                                  </select>
                                  <MDBInput size="lg" onChange={cambiarDireccion} value={datos.adress} placeholder='Ingresar Direccion' />
                                  <br />
                                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                                    Comentarios
                                  </MDBTypography>
                                  <div className="mb-5">
                                    <MDBInput onChange={cambiarComentario} value={datos.comentario} size="lg" />
                                  </div>
                                </div> :
                                <div>
                                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                                    Comentarios
                                  </MDBTypography>
                                  <div className="mb-5">
                                    <MDBInput onChange={cambiarComentario} value={datos.comentario} size="lg" />
                                  </div>
                                </div>
                              }
                            </span>

                          </div>
                          {/* <MDBTypography tag="h5" className="text-uppercase mb-3">
                            Comentarios
                          </MDBTypography>
                          <div className="mb-5">
                            <MDBInput size="lg" />
                          </div> */}
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography tag="h5" className="text-uppercase">
                              Total
                            </MDBTypography>
                            <MDBTypography tag="h5">US$ {armadoCarrito?.total}</MDBTypography>
                          </div>
                          {user ? <Link to="/pago"><button onClick={cargarDatos()} class="buttonChico">Comprar</button></Link> : <Link class="buttonChico" to="/registro">Registrate</Link>}
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>) /* : (
        <div>
          <br /><br /><br /><br /><br /><br /><br />
          <h1>estoy</h1>
          {{crearOrders()}}
        </div>)  */: (
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
                                productosReales && <MDBTypography className="mb-0 text-muted">{productosReales.length} Productos  </MDBTypography>
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
                                    <button onClick={(e) => remove(e)} value={e._id} style={{ border: 'none', color: '#fff', fontWeight: "bolder", backgroundColor: 'red', fontSize: 'larger', width: '2rem', marginRight: '0.5rem' }}>
                                      -
                                    </button>
                                    <p style={{ marginLeft: '10%', marginRight: '10%', marginTop: '10%' }}>{productosReales.filter(d => d._id === e._id).length}</p>
                                    <button onClick={(e) => agregar(e)} value={e._id} style={{ border: 'none', color: '#fff', backgroundColor: 'green', width: '2rem', marginLeft: '0.5rem', fontSize: 'larger' }}>
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
                                {productosReales.length} Productos
                              </MDBTypography>
                              <MDBTypography tag="h5">US$ {suma}</MDBTypography>
                            </div>
                            {/* <MDBTypography tag="h5" className="text-uppercase mb-3">
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
                            </MDBTypography> */}
                            <div className="mb-5">
                              <h5 size="lg">Para poder realizar tu compra inicia sesion.</h5>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-between mb-5">
                              {/* <MDBTypography tag="h5" className="text-uppercase">
                                Total
                              </MDBTypography>
                              <MDBTypography tag="h5">US$ {suma}</MDBTypography> */}
                            </div>
                            {user ? <Link class="buttonChico" to="/">Comprar</Link> : <Link class="buttonChico" to="/registro">Registrate</Link>}
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