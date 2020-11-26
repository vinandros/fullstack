import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axiosClient from "./config/axios";

//components
import Patients from "./components/Patients";
import NewAppointment from "./components/NewAppointment";
import Appointment from "./components/Appointment";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [request, setRequest] = useState(true);

  useEffect(() => {
    if (request) {
      const getAppointmentsFromApi = () => {
        axiosClient
          .get("/patients")
          .then((res) => {
            setAppointments(res.data.reverse());
            setRequest(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      getAppointmentsFromApi();
    }
  }, [request]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Patients appointments={appointments} />}
        />
        <Route
          path="/newappointment"
          component={() => <NewAppointment setRequest={setRequest} />}
        />
        <Route
          path="/appointment/:id"
          render={(props) => {
            const appointment = appointments.filter(
              (appointment) => appointment._id === props.match.params.id
            );
            return (
              <Appointment
                appointment={appointment[0]}
                setRequest={setRequest}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
