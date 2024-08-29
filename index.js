function SendMail(event) {
  event.preventDefault();

  // Se a validação falhar, interrompe o envio do email
  if (!validateForm()) {
    return;
  }

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let copy = document.getElementById("copy").checked;

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

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  let valid = true;

  if (nameInput.value === "") {
    nameError.classList.remove("hidden");
    nameInput.classList.add("border-red-600");
    valid = false;
  } else {
    nameError.classList.add("hidden");
    nameInput.classList.remove("border-red-600");
  }

  if (emailInput.value === "") {
    emailError.classList.remove("hidden");
    emailInput.classList.add("border-red-600");
    valid = false;
  } else {
    emailError.classList.add("hidden");
    emailInput.classList.remove("border-red-600");
  }

  if (messageInput.value === "") {
    messageError.classList.remove("hidden");
    messageInput.classList.add("border-red-600");
    valid = false;
  } else {
    messageError.classList.add("hidden");
    messageInput.classList.remove("border-red-600");
  }

  return valid;
}
