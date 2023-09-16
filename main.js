
/* Progress-bars */

var progress_perros = document.querySelector('#progress_perros');
var progress_gatos = document.querySelector('#progress_gatos');
var progress_hamsters = document.querySelector('#progress_hamsters');
var progress_conejos = document.querySelector('#progress_conejos');

/* Visual register */

var votos_perros = document.querySelector('#votos_perros');
var votos_gatos = document.querySelector('#votos_gatos');
var votos_hamsters = document.querySelector('#votos_hamsters');
var votos_conejos = document.querySelector('#votos_conejos');

window.onload = function() { 
		
    progress_perros.style.width = '20%';
    getVotes();
    
} 

/* https://demos.geprom.com/datos.php */

function getVotes(){
    fetch('https://demos.geprom.com/datos.php')
      .then(response => response.json())
      .then(json => console.log(json));
}



//llamada a una pagina externa
//leo el resuldado y lo guardo en data;
//apartir de data, asigno valores a las variables guardadas;
//vario tambein los contadores debajo de los emojis