const emailBooking = (data) => `
  <p>Name: ${data.name}</p>
  <p>Lastname: ${data.lastName}</p>
  <p>Email: ${data.email}</p>
  <p>Address: ${data.address}</p>
  <p>Phone: ${data.phone}</p>
  <p>Date: ${data.date}</p>
  <p>Cleaning service: ${data.cleaningService}</p>
  <p>Add-Ons: ${data.addOns}</p>
  ${data.frequency ? `<p>Ferquency: ${data.frequency}</p>` : ""}
  ${
    data.specialRequests
      ? `<p>Special requests: ${data.specialRequests}</p>`
      : ""
  }
`;

export default emailBooking;
