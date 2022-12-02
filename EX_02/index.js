
let hTrabalhada = document.getElementById('hTrabalhada');
let hSalario = document.getElementById('hSalario');

function hEXTRA() {
    let num_hTrabalhada = Number(hTrabalhada.value);
    let num_hSalario = Number(hSalario.value);
    let hExtra = num_hSalario-40;

    if(num_hTrabalhada > 40) {
        document.getElementById('hora_Extra').innerHTML = (num_hSalario*40 + hExtra*num_hSalario*1.5 + ' R$');

    }
    if(num_hTrabalhada <= 40) {
        document.getElementById('hora_Extra').innerHTML = (num_hSalario*num_hTrabalhada + ' R$');

    }
    console.log(typeof(hSalario));
    console.log(hTrabalhada);
    console.log(hSalario);

}
