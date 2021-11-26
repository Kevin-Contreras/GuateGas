import './App.css';
import Inicio from './components/inicio'
import Info from "./components/contacto"
import react from 'react'
import {BrowserRouter as Router,Routes,Route,link} from 'react-router-dom';

class App extends react.Component {

  render(){

    return (
      <Router>
    
        <Routes>
          <Route path="/nosotros" element={<Info/>}/>
          <Route path="/" element={<Inicio/>}/>
        </Routes>
      </Router>
    );
  }
  
}

export default App;