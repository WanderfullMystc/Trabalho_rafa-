
let hTrabalhada = document.getElementById('hTrabalhada').value;
let hSalario = document.getElementById('hSalario').value;

hExtra();

function hExtra() {
    if(hTrabalhada > 40){
        document.getElementById('hora_Extra').innerHTML = (hSalario*hTrabalhada + );
        console.log("Golfinho rosa");
        
    }
    document.getElementById('hora_Extra').innerHTML = (hSalario*hTrabalhada + ' F');
}
