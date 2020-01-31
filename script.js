
    document.getElementById("button").onclick = function() { 
 
    var age = parseInt(document.getElementById("age").value);
var valeur = parseInt(document.querySelector('input[name=choix]:checked').value);
let convertAge = age*valeur;
    document.getElementById("result").innerHTML = convertAge ;
};

    
// Écrivez ici votre script
/*document.getElementById("button").onclick =convertirAge();
var el = document.getElementById("button");
if (el.addEventListener)
    el.addEventListener("click", convertirAge, false);
else if (el.attachEvent)
    el.attachEvent('onclick', convertirAge);

function convertirAge(){
    var age = document.getElementById("age").value;
    var valeur = document.querySelector('input[name=choix]:checked').value;
    return age*valeur;  
}*/

/*let age = document.getElementById("age").value;
let inputSecondes = document.getElementById("inputSecondes").value;
let inputMinutes = document.getElementById("inputMinutes").value;
let inputHeures = document.getElementById("inputHeures").value;
let inputJours = document.getElementById("inputJours").value;
let result = document.getElementById("result");
let AgeEnJour = inputJours*365;
console.log(AgeEnJour);*/
