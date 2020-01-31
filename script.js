
        var 
        secondes=31536000,
        minutes=525600,
        heures=8760,
        jours=365;
        
        document.getElementById("button").onclick=function(){
            var age = parseInt(document.getElementById("age").value);
            if (document.getElementById('inputSecondes').checked) {
              
                document.getElementById("result").innerHTML = age* secondes;
            }

            if (document.getElementById('inputMinutes').checked) {
               
                document.getElementById("result").innerHTML = age* minutes;
            }
            if (document.getElementById('inputHeures').checked) {
                
                document.getElementById("result").innerHTML = age* heures;
            }
            if (document.getElementById('inputJours').checked) {
                
                document.getElementById("result").innerHTML = age* jours;
            }

            }

  