import react from "react"
import Nav from "./nav"
import '../main.css';
class Contacto extends react.Component{
  render(){
    return(
      <div className="contacto">
      <Nav/>
   
<div class="contenedor nosotros">
<img class="imagenNosotros" src={process.env.PUBLIC_URL + "/nosotrosGas.jpg"} alt="Card image"/>
  <div class="centrado"><h1 class="tituloN">Nosotros</h1></div>
</div>
<div class="div">
  
<img class="block" src={process.env.PUBLIC_URL + "/flama.gif"} alt="Card image"/>
  <div class="block2">
    <h1 align="center" class="color">Mision</h1>
    <h3   class="letra2">
    Ser líderes en nuestros productos y servicios, principalmente en la comercialización del Gas L. P., mediante la satisfacción y seguridad de nuestros clientes.<br/><br/>
Mejorar la calidad de vida de nuestros trabajadores y sus familias, satisfaciendo sus necesidades materiales y espirituales.<br/><br/>

Apoyar el crecimiento y desarrollo de la comunidad. Participar en la conservación y mejoramiento del medio ambiente.<br/><br/>

Generar un rendimiento económico superior que garantice el crecimiento continuo y que compense la inversión y confianza de nuestros accionistas. Dirigir todos nuestros esfuerzos al logro de la Excelencia.
    </h3>
  
  </div>
</div>
<div class="div">
<div class="block2 vision">
    <h1 align="center" class="color">Vision</h1>
    <h3   class="letra2">
    Satisfacción total a nuestros clientes internos y externos. Para esta empresa, todas las personas son nuestra mejor riqueza y siempre serán tomadas en cuenta. Seremos una empresa con reacciones inmediatas a los cambios rápidos del mundo moderno. Apoyar el desarrollo de nuestros empleados a través de programas de capacitación y sistemas educativos orientados a la mejora de sus habilidades y conocimientos. Buscamos mejorar el desempeño en nuestro trabajo y en consecuencia, nuestro crecimiento personal y el bienestar en cada familia. Practicamos el Trabajo en Equipo, pues estamos convencidos que es la base del éxito.
    </h3>
  
  </div>
  <img class="block vision2" src={process.env.PUBLIC_URL + "/gas2.png"} alt="Card image"/>
  </div>
        </div>
    )
  }
}
export default Contacto