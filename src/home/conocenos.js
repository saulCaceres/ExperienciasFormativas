import { Component } from "react";
import conocenos from '../imgConocenos/conocenos.jpg'
import nuestroServicios from '../imgConocenos/NuestroServicios.jpg'
import mejoras from '../imgConocenos/mejora.png'
import mision from '../imgConocenos/vision.webp'
import vision from '../imgConocenos/vision.jpg'

import '../home/conocenos.css'


class Conocenos extends Component {
    render() {
        return (
            <div className="containerconocenos">
                <img className="imgConocenos" src={conocenos} />
                <h1 className="text-overlay">Conocenos</h1>
                <div className="description">
                    <p className="pdescription">
                        COMPU STORE,  y desde 1993 provee a las empresas nacionales
                        los mejores productos tecnológicos del peru, ayuda aque la tecnogia
                        siga adelante con tigo avanza el peru.
                    </p>
                </div>
                <div className="servicios">
                    <div className="contenedorSerivcio">
                        <p className="nuestroServicios">
                            Nuestros servicios se respaldan en la amplia preparación y experiencia
                            de nuestros profesionales, quienes son calificados en los diversos
                            productos que comercializamos, brindando un asesoramiento técnico
                            confiable, eficiente y un servicio de alta calidad.
                        </p>
                        <img className="imgoServicios" src={nuestroServicios} />
                    </div>

                </div>
                <div className="description">
                    <p className="pdescription">
                        Una de nuestras mayores preocupaciones está centrada en ofrecer un servicio
                        postventa oportuno, diferenciado y con mucho valor agregado.
                    </p>
                </div>
                <div className="servicios">
                    <div className="contenedorSerivcio">
                    <img className="imgoServicios" src={mejoras} />
                        <p className="nuestroMejoras">
                        Esta constante nos permite alternar dentro de un selecto grupo de empresas
                         públicas y privadas que solicitan permanentemente nuestro aporte técnico y 
                         comercial y nos impulsa a efectuar nuestro mejor esfuerzo para convertirnos
                         en una de las mejores alternativas del mercado y nos compromete a asumir el 
                         reto de ofrecer siempre lo mejor de nosotros.
                        </p>
                       
                    </div>

                </div>
                <div className="mensaje">
                    <p className="mensajeInvitacion">
                    Le invitamos a que su empresa sea parte de nuestra expresión de Servicio que tiene 
                    por finalidad tener clientes satisfechos, empresas fidelizadas y convertirnos 
                    en sus Socios Tecnológicos, buscando día a día crecer en equipo a través de hacer 
                    las cosas bien desde la primera vez.
                    </p>
                </div>
                <div className="vision">
                    <div className="contenedorVision">
                    <img className="imgvision" src={mision} />
                        <p className="nuestroMejoras">
                            <p className="subtitutlo">vision</p>
                        Desarrollarnos en el negocio de tecnología de la Información y Comunicaciones, 
                        orientados a satisfacer las necesidades tecnológicas de nuestros clientes en el
                        sector empresarial, ofreciendo soluciones con productos y servicios innovadores 
                        de alta calidad, que satisfagan las necesidades tecnológicas de nuestros clientes. 
                        Manteniendo un equipo de colaboradores competentes, con vocación de servicio, en 
                        busca de la excelencia y comprometidos con los objetivos de la empresa, 
                        desarrollando negocios rentables.
                        </p>
                       
                    </div>

                </div>
                <div className="vision">
                    <div className="contenedorVision">
                   
                        <p className="nuestroVisiones">
                            <p className="subtitutlo">Mision</p>
                            Ser proveedores líderes a nivel nacional de soluciones integrales en Tecnología 
                            de la Información y Comunicaciones con estructura propia y excelente servicio,
                            con procedimientos y sistemas administrativos integrados, completamente
                            automatizados, precisos, eficientes y versátiles que nos permita ser flexibles
                            y adaptables a las necesidades del mercado.
                        </p>
                        <img className="imgvision" src={vision} />
                    </div>

                </div>
            </div>


        )
    }
}
export default Conocenos;