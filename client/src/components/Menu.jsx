import React, { useState } from 'react';
import '../styles/Home.css';
import '../styles/Bases.css'
import NavBarMenu from './NavBarMenu';
import Ensaladas from './Ensaladas';
import Bebidas from './Bebidas';
import Postres from './Postres';
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { salads,desserts,beverages, saladsBig, menuMediano, menuGrande, pedidoBebidaLogueado, pedidoPostreLogueado, usuariosRegistrados } from "../action/index.js";
import "../styles/Menu.css";
import CarrouselEP from './CarrouselEP';
import { useLocalStorage } from '../useLocalStorage';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'





const Menu = () => {
  const history = useNavigate()
  const dispatch = useDispatch();
  const allSalads = useSelector((state) => state.salads);
  const allSaladsBig = useSelector(state => state.saladsBig)
  const allDesserts= useSelector(state=>state.desserts)
  const allBeverages = useSelector(state => state.beverages)
  


  const [medianas, setmeMedianas] = useLocalStorage ('medianas',[])
  const [grandes, setmeGrandes] = useLocalStorage ('grandes',[])
  const [dessert, setDessert] = useLocalStorage('postres',[])
  const [beverage, setBeverage] = useLocalStorage('bebidas',[])
  const [user, setUser] = useState(null)


  useEffect(() => {
    dispatch(salads());
    dispatch(desserts())
    dispatch(beverages())
    dispatch(saladsBig())
    dispatch(usuariosRegistrados())
    if(localStorage.getItem('loguearUsuario')){
      const usuario = JSON.parse(localStorage.getItem('loguearUsuario'))
      setUser(usuario)
    }
  }, [dispatch]);

  // carga local
  
  
  
  let medium=(name)=>{
    if(!user){
      let ensaladaM=allSalads.filter(e=>e.name===name)
      setmeMedianas([...medianas,...ensaladaM])
      history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });
    }else{
      dispatch(menuMediano(name))
      history("/cargando")
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agrego correctamente",
        showConfirmButton: false,
        timer: 500
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });
    }
    

  }
  let big=(name)=>{
    if(!user){
      let ensaladaG=allSaladsBig.filter(e=>e.name===name)
      setmeGrandes([...grandes,...ensaladaG])
      history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });
    }else{
      dispatch(menuGrande(name))
      history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });
    }
    
  }

  const userbebidas = (name)=>{
    dispatch(pedidoBebidaLogueado(name))
    history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });
  }

  const userPostres = (name)=>{
    dispatch(pedidoPostreLogueado(name))
    history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });
  }

  let select=(name)=>{
    if(!user){
      let postre= allDesserts.filter(e=>e.name===name)
      setDessert([...dessert,...postre])
      let bebidas= allBeverages.filter(e=>e.name===name)
      setBeverage([...beverage,...bebidas])
      history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });history("/cargando")
    }else{
      let bebidaLogueado = allBeverages?.filter(e=>e.name===name?.bebidas)
      console.log(name)
      console.log(bebidaLogueado)
      bebidaLogueado?.length ? userbebidas(name)/* dispatch(pedidoBebidaLogueado(name)) */ :
      userPostres(name)/* dispatch(pedidoPostreLogueado(name)) */ 
      history("/cargando")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se agrego correctamente',
        showConfirmButton: false,
        timer: 1200
      })
        .then((value) =>
        {
          switch (value) {
            default:
              history("/menu");
              break
          }
        });history("/cargando")
    }
    
  }
  
  return (
    <div>
      <NavBar/>
      <NavBarMenu/>
    <div class="container">
        <CarrouselEP/>
        <h1 id="tituloMenu"> Ensaladas de la casa</h1>

  
        <div id="tamaños">
          <h4 id="tamaño">Opciones de tamaño:</h4>
          <img src={ensaladaMediana} alt="img" id="ensaladaMediana" />
          <h5 id="tamañoPrecioM">Mediana: u$d 13</h5>
          <img src={ensaladaGrande} alt="img" id="ensaladaGrande" />
          <h5 id="tamañoPrecioG">Grande: u$d 15</h5>
        </div>

        <div class="divisorMenu">..............................................................</div>

        <div id="ensaladasDeLaCasa">
        
          {
            
             allSalads?.map(e =>(
              <Ensaladas
              name={e.name}
              image={e.image}
              base={e.base}
              protein={e.protein}
              complement={e.complement}
              sauce={e.sauce}
              topping={e.topping}
              medium={() => medium(!user?e.name:{usuario:user?.email,menu:e.name})}
              big={()=>big(!user?e.name:{usuario:user?.email,menu:e.name})}
        />
            ))
          }
          
        </div>
        <div class="clearFix"></div>

        <div class="divisorMenu">..............................................................</div>

        <div id="bebidas">
          <h1 id="tituloMenu">Bebidas</h1>

          <div class="contain-bases">  
          {
            allBeverages?.map(e=>(
            
            <Bebidas
            id={e._id}
            image={e.image}
            name={e.name}
            price={e.price}
            select={()=>select(!user ? e.name:{usuario:user?.email, bebidas:e.name})}
            />
            ))
          }
          </div>
          
         
        </div>

        <div class="divisorMenu">..............................................................</div>

        <div id="postres">
          <h1 id="tituloMenu">Postres</h1>
          <div class="contain-bases">  
          {
            allDesserts?.map(e=>(
              <Postres
              id={e._id}
              image={e.image}
              name={e.name}
              price={e.price}
              select={()=>select(!user?e.name:{usuario:user?.email,postres:e.name})}
              />
            ))
          }
          </div>
        
        </div>
       
    </div>
    </div>
  )
}

export default Menu