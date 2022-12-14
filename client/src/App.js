
import {Routes, Route} from 'react-router-dom'
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
import Team from './components/Team';
import { ArmandoEnsalada } from './components/ArmandoEnsalada';
import SendEmail, { CambioPassword } from './components/CambioPassword';
import { Review } from './components/Review';
import { VerReview } from './components/VerReview';
import ConfirmacionPago from './components/ConfirmacionPago'
import { useEffect } from 'react'
import {  useDispatch ,} from 'react-redux'
import { usuariosId } from './action';
import { ErrorAdmin } from './components/ErrorAdmin';

import AdminUsuariosDetail from './components/AdminUsuariosDetail';
import DetalleHistorial from './components/DetalleHistorial';
import { HistorialCompras } from './components/HistorialCompra';


function App() {
  const dispatch = useDispatch()
  
  const localSt = JSON.parse(localStorage.getItem("loguearUsuario"));
  let id=localSt?._id
  //const myUserDetail = useSelector(state => state?.userId);

  useEffect(() => {
    dispatch(usuariosId(id))
  }, [dispatch,id]);
  return (
    localSt?
    !localSt?.admin  ?
    //renderiza si estas logueado pero no sos admin
    <div className="App">

      <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route exact path= '/menu' element={<Menu/>}/>
        <Route exact path= '/pideTuEnsalada' element={<PideTuEnsalada />}/>
        <Route exact path= '/checkout' element={<CheckOut/>}/>
        <Route exact path= '/pago' element={<Pago />}/>
        <Route exact path= '/confirmacionPago' element={<ConfirmacionPago/>}/>

        <Route exact path= '/login' element={<Login/>}/>
        <Route exact path= '/registro' element={<Registro/>}/>
        <Route exact path= '/profile' element={<Profile/>}/>
        <Route exact path= '/contacto' element={<ContactForm/>}/>
        <Route exact path= '/team' element={<Team/>}/>
        
        {/* rutas para administador */}
        <Route exact path= '/admin_productos' element={<ErrorAdmin />}/>
        <Route exact path= '/admin_ordenes' element={<ErrorAdmin />}/>
        <Route exact path= '/admin_usuarios' element={<ErrorAdmin />}/>
        <Route path= '/adminedit/:id' element={<ErrorAdmin/>}/>
        <Route path= "/adminId/:id" element={<ErrorAdmin/>}/>
        
        <Route path= '/cargando' element={<ArmandoEnsalada/>}/>
        <Route path= '/sendEmail' element={<ErrorAdmin/>}/>
        <Route path= '/password/:_id' element={<CambioPassword/>}/>
        <Route path= '/review' element={<Review/>}/>
        <Route path= '/historial' element={<HistorialCompras/>}/>
      </Routes>

      <Footer/>
      
    </div>
    : //renderiza si sos admin
    <div className="App">
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
      <Route exact path= '/team' element={<Team/>}/>
      <Route path= '/historial' element={<HistorialCompras/>}/>
      

      {/* rutas para administador */}
      <Route exact path= '/admin_productos' element={<AdminProductos />}/>
      <Route exact path= '/admin_ordenes' element={<AdminOrdenes />}/>
      <Route exact path= '/admin_usuarios' element={<AdminUsuarios />}/>
      <Route path= '/adminedit/:id' element={<BaseEdit/>}/>
      <Route path= "/adminId/:id" element={<AdminUsuariosDetail/>}/>

      <Route path= '/cargando' element={<ArmandoEnsalada/>}/>
      <Route path= '/sendEmail' element={<SendEmail/>}/>
      <Route path= '/password/:_id' element={<CambioPassword/>}/>
      <Route path= '/review' element={<Review/>}/>
      <Route path= '/verReview' element={<VerReview/>}/>
      <Route path='/detalleHistorial/:_id' element={<DetalleHistorial/>}/>
    </Routes>

    <Footer/>
    
  </div>:// renderiza si no estas logueado
  <div className="App">
  <Routes>
    <Route exact path= '/' element={<Home/>}/>
    <Route exact path= '/menu' element={<Menu/>}/>
    <Route exact path= '/pideTuEnsalada' element={<PideTuEnsalada />}/>
    <Route exact path= '/checkout' element={<CheckOut/>}/>
    <Route exact path= '/pago' element={<ErrorAdmin />}/>

    <Route exact path= '/login' element={<Login/>}/>
    <Route exact path= '/registro' element={<Registro/>}/>
    <Route exact path= '/profile' element={<Profile/>}/>
    <Route exact path= '/contacto' element={<ContactForm/>}/>
    <Route exact path= '/team' element={<Team/>}/>
    

    {/* rutas para administador */}
    <Route exact path= '/admin_productos' element={<ErrorAdmin />}/>
    <Route exact path= '/admin_ordenes' element={<ErrorAdmin />}/>
    <Route exact path= '/admin_usuarios' element={<ErrorAdmin />}/>
    <Route path= '/adminedit/:id' element={<ErrorAdmin/>}/>
    <Route path= "/adminId/:id" element={<ErrorAdmin/>}/>

    <Route path= '/cargando' element={<ArmandoEnsalada/>}/>
    <Route path= '/sendEmail' element={<SendEmail/>}/>
    <Route path= '/password/:_id' element={<CambioPassword/>}/>
    <Route path= '/historial' element={<HistorialCompras/>}/>
   
  </Routes>

  <Footer/>
  
</div>
  );
}

export default App;
