import React, { Component } from "react";
import '../src/heder.css'
import img1 from '../src/img/Menucomputadoras.webp';
import img2 from '../src/img/Menucomputadoras1.webp';
import img3 from '../src/img/Menucomputadoras2.jpeg';
import img4 from '../src/img/Menucomputadoras3.jpg';
import img5 from '../src/img/Menucomputadoras4.jpg';
import teclado from '../src/img/teclado.png';
import minitores from '../src/img/monito.png';
import laptops from '../src/img/laptops.png';

const imgs = [img2, img3, img4, img5];
const img = [teclado];
const minitor = [minitores];
const laptop = [laptops];

const rss = img.map((origen) => React.createElement('img', { className: 'img-rsz', src: origen }));
const monitores = minitor.map((origen) => React.createElement('img', { className: 'imgMoinitor', src: origen }));
const Alaptops = laptop.map((origen) => React.createElement('img', { className: 'laptops', src: origen }));

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 0,

        };
    };
    state = {
        c: 0,
        teclado: new Array()
    };

    render() {
        setTimeout(() => this.setState({
            C: Math.floor(Math.random() * imgs.length)
        }), 1000);
        return (
            <div className="heder">
                <img className="imgevolucion" src={imgs[this.state.c]} alt="img no encontrado" />

                <div>
                    <h3>Nuestros Productos mas recientes </h3>
                    <div className="productosRescienteMenu">
                        <div className="containerTeclado">
                            <div className="AccesoriosPerifericos">
                                <h3 className="h3accesorios">Accesorios y perifericos</h3>
                            </div>
                            <div className="AccesoriosPerifericosteclados">
                                {rss}
                            </div>
                            <div className="AccesoriosPerifericosteclados">
                                <button><a>ver mas</a></button>
                            </div>


                        </div>
                        <div className="containerTeclado">
                            <div className="AccesoriosPerifericos">
                                <h3 className="h3accesorios">pc's</h3>
                            </div>
                            <div className="AccesoriosPerifericosteclados">
                                {monitores}
                            </div>
                            <div className="AccesoriosPerifericosteclados">
                                <button><a>ver mas</a></button>
                            </div>

                        </div>
                        <div className="containerTeclado">
                            <div className="AccesoriosPerifericos">
                                <h3 className="h3accesorios">Laptops</h3>
                            </div>
                            <div className="AccesoriosPerifericosteclados">
                                {Alaptops}
                            </div>
                            <div className="AccesoriosPerifericosteclados">
                                <button><a>ver mas</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        );
    }
}
export default Header;