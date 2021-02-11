import React from "react";
import shortid from "shortid";
import { CarouselCaption } from "./CarouselCaption";
//include images into your bundle
//create your first component
export function Home() {
	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();

		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};

	const eliminaTarea = id => {
		let newList = arrayTareas.filter(item => item.id !== id);
		setArrayTareas(newList);
	};

	return (
		<div className="container">
			<div className="shadow-lg p-3 mb-5 bg-white rounded">
				<h1 className="text-center">
					Bucket list <i className="fab fa-wpexplorer"></i>
				</h1>
			</div>

			<div className="CarouselCaption">
				<CarouselCaption />
			</div>
			<div className="row">
				<div className="col-8">
					<div className="shadow-lg p-3 mb-5 bg-white rounded">
						<h4 className="text-center">
							Cosas que me gustaria hacer.{" "}
							<i className="fas fa-feather-alt"></i>{" "}
						</h4>
					</div>

					<ul className="list-group ">
						{arrayTareas.map(item => (
							<li
								className="list-group-item shadow d-flex justify-content-between"
								key={item.id}>
								<span className="lead">{item.nombreTarea}</span>

								<button
									type="button"
									className="btn btn-outline-danger "
									onClick={() => eliminaTarea(item.id)}>
									<i className="fas fa-times"></i>
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col-4 ">
					<h4 className="text-center ">
						Nunca pares de soñar. <i className="fab fa-grav"></i>
					</h4>
					<form onSubmit={agregarTarea}>
						<input
							type="text"
							className="form-control mb-2 shadow"
							placeholder="Sueña en grande..."
							onChange={e => setTarea(e.target.value)}
							value={tarea}
						/>
						<button
							className="btn btn-success btn-block shadow-lg"
							type="submit">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
