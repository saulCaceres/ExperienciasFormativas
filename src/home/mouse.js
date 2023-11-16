import React, { Component } from 'react';
import '../home/audifonos.css'
import tecladoFondo from '../img/mouse/audifonos5.jpg'
import mouse1 from '../img/mouse/mouse1.jpg'
import mouse2 from '../img/mouse/mouse2.jpg'
import mouse3 from '../img/mouse/mouse3.jpg'
import mouse4 from '../img/mouse/mouse4.jpg'
import mouse5 from '../img/mouse/mouse5.jpg'
import mouse6 from '../img/mouse/mouse6.jpeg'
import mouse7 from '../img/mouse/mouse7.png'
import mouse8 from '../img/mouse/mouse8.jpg'
import mouse9 from '../img/mouse/mouse9.jpg'
import mouse10 from '../img/mouse/mouse10.jpeg'
import mouse11 from '../img/mouse/mouse11.jpg'
import mouse12 from '../img/mouse/mouse12.jpg'
import mouse13 from   '../img/mouse/mouse13.jpg'
import mouse14 from   '../img/mouse/mouse14.jpg'
import mouse15 from   '../img/mouse/mouse16.jpg'
import mouse16 from   '../img/mouse/mouse17.jpg'
import mouse17 from   '../img/mouse/mouse18.jpeg'
import mouse18 from   '../img/mouse/mouse19.jpg'
import mouse19 from   '../img/mouse/mouse20.jpg'


const datos = [
    { imgen: mouse1, texto: 'Mouse Gamer Pro | Oechsle', precio: 'S/. 39.90' },
    { imgen: mouse2, texto: 'Mouse Gamer G502 X PLUS 2022 25K DPI Lightforce RGB Blanco', precio: 'S/. 19.90' },
    { imgen: mouse3, texto: 'Mouse Gamer Recargable Inalambrico WiFi 6 Botones RGB | Oechsle', precio: 'S/. 839.90' },
    { imgen: mouse4, texto: 'MOUSE GAMER XTRIKE ME GM-203 2400 DPI RGB 6 BOTONES', precio: 'S/. 196.90' },
    { imgen: mouse5, texto: 'Mouse Gamer Inalambrico Recargable RGB Silencioso', precio: 'S/. 330.00' },
    { imgen: mouse6, texto: 'Mouse Gamer con Cable HV-MS1018 Negro', precio: 'S/. 33.80' },
    { imgen: mouse7, texto: 'Mouse Gamer HALION HA-M329 Gallo | Mundo Laptops', precio: 'S/. 30.00' },
    { imgen: mouse8, texto: 'Mouse Gamer Kingston HyperX Pulsefire Surge, 16000 dpi, Simetrica, Negro, 6 botones, USB.', precio: 'S/. 99.00' },
    { imgen: mouse9, texto: 'Mouse gamer alámbrico Logitech G203 Lightsync, conexión usb, 8000 dpi, 6', precio: 'S/. 599.90' },
    { imgen: mouse10, texto:'Mouse gamer inalambrico logitech g502 lightspeed', precio: 'S/. 419.90' },
    { imgen: mouse11, texto:'Mouse Gamer Inalámbrico Glorious Model O Minus Negro GLO-MS-OMW-MB', precio: 'S/. 299.00' },
    { imgen: mouse12, texto:'Mouse Gamer Micronics Spartano RGB | plazaVea - Supermercado', precio: 'S/. 59.90' },
    { imgen: mouse13,texto: 'Mouse Gamer Viper Razer- Ultimate', precio: 'S/. 430.00' },
    { imgen: mouse14,texto: 'MOUSE GAMER KALIBER EKM305 USB 7LEDS ENKORE', precio: 'S/. 30.00' },
    { imgen: mouse15,texto: 'Mouse Gamer Redragon Storm Elite M988 Rgb', precio: 'S/. 170.60' },
    { imgen: mouse16,texto: 'Mouse Gamer LightSpeed Inal?mbrico Logitech G305, 12000 DPI, 6 Botones Programables', precio: 'S/. 150.00' },
    { imgen: mouse17,texto: 'Mouse Gamer EVGA X15 MMO, USB, 8k, negro, 16k dpi, 5 perfiles, 20 botones', precio: 'S/. 246.33' },
    { imgen: mouse18,texto: 'Mouse Gamer con Diseño de Dragón', precio: 'S/. 35.00' },
    { imgen: mouse19,texto: 'Mouse Logitech G PRO Wireless-Seven Figuarts-Envíos Perú', precio: 'S/. 350.00' },
    // { imgen: teclado14, texto: 'Logitech lanza el teclado mecánico gaming Pro X con interruptores configurables en sus teclas', precio: 'S/. 750.00' }


];


// const rss = imgTeclado.map((origen) => React.createElement('img', { className: 'imgTeclados', src: origen }));


class Mouses  extends Component {
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
                <h1 className="text-teclado">Mouse</h1>
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

export default Mouses;