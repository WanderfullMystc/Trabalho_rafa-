
let numConta = document.getElementById('nConta');
let saldo = document.getElementById('saldo');
let credito = document.getElementById('credito');
let debito = document.getElementById('debito');


function status() {
    let saldoAtual  = Number(saldo.value) - Number(debito.value) + Number(credito.value);
    console.log(numConta.value);
        if(saldoAtual < 0) {
            document.getElementById('status').innerHTML = ('Saldo Negativo');

        }
        if(saldoAtual > 0) {
            document.getElementById('relNulos').innerHTML = ('Saldo Positivo');

        }

}
