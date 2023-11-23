import React, { Component } from "react";
import '../src/heder.css'
import img2 from '../src/img/Menucomputadoras1.webp';
import img3 from '../src/img/Menucomputadoras2.jpeg';
import img4 from '../src/img/Menucomputadoras3.jpg';
import img5 from '../src/img/Menucomputadoras4.jpg';
import teclado from '../src/img/NuevosIngresos/ingresos22.jpg';
import monitores from '../src/img/monito.png';
import laptops from '../src/img/NuevosIngresos/ingresos3.jpg';
import Audifonos from '../src/img/NuevosIngresos/ingresos18.jpg';
import Mouses from '../src/img/NuevosIngresos/ingresos10.jpeg';

const imgs = [img2, img3, img4, img5];
const contenedor = [{ nombre: 'Accesorios y perifericos', imgenes: teclado, button: 'ver mas' },
{
    nombre: 'Pc', imgenes: monitores, button: 'ver mas'
},
{
    nombre: 'Laptos', imgenes: laptops, button: 'ver mas'
},
{
    nombre: 'Audifonos', imgenes: Audifonos, button: 'ver mas'
},{
    nombre: 'Mouses', imgenes: Mouses, button: 'ver mas'
},
];


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 0,
            hello: contenedor.map((item, index) => (
                <div className="containerTeclado" key={index}>
                    <div className="AccesoriosPerifericos">
                        <h3 className="h3accesorios">{item.nombre}</h3>
                    </div>
                    <div className="AccesoriosPerifericosteclados">
                        <img className="imgmenuprincipal" src={item.imgenes} alt="imagen no encontrada"/>
                    </div>
                    <div className="AccesoriosPerifericosteclados">
                        <button className="ver-mas"><a>{item.button}</a></button>
                    </div>

                </div>
            ))

        };
    };
    state = {
        c: 0,
        hello: new Array()
    };

    render() {
        setTimeout(() => this.setState({
            C: Math.floor(Math.random() * imgs.length)
        }), 1000);
        return (
            <div className="heder">
                <img className="imgevolucion" src={imgs[this.state.c]} alt="img no encontrado" />

                <div>
                    <h1 className="productos-variados">Nuestros Productos mas recientes </h1>
                    <div className="productosRescienteMenu">
                        {this.state.hello}
                    </div>

                </div>
            </div>



        );
    }
}
export default Header;