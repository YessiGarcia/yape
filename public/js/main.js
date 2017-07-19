var cargarPagina = function() {
	$('.carousel.carousel-slider').carousel({fullWidth: true});
};

/*$.post("https://localhost:3000/api/registerNumber"),{
	"phone": "numero",
	"terms": "true"
};

$.post("https://localhost:3000/api/resendCode"),{
	"phone": "numero"
};
en esta función intente hacer la validación , busque las expresiones 
regulares para la validación del númeto telefónico y no lo pude aplicar*/
function validar(){
	var numero = $("#numero").val();
	var terminos = $("#test5").prop("checked");
	var registro = $("#registro");

	if( !(/^\+\d{2,3}\s\d{9}$/.test(numero)) & !terminos:true){
		registro.removeClass("disabled");
	}
}

$(document).ready(cargarPagina);|