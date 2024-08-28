function SendMail(event) {
  event.preventDefault(); // Evita o carregamento da página

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let params = {
    from_name: name,
    email_id    : email,
    message: message,
  };

  emailjs
    .send("service_vgkpo3s", "template_b8yo8d9", params)
    .then(function (response) {
      alert("Success! Status: " + response.status);
    })
    .catch(function (error) {
      alert("Failed to send email: " + error);
    });
}

