import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario.js";

function App() {
  //areglo de todas las citas
  //NOTE  6 Generamos el state para citas
  const [citas, guardarCitas] = useState([]);

  //funcion citas actuales nueves


  //Creamos la funcion  Para las citas
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };
  return (
    <Fragment>
      <h1>administrados de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
