let numEleitores = document.getElementById('numEleitores');
let votosBranco = document.getElementById('votosBranco');
let votosNulo = document.getElementById('votosNulo');
let votosValido = document.getElementById('votosValido');

function relacao() {
    
    if(numEleitores.value < (Number(votosBranco.value) + Number(votosNulo.value) + Number(votosValido.value))){
        window.alert('O numero de votos adicionados supera o numero de Eleitores');
        return;
    }
    document.getElementById('relBrancos').innerHTML = (votosBranco.value*100/numEleitores.value + '%');
    document.getElementById('relNulos').innerHTML = (votosNulo.value*100/numEleitores.value + '%');
    document.getElementById('relValidos').innerHTML = (votosValido.value*100/numEleitores.value + '%');

}
