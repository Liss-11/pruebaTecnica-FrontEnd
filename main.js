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
		
    setInterval(getVotes, 3000);
} 

function getVotes(){

     /* No puedo hacer la llamada por los CORS - se debe habilitar el Cross-Origin en el back-end, he usado un backEnd propido*/
     /* My dummy BackEnd - foto adjuntadas*/

        //fetch('http://127.0.0.1:8080/api/geprom')

  fetch('https://demos.geprom.com/datos.php')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    calculatePercentage(data);
    printVotes(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function calculatePercentage(data){

    var total = data["respuesta1"] + data["respuesta2"] + data["respuesta3"] + data["respuesta4"];
    progress_perros.style.width = (data["respuesta1"] * (100/total)) + "%";
    progress_gatos.style.width = (data["respuesta2"] * (100/total)) + "%";
    progress_hamsters.style.width = (data["respuesta3"] * (100/total)) + "%";
    progress_conejos.style.width = (data["respuesta4"] * (100/total)) + "%";

}

function printVotes(data){
    votos_perros.textContent = data["respuesta1"] + " votos";
    votos_gatos.textContent = data["respuesta2"] + " votos";
    votos_hamsters.textContent = data["respuesta3"] + " votos";
    votos_conejos.textContent = data["respuesta4"] + " votos";
}