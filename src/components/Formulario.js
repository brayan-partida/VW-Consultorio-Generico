import React, { Fragment, useState } from "react";
import uuid from "uuid/v4"
const Formulario = ({ crearCita }) => {


  //NOTE INICIO  DE Hacer nuestra cita   1========>

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  }); //termina uses state

  const [error, actualizarError] = useState(false);


  //NOTE OBTENER LOS DATOS DE CADA TEXTO 3===========>
  const actualizarState = (datos) => {
    actualizarCita({
      ...cita,
      [datos.target.name]: datos.target.value,
    });
  };
  //ANCHOR METODO ESCRIBIENTO

  //NOTE  4creamos propiedades del objeto cita
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  //ANCHOR obtnerr dato

  const submitCita = (e) => {
    e.preventDefault();
    //alert("hola cita")

    //validacion
    //NOTE 5 validamos
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
      //actualizarError(error);
    }
    actualizarError(false);
    //NOTE 6 generramos su id importamos su id
    //asignar id
    cita.id = uuid();
    console.log(cita);

    //crear cita
    crearCita(cita)

    //reiniciar el form

    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    })


  }; //ANCHOR  dar click a en la cita

  //NOTE RETORNO==========================>
  return (

    //NOTE GENERAR EL DISENO 2===========>
    <Fragment>
      <h2>Crear citas</h2>
      {
        error ? (
          <p className="alerta-error"> todos los campos son obligatorios</p>
        ) : null
        //mensaje error---------------------------->
      }
     <h2 id="mio">Brayan Enrique Ramirez Partida</h2>
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Nombre Mascota"
          name="mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Propietario Mascota</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Propietario Mascota"
          name="propietario"
          onChange={actualizarState}//3.5 generar su cambio y tomar los datos
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          type="textarea"
          className="u-full-width"
          placeholder="Sintomas"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
