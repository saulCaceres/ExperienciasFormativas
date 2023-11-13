import { Component } from "react";
import '../src/MenuPrincipal.css';
import Conocenos from "./conocenos";


const List = new Array('Inicio', 'Conocenos', 'Teclados', 'Audifonos', 'Mouse', 'Nuevo Ingreso', 'Contacto');
const Redirecion = new Array(Conocenos);

class MenuPrincipal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            bloques: List.map((it) => <a className="bloque" href={Redirecion}>{it}</a>),
            
        };
    };
    state = {
        bloques: new Array(),
        
    };
    render(){
        return(
            <div className="cabecera">
        <h1>COMPU STORE</h1>
        {this.state.bloques}
    </div>
        )
        
    }
}
export default MenuPrincipal;