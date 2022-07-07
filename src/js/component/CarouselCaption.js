import React from "react";

export function CarouselCaption() {
	return (
		<div className="bd-example">
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="0"
						className="active"></li>
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="1"></li>
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="http://www.caregivingclub.com/wp-content/uploads/2011/03/sunset-and-light-bulb-LG-900x300.jpg"
							alt="First slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h3>
								Incluso la noche más oscura dará paso a la
								salida del Sol.
							</h3>
							<p>
								Todos pasamos malas rachas, pero debemos seguir
								luchando para que vengan tiempos mejores.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://www.caregivingclub.com/wp-content/uploads/2011/03/sunset-and-light-bulb-LG-900x300.jpg"
							alt="Second slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h3>
								Los errores son portales hacia el
								descubrimiento.
							</h3>
							<p>
								De los errores se aprende, y nos ayudan a buscar
								formas mejores de afrontar ciertos retos.
							</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
