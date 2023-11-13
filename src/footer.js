import React, { Component } from "react";
import facebook from '../src/img/facebook.png';
import instagram from '../src/img/instagram.png';
import twitter from '../src/img/twitter.png';
import '../src/footer.css';

const rs = new Array(facebook, instagram, twitter);
const ListFotter = new Array('Teclados Mecanicos', 'Adifonos Gamer', 'Mouses Gamer','Pantallas Gamer');
const datos = new Array('AV inca Garcilazo de la vega 1251 tienda 243 y 167- cerado de lima 15001 - peru');
const telefono = new Array('942-954414 Saulo Quispe','934-226661 Nayeli Toto');


const rss = rs.map((origen) => React.createElement('img', { className: 'img-rss', src: origen }));

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {           
            elements: ListFotter.map((x) => <ul className="ListFotter"><li><a href="">{x}</a></li> </ul>),
            datosTelefonicos: datos.map((x) => <ul className="datosTelefonicos"><li><p>{x}</p></li></ul>),
            marcarTelefonos: telefono.map((te) => <ul className="marcarTelefonos"><li><p>{te}</p></li></ul>)
        };
    };
    state = {
        elements: new Array(),
        datosTelefonicos:new Array(),
        marcarTelefonos:new Array()
    };
    render(){
        return(
            <footer>
            <div className="contenedor1">
                <h3>Atencion al cliente</h3>
                {this.state.elements}
                <div className="containerimg">
                {rss}
                </div>
                
            </div>
            <div className="contenedor1">
                {this.state.datosTelefonicos}
             
                {this.state.marcarTelefonos}
             
                
                 {/* <p> <img className="celular" src={celular} /></p>
                <p></p>  */}

            </div>
            <div className="contenedor2">
                <p className="gmail">saul.13qc@gmail.com</p>
                {this.state.marcarTelefonos}
            </div>


        </footer>
        )
    }
}
export default Footer;