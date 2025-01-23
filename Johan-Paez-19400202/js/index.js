//buscar Elementos
var wrapLoading = document.getElementById("wrap-loading");
var contentWelcome = document.getElementById("content-welcome");
var contentData = document.getElementById("content-data");
var buttonIni = document.getElementById("go-ini");
var buttonForm = document.getElementById("go-form");
var logoImg = document.getElementById("logo-img");

//validar si existen datos de formulario
var datos = null;
var checkData = function () {
  datos = JSON.parse(sessionStorage.getItem("datosForm"));
  wrapLoading.style.display = "none";
  if (datos) {
    document.getElementById("name").innerText = datos?.name || "";
    document.getElementById("email").innerText = datos?.email || "";
    document.getElementById("marca").innerText = datos?.marca || "";
    document.getElementById("tipo").innerText = datos?.tipo || "";
    document.getElementById("descripcion").innerText = datos?.desc || "";
    contentData.style.display = "block";
    logoImg.addEventListener("click", function (params) {
      clearAndGo("index.html");
    });
  } else {
    contentWelcome.style.display = "block";
  }
};
// limpiar datos y redireccionar
var clearAndGo = function (route) {
  sessionStorage.removeItem("datosForm");
  document.location.href = route;
};

//Ejecutar una vez se muestra el loading
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    checkData();
  }, 1000);
});

//Acciones de botones
buttonIni.addEventListener("click", function (params) {
  clearAndGo("index.html");
});

buttonForm.addEventListener("click", function (params) {
  clearAndGo("formulario.html");
});
