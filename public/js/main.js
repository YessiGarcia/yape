var numero = $("#cel");
var terminos = $("#test5");
var registro = $('#registro');
var botonRegistro = $("#botonRegistro") 
var codigo =$("#codigo");
var api = {
  	url: 'http://localhost:5000/api/registerNumber',
  	codigo: 'http://localhost:5000/api/resendCode'
};

var cargarPagina = function(){
  	$('.carousel.carousel-slider').carousel({fullWidth: true});

  	function validar(){

	    /*esta función valida si el número telefónico es de 10 digitos 
	    y tiene un operador ternario, utilicé una expresión regular*/
	    function longNumero(){ 
	      return /^\d{10}$/.test(numero.val()) ? true:false;
	    }
	    /*esta función valida si el atributo del checkbox esta o no en checked*/
	    function checar(){
	      return terminos.is(':checked') ? true:false;
	    }

	    function validacion(){
	    	if (longNumero() && checar()){
	        	registro.attr('href', 'codigo.html');
	        	botonRegistro.removeClass("disabled");
	        	botonRegistro.addClass("boton");
	      	}
	      	else{
	       		registro.removeAttr('href');
	       		botonRegistro.removeClass("boton");
	        	botonRegistro.addClass("disabled");
	      	}
	    }
	    /*estos funcionan como addEventListener para los eventos change y keyup*/
	    terminos.on('change', validacion);
	    numero.on('keyup', validacion);
	    registro.click(enviarNumero);

	}
  	validar();
};

var api = {
	url: "http://localhost:3000/api/registerNumber",
	code: "http://localhost:3000/api/resendCode"
};

var enviarNumero = function(){	
		$.post(api.url,{
			"phone": numero.val(),
			"terms": true
		},function(res){

			if(res.success == true){
				localStorage.setItem("code", res.data.code);
				localStorage.setItem("phone", res.data.phone);
				alert(res.data.code);
			}
			else{
				alert(res.message);
			}
		});
	};

$(document).ready(cargarPagina);
	
/*
$.post("https://localhost:3000/api/resendCode"),{
	"phone": "numero"
};*/

