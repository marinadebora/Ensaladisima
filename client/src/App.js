
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
import Admin from './components/Admin';
import AdminEdit from './components/AdminEdit';
import Pago from './components/Pago';



function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <Routes>

        <Route exact path= '/' element={<Home/>}/>
        <Route exact path= '/menu' element={<Menu/>}/>
        <Route exact path= '/pideTuEnsalada' element={<PideTuEnsalada />}/>
        <Route exact path= '/checkout' element={<CheckOut/>}/>
        <Route exact path= '/pago' element={<Pago />}/>

        <Route exact path= '/login' element={<Login/>}/>
        <Route exact path= '/registro' element={<Registro/>}/>
        <Route exact path= '/profile' element={<Profile/>}/>
        <Route exact path= '/contacto' element={<Contacto/>}/>
        

        {/* rutas para administador */}
        <Route exact path= '/admin' element={<Admin />}/>
        <Route path= '/admincrear' element={<CrearProduto/>}/>  
        <Route path= '/adminedit' element={<AdminEdit/>}/>
        <Route path= '/adminedit/:_id' element={<BaseEdit/>}/>


      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
