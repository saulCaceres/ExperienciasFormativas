import { Component } from "react";
import telefono from '../img/contactanos/telefono.png'
import correo from '../img/contactanos/correo (1).png'
import ubicacion from '../img/contactanos/ubicacion (1).png'
import horario from '../img/contactanos/calendario.png'
import '../home/contactanos.css'
const datosContacto = [
    {
        title: 'datos de contacto',
        telefono: {
            img: telefono,
            num: '942954414'
        },
        correo: {
            img: correo,
            nom: 'i202111667@cibertec.edu.pe'
        },
        direccion: {
            img: ubicacion,
            nom: 'Jr. Larraburre y Unanue 172. Urb. Santa Beatriz - Cercado de Arequipa'
        }, horario: {
            img: horario,
            nom: 'luenes a viernes 9:00 am - 6:00pm'
        }
    }
    
];
const formulario = [
{title:'Completa el siguiente formulario y te enviaremos la información que necesitas.'}
]

class Contactanos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: datosContacto.map((item, index) => (
                
                    <div className="datos" key={index}>
                        <h1 className="title">{item.title}</h1>
                        <div className=" contaner_telefono">
                            <img className="imgTel" src={item.telefono.img} />
                            <p className="">{item.telefono.num}</p>
                        </div>
                        <div className=" contaner_telefono">
                            <img className="imgTel" src={item.correo.img} />
                            <p className="">{item.correo.nom}</p>
                        </div>
                        <div className=" contaner_telefono">
                            <img className="imgTel" src={item.direccion.img} />
                            <p className="">{item.direccion.nom}</p>
                        </div>
                        <div className=" contaner_telefono">
                            <img className="imgTel" src={item.horario.img} />
                            <p className="">{item.horario.nom}</p>
                        </div>
                    </div>
            )),
            realizarFormulario: formulario.map((item,index) =>(
                <div className="formulario">
                    <p>{item.title}</p>
                </div>
            ))
        };
    };
    state = {
        elements: new Array(),
        realizarFormulario: new Array()

    };
    render() {
        
        return (
            <div className="containerconocenos">
                <h1 className="NuestrosProductos"> Contactanos</h1>
                <div className="container-contactanos">
                    <div className="subContainer-contactanos">
                        <div className="datos_contactos">
                            {this.state.elements}
                        </div>
                        <div className="formulario-contactanos">
{this.state.realizarFormulario}
<div class="form-container">
    <h1 className="titleForumlario">Ingresa tus datos</h1>
    <form>
   
      <input type="text" id="nombre" name="nombre" placeholder="Nombre" required/>
      
      <input type="email" id="email" name="email"  placeholder="Email" required/>
      
      <input type="text" id="ciudad" name="ciudad" placeholder="cuidad"  required/>

      <input type="text" id="telefono" name="telefono" placeholder="Telefono" required/>

     <input type="text" id="RUC" name="RUC" placeholder="RUC" required/>

      <input type="text" id="RazonSocial" name="RazonSocial" placeholder="Razon Social" required/>

      <textarea id="mensaje" name="mensaje" rows="4" placeholder="Mensaje" required></textarea>
      
      <div className="buttoncontactanos" >
      <button type="submit">Enviar</button>
      </div>
     
    </form>
  </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Contactanos;