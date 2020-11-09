$(function() {
	$('#boton').on('click', function mostrarNombre(){
		$('#areaTexto').empty();
		$('#areaTexto').append('Hola'+ ' ' + $('#nombre').val());

	}
	)
})


	
