const emailBooking = (data) => `
  <p><b><b>Name:</b></b> ${data.name}</p>
  <p><b>Lastname:</b> ${data.lastName}</p>
  <p><b>Email:</b> ${data.email}</p>
  <p><b>Address:</b> ${data.address}</p>
  <p><b>Phone:</b> ${data.phone}</p>
  <p><b>Date:</b> ${data.date}</p>
  <p><b>Cleaning service:</b> ${data.cleaningService}</p>
  <p><b>Add-Ons:</b> ${data.addOns}</p>
  ${data.frequency ? `<p><b>Ferquency:</b> ${data.frequency}</p>` : ""}
  ${
    data.specialRequests
      ? `<p><b>Special requests:</b> ${data.specialRequests}</p>`
      : ""
  }
`;

export default emailBooking;
