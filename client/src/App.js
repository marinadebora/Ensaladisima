
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Registro from './components/Registro';
import Profile from './components/Profile';
import Contacto from './components/Contacto';
import { PideTuEnsalada } from './components/PideTuEnsalada';
import CrearProduto from './FormPost/Crear Producto';
import Login from './components/Login';
import BaseEdit from './FormPut/putBases';
import { ArmandoEnsalada } from './components/ArmandoEnsalada';



function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <Routes>

        <Route exact path= '/' element={<Home/>}/>
        <Route path= '/menu' element={<Menu/>}/>
        <Route path= '/pideTuEnsalada' element={<PideTuEnsalada />}/>

        <Route path= '/checkout' element={<CheckOut/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/registro' element={<Registro/>}/>
        <Route path= '/profile' element={<Profile/>}/>
        <Route path= '/contacto' element={<Contacto/>}/>

        {/* rutas para administador */}

        <Route path= '/admin' element={<CrearProduto/>}/>  
        <Route path= '/adminedit/:id' element={<BaseEdit/>}/>
        {/* <Route path= '/admincrear' element={<EditarProduto/>}/> */}

        <Route path= '/cargando' element={<ArmandoEnsalada/>}/>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
