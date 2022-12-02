let idade_1 = document.getElementById('idade_1');
let idade_2 = document.getElementById('idade_2');
let idade_3 = document.getElementById('idade_3');
let idade_4 = document.getElementById('idade_4');

function relacao() {
    if(idade_1.value == idade_2.value || idade_3.value == idade_4.value){
        window.alert('As idades não devem ser iguais');
        return;
    }
    document.getElementById('oldMan+newWoman').innerHTML = (Math.max(idade_1.value,idade_2.value) + Math.min(idade_3.value,idade_4.value));
    document.getElementById('oldWoman-newMan').innerHTML = (Math.min(idade_1.value,idade_2.value) - Math.max(idade_3.value,idade_4.value));

}
