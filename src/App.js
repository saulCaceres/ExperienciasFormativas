import React, { Component } from 'react';
import './App.css';
import Menu from '../src/Menu';
import { Route, Routes } from 'react-router-dom';
import MenuPrincipal from './MenuPrincipal';
import Conocenos from './home/conocenos';
import Audifonos from './home/audifonos';
import Mouses from './home/mouse';
import Header from './heder';
import Teclados from './home/teclado';
import NuevosIngresos from './home/nuevoIngreso';
import Contactanos from './home/contactanos';
class App extends Component {

  render() {
    return (
      <div className="container">
        <Routes>
          <Route path='/' element={<MenuPrincipal />}>
          <Route path='/inicio' element={<Header />}/>
          <Route path='/conocenos' element={<Conocenos />}/>
          <Route path='/teclados' element={<Teclados />}/>
          <Route path='/Audifonos' element={<Audifonos />}/>
          <Route path='/Mouses' element={<Mouses />}/>
          <Route path='/Nuevo ingreso' element={<NuevosIngresos />}/>
          <Route path='/contactanos' element={<Contactanos />}/>
          </Route>
        </Routes>
        <Menu />

      </div>
    );
  }
}

export default App;
