import React, { Component } from "react";
import '../src/MenuPrincipal.css';

import { Link, Outlet } from "react-router-dom";


// const List = new Array('Inicio', 'Conocenos', 'Teclados', 'Audifonos', 'Mouse', 'Nuevo Ingreso', 'Contacto');
// const Redirecion = new Array(Conocenos);

// const rutas = Redirecion.map((origenes) => React.createElement())
class MenuPrincipal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            // bloques: List.map((it) => <a className="bloque" href={Redirecion}>{it}</a>),
            
        };
    };
    state = {
        bloques: new Array(),
        
    };
    render(){
        return(
            <div className="cabecera">
        <h1 className="compustore">COMPU STORE</h1>
        {this.state.bloques}
        <Link to="/inicio" className="bloque">inicio</Link>
        <Link to="/conocenos" className="bloque">conocenos</Link>
        <Link to="/Teclados" className="bloque">Teclado</Link>
        <Link to="/Audifonos" className="bloque">Adifonos</Link>
        <Link to="/Mouses" className="bloque">Mouse</Link>
        <Link to ="/Nuevo ingreso"className="bloque">Nuevo Ingreso</Link>
        <Link to="/contactanos"className="bloque">contactanos</Link>

        <Outlet/>
        
    </div>
        )
        
    }
}
export default MenuPrincipal;