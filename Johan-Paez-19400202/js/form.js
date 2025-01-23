// Captura de elementos para manejar eventos
var errorMsg = "";
var valido = true;
var myButton = document.getElementById("myButton");
var errorsFormMsg = document.createElement("span");
var inputClienteName = document.getElementById("clienteName");
var inputClienteEmail = document.getElementById("clienteEmail");
var inputAutoMarca = document.getElementById("autoMarca");
var inputAutoTipo = document.getElementById("autoTipo");
var inputDescripcion = document.getElementById("descripcion");

//Funciones auxiliares para validacion de entradas
var validarEmail = function (email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Error message
function MostrarErrorToast(message) {
  errorsFormMsg.innerText = message;
  errorsFormMsg.classList.add("error-msg-toast");
  document.body.append(errorsFormMsg);
  setTimeout(() => errorsFormMsg.remove(), 3000);
}

// validar formulario

var validarFormulario = function () {
  errorMsg = "";
  if (
    inputClienteName.value.trim() === "" ||
    inputClienteName.value.trim().length < 5
  ) {
    MostrarErrorToast(
      "El campo 'Nombre del Cliente' esta en Blanco o es muy corto"
    );
    return false;
  }
  if (
    inputClienteEmail.value.trim() === "" ||
    !validarEmail(inputClienteEmail.value.trim())
  ) {
    MostrarErrorToast(
      "El campo 'Correo' esta en Blanco o no es un correo válido"
    );
    return false;
  }
  if (inputAutoMarca.value === "") {
    MostrarErrorToast("Debe Seleccionar una marca de auto");
    return false;
  }

  if (inputAutoTipo.value === "") {
    MostrarErrorToast("Debe Seleccionar un tipo de auto");
    return false;
  }
  if (
    inputDescripcion.value.trim() === "" ||
    inputDescripcion.value.trim().length < 20
  ) {
    MostrarErrorToast("Debe Colocar una breve descripción del servicio");
    return false;
  }
  return true;
};

//Acción de envio de formulario
var onsubmit = function (e) {
  e.preventDefault();
  valido = validarFormulario();
  if (valido) {
    myButton.innerHTML = `<div role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-white animate-spin dark:text-white fill-[#000f3c] mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>`;
    setTimeout(() => {
      myButton.innerHTML = "ENVIAR";
      var obj = {
        name: inputClienteName.value,
        email: inputClienteEmail.value,
        marca: inputAutoMarca.value,
        tipo: inputAutoTipo.value,
        desc: inputDescripcion.value,
      };
      sessionStorage.setItem("datosForm", JSON.stringify(obj));
      document.location.href = "index.html";
    }, 1000);
  }
};

//Listeners para inputs
inputClienteEmail.addEventListener("keyup", function (e) {
  if (validarEmail(inputClienteEmail.value)) {
    inputClienteEmail.style.borderColor = "#e0e0e0";
  } else {
    inputClienteEmail.style.borderColor = "red";
  }
});

inputClienteName.addEventListener("keyup", function (e) {
  if (
    inputClienteName.value.trim() === "" ||
    inputClienteName.value.trim().length < 5
  ) {
    inputClienteName.style.borderColor = "red";
  } else {
    inputClienteName.style.borderColor = "#e0e0e0";
  }
});

inputDescripcion.addEventListener("keyup", function (e) {
  if (
    inputDescripcion.value.trim() === "" ||
    inputDescripcion.value.trim().length < 20
  ) {
    inputDescripcion.style.borderColor = "red";
  } else {
    inputDescripcion.style.borderColor = "#e0e0e0";
  }
});

myButton.addEventListener("click", onsubmit);
