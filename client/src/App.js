
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Registro from './components/Registro';
import Profile from './components/Profile';
import ContactForm from './components/ContactForm';
import { PideTuEnsalada } from './components/PideTuEnsalada';
import AdminProductos from './components/AdminProductos';
import AdminOrdenes from './components/AdminOrdenes';
import AdminUsuarios from './components/AdminUsuarios';
import BaseEdit from './FormPut/putBases';
import Login from './components/Login';
import Pago from './components/Pago';
import { ArmandoEnsalada } from './components/ArmandoEnsalada';
import SendEmail, { CambioPassword } from './components/CambioPassword';
import ConfirmacionPago from './components/ConfirmacionPago'
import AdminUsuarioId from './components/AdminUsuarioId';

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
        <Route exact path= '/confirmacionPago' element={<ConfirmacionPago />}/>

        <Route exact path= '/login' element={<Login/>}/>
        <Route exact path= '/registro' element={<Registro/>}/>
        <Route exact path= '/profile' element={<Profile/>}/>
        <Route exact path= '/contacto' element={<ContactForm/>}/>
        

        {/* rutas para administador */}
        <Route exact path= '/admin_productos' element={<AdminProductos />}/>
        <Route exact path= '/admin_ordenes' element={<AdminOrdenes />}/>
        <Route exact path= '/admin_usuarios' element={<AdminUsuarios />}/>
        <Route path= '/adminedit/:id' element={<BaseEdit/>}/>
        {/* <Route path= '/admincrear' element={<EditarProduto/>}/> */}
        <Route path= '/cargando' element={<ArmandoEnsalada/>}/>
        <Route path= '/sendEmail' element={<SendEmail/>}/>
        <Route path= '/password/:_id' element={<CambioPassword/>}/>
        <Route path= "/adminId/:id" element={<AdminUsuarioId/>}/>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
