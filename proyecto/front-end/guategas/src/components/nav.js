import '../main.css';
import react from 'react'
class Nav extends react.Component {
  render(){
		return (
			<div className="Apps">
				<nav class="navbar  navbar-expand-sm navbar-dark navbar-inverse bg-dark navbar-fixed-top ancho" >
			<a class="navbar-brand posicion borrar animate__animated animate__fadeInLeft"  href="#"><img src="gas.png"  width="70" height="70" class="d-inline-block align-top mover animate__animated animate__pulse animate__infinite " alt=""/> GUATEGAS </a>
			
				<a class="navbar-brand  eli animate__animated animate__backInLeft "  href="#"><img src="gas.png"  width="40" height="40" class="d-inline-block align-top mover animate__animated animate__pulse animate__infinite " alt=""/> GUATEGAS  </a>
			
			<button class="navbar-toggler animate__animated animate__fadeInLeft" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse " id="navbarNavAltMarkup">
	
				<div class="navbar-nav center posiciones animate__animated animate__fadeInLeft">
					<a class="nav-item  nav-link  letra" href="/">Inicio</a>
					<a class="nav-item  nav-link letra" href="/nosotros">Nosotros </a>
					<a class="nav-item  nav-link letra" href="#">Productos</a>
					<a class="nav-item  nav-link letra" href="#">Conctacto</a>
					
				</div>
			</div>
		</nav>
    
    </div>
    )
    }
}
export default Nav