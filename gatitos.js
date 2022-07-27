var URL = "https://api.thecatapi.com/v1/images/search";
var imagen = document.querySelector("img");
var boton = document.querySelector("button");

function peticionGatito() {
    // GET
    fetch(URL)
        .then(function (response) {
            // Esta funcion se ejecuta si salio bien la peticion
            return response.json();
        })
        .then(function (data) {
            console.log(data[0].url);
            imagen.src = data[0].url 
        })
        .catch(function (error) {
            // Esta funcion se ejecuta cuando algun error
            console.log(error);
        });    
}

document.addEventListener("DOMContentLoaded", function () {
    peticionGatito();
});

boton.addEventListener("click", function () {
    peticionGatito();
});