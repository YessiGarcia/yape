$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });

var numero = $("#cel").value;
var terminos = $("#terminos");
var registro = $("#registro");

if (numero.length == 10 & terminos.checked == "checked" ){
	registro.removeClass("disabled");
}