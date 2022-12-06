

let nome = document.getElementById('nome');
let numFilhos = document.getElementById('numFilhos');
let salario = document.getElementById('salario');




add.addEventListener('click', () => {
    verify();
    addDados();
    lerTabela();
});
refresh.addEventListener('click', () =>{
    refreshTable();
});



function addDados() 
{
    let tr = document.createElement("tr");
    document.getElementById("tabelaB").appendChild(tr);
    let tdNome = document.createElement("td");
    tr.append(tdNome);
    tdNome.append(nome.value);
    let  tdNum = document.createElement("td");
    tr.append(tdNum);
    tdNum.append(numFilhos.value);
    let tdSalario = document.createElement("td");
    tr.append(tdSalario);
    tdSalario.append(salario.value);

}
function lerTabela()
{
    let countAll = document.getElementsByTagName('td');    
    let dados = [];
    let i = 0
    for( i ; i < countAll.length; i++){
        dados[i] = countAll[i].innerHTML;
// console.log(i % 3);
        // minSalario(dados[i+1]);
        if(i % 2 == 0){
            maxSalario(dados[i]); 
            // console.log(dados[i]);
        }
        // mediaFilhos(); 
        // mediaSalario();
    }
    // console.log(dados[1]);
    // console.log(document.getElementsByTagName('td').length/3);
    
}

function refreshTable() 
{
    minSalario();
    maxSalario();
    mediaFilhos();
    mediaSalario(); ;
}
function verify() 
{
    if(nome.value.length == 0){
        alert("Digite um nome");
        exitFunc();
    }
    if(numFilhos.value.length == 0){
        alert("Digite um numero de filhos");
        exitFunc();
    }
    if(salario.value.length == 0){
        alert("Digite um salario");
        exitFunc();
    }
    if(salario.value < 0 || numFilhos.value < 0){
        alert("Digite um numero positivo");
        exitFunc();
    }
    
    // if(Number(salario.value) = NaN){
    //     alert("Digite um numero valido");
    //     exitFunc();
    // }
}



function mediaSalario() 
{

    document.getElementById("media_salario").innerHTML = "p";
    
}
function mediaFilhos() 
{
    document.getElementById("media_filhos/as").innerHTML = "p";
}
function maxSalario(salario) 
{
    let todosSalarios = [];
    // console.log(salario);
    for( let i = 0; i < document.getElementsByTagName('td').length/3; i++){
        todosSalarios[i] = salario;

    }
    console.log(todosSalarios[0]);
    // document.getElementById("max_salario").innerHTML = Math.max(salario);

}
function minSalario() 
{
    document.getElementById("porsentual_minSalario").innerHTML = "p";
}