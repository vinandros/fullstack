import { Link, withRouter } from "react-router-dom";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

const Appointment = ({ appointment, history, setRequest }) => {
  if (!appointment) {
    history.push("/");
    return null;
  }
  const handleClickDelete = () => {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Una cita eliminada no se puede recuperar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/patients/${appointment._id}`)
          .then((res) => {
            Swal.fire(
              "¡Cita Eliminada!",
              "La cita se eliminó exitosamente.",
              "success"
            );
            setRequest(true);
            history.push("/");
          })
          .catch((error) => {
            Swal.fire("¡Error!", "La cita no se eliminó.", "error");
          });
      }
    });
  };
  return (
    <>
      <h1 className="my-5">Nombre cita: {appointment.name}</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={"/"} className="btn btn-success text-uppercase py-2 px-5">
              volver
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className="mb-3">{appointment.name}</h3>
                  <small className="fecha-alta">
                    {appointment.date} - {appointment.hour}
                  </small>
                </div>
                <p className="mb-0">{appointment.symptoms}</p>
                <div className="contacto py-3">
                  <p>Dueño: {appointment.owner}</p>
                  <p>Teléfono: {appointment.phoneNumber}</p>
                </div>
                <div className="d-flex">
                  <button
                    className="btn btn-danger text-uppercase py-2 px-5 font-weight-bold col"
                    type="button"
                    onClick={handleClickDelete}
                  >
                    Eliminar &times;
                  </button>
                  {/* <Link
                    to={"/newappointment"}
                    className="btn btn-warning text-uppercase py-2 px-5 "
                    type="button"
                    // onClick={handleClickDelete}
                  >
                    Editar
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Appointment);
