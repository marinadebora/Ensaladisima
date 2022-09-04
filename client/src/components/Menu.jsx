import React from 'react';
import '../styles/Home.css';
import NavBarMenu from './NavBarMenu';
import Ensaladas from './Ensaladas';
import Bebidas from './Bebidas';
import Postres from './Postres';
import ensaladaMediana from "../images/ensaladera.png";
import ensaladaGrande from "../images/ensaladera.png";
import { useEffect/* , useState  */} from "react";
import { useDispatch, useSelector } from "react-redux";
import { salads,desserts,beverages } from "../action/index.js";
import "../styles/Menu.css";
import CarrouselEP from './CarrouselEP';
import { useLocalStorage } from '../useLocalStorage';





const Menu = () => {

  const dispatch = useDispatch();
  const allSalads = useSelector((state) => state.salads);
  const allDesserts= useSelector(state=>state.desserts)
  const allBeverages = useSelector(state => state.beverages)

const [medianas, setmeMedianas] = useLocalStorage ('medianas',[])
const [grandes, setmeGrandes] = useLocalStorage ('grandes',[])
const [dessert, setDessert] = useLocalStorage('postres',[])
const [beverage, setBeverage] = useLocalStorage('bebidas',[])


  useEffect(() => {
    dispatch(salads());
    dispatch(desserts())
    dispatch(beverages())
  }, [dispatch]);
  
  
  let medium=(name)=>{
    let ensaladaM=allSalads.filter(e=>e.name===name)
    setmeMedianas([...medianas,...ensaladaM])

  }
  let big=(name)=>{
    let ensaladaG=allSalads.filter(e=>e.name===name)
    setmeGrandes([...grandes,...ensaladaG])
 
  }
 
  let select=(name)=>{
    let postre= allDesserts.filter(e=>e.name===name)
  setDessert([...dessert,...postre])
  let bebidas= allBeverages.filter(e=>e.name===name)
  setBeverage([...beverage,...bebidas])
console.log(postre)
console.log(bebidas)

  }
  
  return (
    <div>
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

        <div  id="ensaladasDeLaCasa">
        
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
              medium={()=>medium(e.name)}
              big={()=>big(e.name)}
        />
            ))
          }
          
        </div>
        <div class="clearFix"></div>

        <div class="divisorMenu">..............................................................</div>

        <div id="bebidas">
          <h1 id="tituloMenu">Bebidas</h1>
          {
            allBeverages?.map(e=>(
            <Bebidas
            id={e._id}
            image={e.image}
            name={e.name}
            price={e.price}
            select={()=>select(e.name)}
            />
            ))
          }
          
         
        </div>

        <div class="divisorMenu">..............................................................</div>

        <div id="postres">
          <h1 id="tituloMenu">Postres</h1>
          {
            allDesserts?.map(e=>(
              <Postres
              id={e._id}
              image={e.image}
              name={e.name}
              price={e.price}
              select={()=>select(e.name)}
              />
            ))
          }
        
        </div>
       
    </div>
    </div>
  )
}

export default Menu