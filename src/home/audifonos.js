import React, { Component } from "react";
import '../home/audifonos.css'
import tecladoFondo from '../img/audifonos/audifonosFondo.jpg'
import audifonos1 from '../img/audifonos/Logiaudifono1.jpg'
import audifonos2 from '../img/audifonos/Logiaudifono2.jpg'
import audifonos3 from '../img/audifonos/Logiaudifono3.jpg'
import audifonos4 from '../img/audifonos/Logiaudifono4.jpg'
import audifonos6 from '../img/audifonos/Logiaudifono6.jpg'
import audifonos7 from '../img/audifonos/Logiaudifono7.jpg'
import audifonos8 from '../img/audifonos/audifonos1.jpeg'
import audifonos9 from '../img/audifonos/audifonos2.jpg'
import audifonos10 from '../img/audifonos/audifonos3.jpeg'
import audifonos11  from'../img/audifonos/audifonos4.jpg'
import audifonos12  from'../img/audifonos/audifonos5.jpg'
import audifonos13  from'../img/audifonos/audifonos7.png'
import teclado14 from'../img/audifonos/audifonos8.jpg'



const datos = [
    { imgen: audifonos1, texto: 'AUDIFONO INALAMBRICO LOGITECH G733 LIGHTSPEED WIRELESS RGB - NEGRO', precio: 'S/. 839.90' },
    { imgen: audifonos2, texto: 'Logitech G G332 Headset - Audífonos Multiplataforma', precio: 'S/. 179.90' },
    { imgen: audifonos3, texto: 'AUDIFONO INALAMBRICO GAMER LOGITECH G733 LIGHTSPEED WIRELESS RGB - BLANCO', precio: 'S/. 839.90' },
    { imgen: audifonos4, texto: 'Audífonos gamer Logitech G G332 conexión 3.5 mm, 39 ohm, sensibilidad 107 dB', precio: 'S/. 196.90' },
    { imgen: audifonos6, texto: 'Audifonos Gamer Logitech G635 Lightsync Black | plazaVea - Supermercado', precio: 'S/. 330.00' },
    { imgen: audifonos7, texto: 'Audífonos gamer inalámbricos Logitech G Series G733 lila con luz rgb LED', precio: 'S/. 250.00' },
    { imgen: audifonos8, texto: '"Audifonos Gamer Pro - Kotion - Para Pc Laptop Y Celular - Azul"', precio: 'S/. 120.00' },
    { imgen: audifonos9, texto: 'Audífonos Gamer HAVIT Gamenote H2232D RGB', precio: 'S/. 99.00' },
    { imgen: audifonos10, texto: 'Audifono Gamer con Microfono Luces RGB marca:SEISA', precio: 'S/. 599.90' },
    { imgen: audifonos11, texto: 'Headphone Gamers Blue I2go-siempre Conectados', precio: 'S/. 89.90' },
    { imgen: audifonos12, texto: 'Ripley - KOTION EACH AUDIFONO GAMER CON MICROFONO PARA PC LAPTOP PS4 Y OTROS', precio: 'S/. 468.90' },
    { imgen: audifonos13, texto: 'Audífonos Gamer Bluetooth K55 - Promart', precio: 'S/. 250.00' },
    { imgen: teclado14, texto: 'Audífonos gamer Teraware inalámbrico, conexión bluetooth, 32 ohm', precio: 'S/. 350.00' },
    // { imgen: teclado14, texto: 'Logitech lanza el teclado mecánico gaming Pro X con interruptores configurables en sus teclas', precio: 'S/. 750.00' }


];


// const rss = imgTeclado.map((origen) => React.createElement('img', { className: 'imgTeclados', src: origen }));


class Audifonos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: datos.map((item, index) => (
                <div className="cajasAudifono" key={index}>
                    <img className='imgTeclados' src={item.imgen} alt="" />
                    <p className="textAudifono">{item.texto}</p>
                    <p className="TextPrecioAudifono">{item.precio}</p>
                    <div className="Buttom-div">
                    <button className="buttonComprarAudifono">Comprar</button>    
                    </div>
                    
                </div>
            ))
        };
    };
    state = {
        elements: new Array(),

    };
    render() {
        return (
            <div>
                <img className="fondoTeclado" src={tecladoFondo} />
                <h1 className="text-audifono">Audifonos</h1>
                <h1 className="NuestrosProductos"> nuestros productos</h1>
                <div className="contenedorPrincipal">
                    <div className="containerTEclado">
                    
                    {this.state.elements}
                  
                        
                    </div>
                </div>

            </div>
        )
    }
}
export default Audifonos;