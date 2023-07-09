import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import {Landing, Form, Home, Detail} from './views'
import { Route } from 'react-router-dom';

function App() {

  const location = useLocation()
  
  return (
    <div className="App">
      {/* Con esto condiciono que la NavBar no aparezca en la landing */}
      {location.pathname !== '/' && <NavBar />} 
      
      {/* Una forma de definir rutas */}
      <Route exact path='/'>
        <Landing />
      </Route>

      {/* Otra forma de definir rutas, no se le pueden pasar props*/}
      <Route path='/home' component={Home} />

      {/* 'Mejor' forma de definir rutas */}
      <Route path='/detail' render={() => <Detail unaProp='valor' />}/>
      <Route path='/form' render={() => <Form />}/>
    </div>
  );
}

export default App;
