const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const warning = document.getElementById("warnings");

form.addEventListener("submit", e => {
  e.preventDefault()
  let warnings = ""
  let enter = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  warning.innerHTML = ""
  if (nombre.value.length < 3) {
    warnings += `The name is not valid <br>`
    enter = true
  }
  if (!regexEmail.test(email.value)) {
    warnings += `The email is not valid <br>`
    enter = true
  }
  if (pass.value.length < 4) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    })
    enter = true
  }
  if (enter) {
    warning.innerHTML = warnings
  } else {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success',
    )
  }

})