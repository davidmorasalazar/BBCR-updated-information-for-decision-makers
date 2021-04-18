import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Indicadores económicos</h1>
			<p>
				<container className="tamano">
					<Carousel className="carousel">
						<Carousel.Item>
							<a href="https://www.hillspet.co.cr/" target="_blank" rel="noopener noreferrer">
								<img
									className="d-block w-100"
									src="https://www.hillspet.es/content/dam/cp-sites/hills/hills-pet/global/2020-homepage-redesign/hillspet-homepage-heropacklockup-packaged.png"
									alt="Characters"
									rounded
								/>
							</a>
						</Carousel.Item>
						<Carousel.Item>
							<a href="https://escuelacaninalatejera.es/" target="_blank" rel="noopener noreferrer">
								<img
									className="d-block w-100"
									src="https://i.ytimg.com/vi/kTZjtPfDWmo/maxresdefault.jpg"
									alt="Characters"
									rounded
								/>
							</a>
						</Carousel.Item>
						<Carousel.Item>
							<a href="https://www.purina-latam.com/cam/cr" target="_blank" rel="noopener noreferrer">
								<img
									className="d-block w-100"
									src="https://i.ytimg.com/vi/zthc86WuMAI/maxresdefault.jpg"
									alt="Characters"
									rounded
								/>
							</a>
						</Carousel.Item>
					</Carousel>
				</container>
			</p>
			<div className="alert alert-info">{store.message || "Datos actualizados hasta el"}</div>
			<p>
				Estos datos son extraídos de un paquete externo de datos económicos, para más información diríjase a la
				siguiente documentación:{" "}
				<a href="http://randall-romero.com/demo-bccr-servicioweb/">Leer documentación</a>
			</p>
		</div>
	);
};
