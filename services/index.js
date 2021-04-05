const sendBookingEmail = async (data) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((data) => console.log(data));

  return response;
};

export { sendBookingEmail };
