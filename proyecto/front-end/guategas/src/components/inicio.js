import logo from '../logo.svg';
import '../main.css';
import Product from "./products"
import Nav from './nav.js'
import react from 'react'
class Inicio extends react.Component {
	render(){
		return (
			<div className="Apps">
			<Nav/>
		<div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
	
			<div class="carousel-inner ">
				
				<div class="carousel-item imagen1 active">
				
					<img class="d-block w-100 img" src="imagen.jpg"  alt="First slide"/>
					
					<div class="carousel-caption d-none  d-md-block">
						
						<h5>Nosotros</h5>
						<p>Ser líderes en nuestros productos y servicios, principalmente en la comercialización del Gas L. P., mediante la satisfacción y seguridad de nuestros clientes.</p>
					</div>
				</div>
				<div class="carousel-item imagen1">
					<img class="d-block  w-100 img" src="imagen2.jpg" alt="Second slide"/>
					<div class="carousel-caption d-none d-md-block">
						<h5>Servicios</h5>
						<p>Contamos con cilindros en 3 presentaciones: 25lbs., 35lbs. y de 100lbs. Nuestros cilindros son rotulados en alto relieve y se fabrican según la Norma Técnica Guatemalteca, brindando seguridad y calidad a nuestros clientes. Proporcionamos mantenimiento constante a nuestros cilindros y verificamos el peso exacto de los mismos.</p>
					</div>
				</div>
				<div class="carousel-item imagen1">
					<img class="d-block w-100 img" src="imagen3.jpg" alt="Third slide"/>
					<div class="carousel-caption d-none d-md-block">
						<h5>Ubicacion</h5>
						<p>Valles de petapa, Z10 San miguel Petapa</p>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
			<ol class="carousel-indicators">
				<li data-target="#carousel1" data-slide-to="0" class="active"></li>
				<li data-target="#carousel1" data-slide-to="1"></li>
				<li data-target="#carousel1" data-slide-to="2"></li>
			</ol>
		</div>
	
			<Product/>
			<Product/>
			<Product/>
			<Product/>
			</div>
		);
	}
  
}

export default Inicio;
