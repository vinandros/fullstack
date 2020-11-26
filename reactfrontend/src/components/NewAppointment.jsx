import { Link, withRouter } from "react-router-dom";
import React, { useState } from "react";
import axiosClient from "../config/axios";

const NewAppointment = ({ history, setRequest }) => {
  const [appointments, setAppointments] = useState({
    name: "",
    owner: "",
    date: "",
    hour: "",
    phoneNumber: "",
    symptoms: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post("/patients", appointments)
      .then((res) => {
        setRequest(true);
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  // read data
  const handleChange = (e) => {
    setAppointments({
      ...appointments,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name);
    // console.log(e.target.value);
  };
  return (
    <>
      <h1 className="my-5">Crear nueva cita</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5">
              volver
            </Link>
          </div>

          <div className="col-md-8 mx-auto">
            <form className="bg-white p-5 bordered" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  name="name"
                  placeholder="Nombre Mascota"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="propietario">Nombre Propietario</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="propietario"
                  name="owner"
                  placeholder="Nombre Propietario"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="telefono"
                  name="phoneNumber"
                  placeholder="Teléfono"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha Alta</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="fecha"
                  name="date"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora Alta</label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="hora"
                  name="hour"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sintomas">Síntomas</label>
                <textarea
                  className="form-control"
                  name="symptoms"
                  rows="6"
                  onChange={handleChange}
                ></textarea>
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold"
                value="Crear Cita"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewAppointment);
