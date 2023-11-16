import React, { Component } from 'react';
import '../home/nuevosIngresos.css'
import tecladoFondo from '../img/NuevosIngresos/laptop.jpg'
import nuevosIngresos1 from  '../img/NuevosIngresos/ingresos1.jpeg'
import nuevosIngresos2 from  '../img/NuevosIngresos/ingresos2.jpg'
import nuevosIngresos3 from  '../img/NuevosIngresos/ingresos3.jpg'
import nuevosIngresos4 from  '../img/NuevosIngresos/ingresos4.jpg'
import nuevosIngresos5 from  '../img/NuevosIngresos/ingresos5.jpg'
import nuevosIngresos6 from  '../img/NuevosIngresos/ingresos6.jpg'
import nuevosIngresos8 from  '../img/NuevosIngresos/ingresos7.jpg'
import nuevosIngresos9 from  '../img/NuevosIngresos/ingresos8.jpg'
import nuevosIngresos10 from '../img/NuevosIngresos/ingresos9.jpg'
import nuevosIngresos11 from '../img/NuevosIngresos/ingresos10.jpeg'
import nuevosIngresos12 from '../img/NuevosIngresos/ingresos11.jpg'
import nuevosIngresos13 from '../img/NuevosIngresos/ingresos12.jpg'
import nuevosIngresos14 from '../img/NuevosIngresos/ingresos13.jpg'
import nuevosIngresos15 from '../img/NuevosIngresos/ingresos14.jpg'
import nuevosIngresos16 from '../img/NuevosIngresos/ingresos15.jpg'
import nuevosIngresos17 from '../img/NuevosIngresos/ingresos16.jpg'
import nuevosIngresos18 from '../img/NuevosIngresos/ingresos17.jpg'
import nuevosIngresos19 from '../img/NuevosIngresos/ingresos18.jpg'
import nuevosIngresos20 from '../img/NuevosIngresos/ingresos19.jpg'
import nuevosIngresos21 from '../img/NuevosIngresos/ingresos20.jpg'
import nuevosIngresos22 from '../img/NuevosIngresos/ingresos22.jpg'
import nuevosIngresos23 from '../img/NuevosIngresos/ingresos23.jpg'
import nuevosIngresos24 from '../img/NuevosIngresos/ingresos24.jpg'
import nuevosIngresos25 from '../img/NuevosIngresos/ingresos25.jpg'
import nuevosIngresos26 from '../img/NuevosIngresos/ingresos21.jpg'

const datos = [
    { imgen: nuevosIngresos1 , texto: 'ThinkBook 16 Gen 4 (16" Intel)', precio: 'S/. 2 999.00' },
    { imgen: nuevosIngresos2 , texto: 'ThinkBook 16 Gen 4 (16" Intel)', precio: 'S/. 3 200.00' },
    { imgen: nuevosIngresos3 , texto: 'Laptop HP 15.6 15-Dw3500La Core I3 8GB RAM 256SSD', precio: 'S/. 2 539.90' },
    { imgen: nuevosIngresos4 , texto: 'Machenike | Machenike L15 Gen 13 Intel (15.6 ") Laptop de juegos', precio: 'S/. 9 999.00' },
    { imgen: nuevosIngresos5 , texto: 'Best Buy: Dell Inspiron 3511 15.6" Laptop Intel Core i5 8GB RAM', precio: 'S/. 5 630.00' },
    
    { imgen: nuevosIngresos6 , texto: 'Logitech Lift Vertical Ergonomic Mouse (Rose) - JB Hi-Fi', precio: 'S/. 333.80' },
    { imgen: nuevosIngresos8 , texto: 'Logitech PRO X SUPERLIGHT Lightweight Wireless Optical', precio: 'S/. 230.00' },
    { imgen: nuevosIngresos9 , texto: 'Mouse HP Bluetooth para viajes  16000 dpi, Simetrica, Negro, USB.', precio: 'S/. 99.00' },
    { imgen: nuevosIngresos10, texto: 'Logitech MX - mouse inalámbrico vertical', precio: 'S/. 399.90' },
    { imgen: nuevosIngresos11, texto:'Delux Vertical Ergonomic Mouse - Reduce Wrist, Hand and', precio: 'S/. 419.90' },
    
    { imgen: nuevosIngresos12, texto:'teclados mecánicos, retroiluminados y para gamers', precio: 'S/. 299.00' },
    { imgen: nuevosIngresos13, texto:'Logitech G Pro Gaming Keyboard - Teclado | Compra Online PS4', precio: 'S/. 309.90' },
    { imgen: nuevosIngresos14,texto: 'Teclado MecáNico Teclado mecánico del Teclado 104 Teclas con conexión', precio: 'S/. 430.00' },
    { imgen: nuevosIngresos15,texto: 'Teclado Gaming Mecánico Programable Resistance', precio: 'S/. 600.00' },
    { imgen: nuevosIngresos16,texto: 'Corsair K60 PRO TKL RGB, análisis: un teclado gaming pequeño pero matón', precio: 'S/. 170.60' },
    
    { imgen: nuevosIngresos17,texto: 'Razer Kaira Audífonos Inalámbricos para PS5 / PS4', precio: 'S/. 459.00'  },
    { imgen: nuevosIngresos18,texto: 'Audífono Gamer RGB Ps4 Xbox One Nintendo Switch PC Laptop', precio: 'S/. 59.90' },
    { imgen: nuevosIngresos19,texto: 'Audífono Gamer K5 Con Luces RGB para PS4 / PC / Laptop', precio: 'S/. 95.00' },
    { imgen: nuevosIngresos20,texto: 'Audífonos gamer Astro A40 TR + Mixamp Pro TR Pc/Mac/Xbox ', precio: 'S/. 350.00' },
    { imgen: nuevosIngresos21,texto: 'AUDIFONO VSG SINGULARITY 7.1 PARA PC RGB BLACK - Full', precio: 'S/. 259.00' },
   
    { imgen: nuevosIngresos22,texto: 'Mouse Pad Gamer XL RGB 7 Colores 80 x 30cm', precio: 'S/. 49.00' },
    { imgen: nuevosIngresos23,texto: 'Mouse PAD Gamer Micronics X100 34x78cm', precio: 'S/. 25.90' },
    { imgen: nuevosIngresos24,texto: 'Mouse Pad Gamer Rgb Retro Iluminada XL 80x30cmx04mm', precio: 'S/. 250.00' },
    { imgen: nuevosIngresos25,texto: 'Strata Liquid Mouse Pad Gamer XXL', precio: 'S/. 89.00' },
    { imgen: nuevosIngresos26,texto: 'pad mouse Gamer Diferentes Colores 35 X 25cm RGB - Generico', precio: 'S/. 59.00' },
    
    // { imgen: teclado14, texto: 'Logitech lanza el teclado mecánico gaming Pro X con interruptores configurables en sus teclas', precio: 'S/. 750.00' }


];


// const rss = imgTeclado.map((origen) => React.createElement('img', { className: 'imgTeclados', src: origen }));


class NuevosIngresos  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: datos.map((item, index) => (
                <div className="cajasIngresos" key={index}>
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
                <h1 className="text-ingresos">Nuevos Productos</h1>
                <h1 className="NuestrosProductos"> nuestros productos</h1>
                <div className="contenedorPrincipal">
                    <div className="containerIngresos">
                    
                    {this.state.elements}
                  
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default NuevosIngresos;