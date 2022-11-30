
function relacao() {
    let numEleitores = document.getElementById('numEleitores').value;
    let votosBranco = document.getElementById('votosBranco').value;
    let votosNulo = document.getElementById('votosNulo').value;
    let votosValido = document.getElementById('votosValido').value;
    
    // if(Number(numEleitores) < Number(votosBranco + votosNulo + votosValido)){
    //     window.alert('O numero de votos adicionados supera o numero de Eleitores');
    //     console.log("drugcornio");    
    // }
    document.getElementById('relBrancos').innerHTML = (votosBranco*100/numEleitores + '%');
    document.getElementById('relNulos').innerHTML = (votosNulo*100/numEleitores + '%');
    document.getElementById('relValidos').innerHTML = (votosValido*100/numEleitores + '%');

}
