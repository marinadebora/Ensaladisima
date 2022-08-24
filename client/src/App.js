import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';

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
