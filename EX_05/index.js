let p_nome = document.getElementById('p_nome');
let p_quantidade = document.getElementById('p_quantidade');
let p_preco = document.getElementById('p_preco');
let  desconto;

function precoTotal() {
    let total = p_quantidade.value * p_preco.value;

    if(p_quantidade.value <= 5) {
        desconto = 0.02;        

    }
    if(p_quantidade.value > 5 && p_quantidade.value <= 10) {
        desconto = 0.03;        
        
    }
    if(p_quantidade.value > 10) {
        desconto = 0.05;        
        
    }
    document.getElementById('total_desconto').innerHTML = (`Obrigado pela compra, voce obteve um desconto de ${Number(desconto)*100}%`);
    document.getElementById('preco_final').innerHTML = (total-total*desconto);

}
