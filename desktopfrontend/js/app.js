window.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:4000/api/patients")
    .then((res) => res.json())
    .then((data) => showAppointmets(data));

  function showAppointmets(appointments) {
    const appointmentsContainer = document.querySelector("#citas");

    let appointmentsHTML = "";

    appointments.forEach((appointment) => {
      appointmentsHTML += `
            <div
                class="p-5 list-group-item list-group-item-action flex-column align-items-start"
            >
                <div class="d-flex w-100 justify-content-between mb-4">
                <h3 class="mb-3">${appointment.name}</h3>
                <small class="fecha-alta">
                    ${appointment.date} - ${appointment.hour}
                </small>
                </div>
                <p class="mb-0">${appointment.symptoms}</p>
                <div class="contacto py-3">
                <p>Dueño: ${appointment.owner}</p>
                <p>Teléfono: ${appointment.phoneNumber}</p>
                </div>
            </div>
        `;
    });
    appointmentsContainer.innerHTML = appointmentsHTML;
  }
});
