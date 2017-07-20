var cargarPagina = function() {
  	$('.carousel.carousel-slider').carousel({fullWidth: true});

  	function validar(){
	    var numero = $("#cel");
	    var terminos = $("#test5");
	    var registro = $('#registro');

	    function longNumero(){
	      return /^\d{10}$/.test(numero.val()) ? true:false;
	    }

	    function checar(){
	      return terminos.is(':checked') ? true:false;
	    }

	    function validacion() {
	    	if (longNumero() && checar()){
	        	registro.attr('href', 'codigo.html');
	      	}
	      	else{
	       		registro.removeAttr('href');
	      	}
	    }

	    terminos.on('change', validacion)
	    numero.on('keyup', validacion)
	  	}

  validar();
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


$(document).ready(cargarPagina);