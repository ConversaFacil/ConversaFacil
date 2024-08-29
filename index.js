function SendMail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let copy = document.getElementById("copy").checked;

  if (name.length === 0 || email.length === 0 || message.length === 0) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  let params = {
    from_name: name,
    email_id: email,
    message: message,
    cc: copy ? email : undefined, 
  };

  emailjs
    .send("service_vgkpo3s", "template_b8yo8d9", params)
    .then(function (response) {
      alert("Sucesso! Status: " + response.status);

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("copy").checked = false; 

      history.replaceState(null, "", location.pathname);
      location.reload();
    })
    .catch(function (error) {
      alert("Falha ao enviar o email: " + error);
    });
}
