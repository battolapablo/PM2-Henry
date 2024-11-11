function validacion() {
  const form = document.getElementById("needs-validation");
  let isValid = true;

  Array.from(form.elements).forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });

  form.classList.add("was-validated");
  return isValid;
}

module.exports = validacion;
