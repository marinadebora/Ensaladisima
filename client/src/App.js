
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';

import Menu from './components/Menu';
import Home from './components/Home';

import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>

        <Route exact path= '/' element={<Home/>}/>
        <Route exact path= '/menu' element={<Menu/>}/>

      

      </Routes>
      
    </div>
  );
}

export default App;
