function cargarFormulario(){
	var nombre = $("#nombre");
	var correo = $("#correo");
	var contrasena = $("#contrasena");
	var valido = $ ("#valido");
	var botonFormulario = $("#botonFormulario");
	var contrasenaFalsa =" ";

	function validarUsuario(){

		function validarNombre(){
			console.log("validarNombre");
		 	return nombre == null || nombre.length == 0 || /^\s+$/.test(nombre.val()) ? true:false;
		}

		function validarCorreo(){
			console.log("validarCorreo");
		  	return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo.val()) ? true:false;
		}

		function validarContrasena(){
			console.log("validarContrasena");
			if(/^\d{6}$/.test(numero.val())) {
				return contrasena === contrasenaFalsa ? true:false;
			}
		}
		
		function validar(){
			contrasenaFalsa = contrasena;

	    	if (validarNombre() && 
	    		validarCorreo() && 
	    		validarContrasena()){
	        	valido.attr('href', 'bien.html');
	        	botonFormulario.removeClass("disabled");
	        	botonFormulario.addClass("boton");
	      	}
	      	else{
	       		valido.removeAttr('href');
	       		botonFormulario.removeClass("boton");
	        	botonFormulario.addClass("disabled");
	      	}
		}

		nombre.on('keyup', validar);
		correo.on('keydown', validar);
		contrasena.on('keypress', validar);
	}

	validarUsuario();
}
$(document).ready(cargarFormulario);
