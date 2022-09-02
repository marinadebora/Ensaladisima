
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Profile from './components/Profile';
import Contacto from './components/Contacto';
import { PideTuEnsalada } from './components/PideTuEnsalada';
import Login from './components/Login';
import Register from './components/Register';






function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <Routes>

        <Route exact path= '/' element={<Home/>}/>
        <Route exact path= '/menu' element={<Menu/>}/>
        <Route exact path= '/pideTuEnsalada' element={<PideTuEnsalada />}/>
<<<<<<< HEAD
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/registrate' element={<Register/>}/>
=======
        <Route exact path= '/checkout' element={<CheckOut/>}/>
        <Route exact path= '/profile' element={<Profile/>}/>
        <Route exact path= '/contacto' element={<Contacto/>}/>
      
>>>>>>> e1ca0101f33ee0293cc91749a43b3e384abe8754

      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
