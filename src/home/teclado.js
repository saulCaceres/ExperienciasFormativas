import React, { Component } from "react";
import '../home/teclado.css'
import tecladoFondo from '../img/teclados/tecladoFondo.jpg'
import teclado1 from '../img/teclados/teclado1.jpg'
import teclado2 from '../img/teclados/teclado2.jpg'
import teclado3 from '../img/teclados/teclado3.jpg'
import teclado4 from '../img/teclados/teclado4.jpg'
import teclado5 from '../img/teclados/teclado5.jpg'
import teclado6 from '../img/teclados/teclado6.jpg'
import teclado7 from '../img/teclados/teclado7.jpg'
import teclado8 from '../img/teclados/teclado8.jpg'
import teclado9 from '../img/teclados/teclado9.webp'
import teclado10 from '../img/teclados/teclado10.jpeg'
import teclado11 from '../img/teclados/teclado11.jpg'
import teclado12 from '../img/teclados/teclado12.webp'
import teclado13 from '../img/teclados/teclado13.jpg'
import teclado14 from '../img/teclados/teclado15.jpg'
const datos = [
    { imgen: teclado1, texto: 'Teclado Mecanico-VSG  con cable', precio: 'S/. 150.00' },
    { imgen: teclado2, texto: 'Teclados Redragon HORUS 60% BLACK Wireless. English K632-PRO-RGB RED SWITCH', precio: 'S/. 339.00' },
    { imgen: teclado3, texto: 'Pauroty Teclado Mecanico inalambrico para juegos de alto nivel', precio: 'S/. 250.00' },
    { imgen: teclado4, texto: 'TECLADO MECÁNICO DEL 60% TECLADO MAGEGEE PARA JUEGOS CON INTERRUPTORES', precio: 'S/. 485.00' },
    { imgen: teclado5, texto: 'TECLADO MECANICO LOGITECH G413 LED ROJO, CARBON', precio: 'S/. 780.00' },
    { imgen: teclado6, texto: 'Teclados inalámbricos, bluetooth, portátiles y más - Coolbox0', precio: 'S/. 150.00' },
    { imgen: teclado7, texto: 'Teclado mecanico logitech g413 se - teclados(920-010433)', precio: 'S/. 300.00' },
    { imgen: teclado8, texto: 'Teclados Redragon HORUS 60% BLACK Wireless. English K632-PRO-RGB RED SWITCH - Mesajil', precio: 'S/. 350.00' },
    { imgen: teclado9, texto: 'Razer Blackwidow V3 Teclado Mecánico – Switch Verde', precio: 'S/. 599.90' },
    { imgen: teclado10, texto: 'Comprar teclado MX Keys S - Tamaño normal | Logitech', precio: 'S/. 150.00' },
    { imgen: teclado11, texto: 'LOGITECH - TECLADO G PRO TKL GX BLUE CLICKY RGB LYGHTSYNC', precio: 'S/. 468.90' },
    { imgen: teclado12, texto: 'Comprar teclado MX Keys S - Tamaño normal | Logitech', precio: 'S/. 250.00' },
    { imgen: teclado13, texto: 'Teclado Mecánico Logitech Pro Keyboard- KOBY INVERSIONES', precio: 'S/. 350.00' },
    { imgen: teclado14, texto: 'Logitech lanza el teclado mecánico gaming Pro X con interruptores configurables en sus teclas', precio: 'S/. 750.00' }


];


// const rss = imgTeclado.map((origen) => React.createElement('img', { className: 'imgTeclados', src: origen }));


class Teclados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: datos.map((item, index) => (
                <div className="cajasTeclado" key={index}>
                    <img className='imgTeclados' src={item.imgen} alt="" />
                    <p className="textTeclado">{item.texto}</p>
                    <p className="TextPrecio">{item.precio}</p>
                    <div className="Buttom-div">
                    <button className="buttonComprar">Comprar</button>    
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
                <h1 className="text-teclado">Teclados</h1>
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
export default Teclados;