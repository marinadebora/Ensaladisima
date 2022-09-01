
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';


import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import { PideTuEnsalada } from './components/PideTuEnsalada';





function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <Routes>

        <Route exact path= '/' element={<Home/>}/>
        <Route exact path= '/menu' element={<Menu/>}/>
        <Route exact path= '/pideTuEnsalada' element={<PideTuEnsalada />}/>
      

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
