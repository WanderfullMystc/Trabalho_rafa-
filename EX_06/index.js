const LOGIN = `12345`;
const PASSWORD = `9999`;

let loginNome = document.getElementById('loginNome');
let loginSenha = document.getElementById('loginSenha');

function login() {
    if(loginNome.value != LOGIN) {
        document.getElementById('resposta').innerHTML = ("Usuário inválido!");
        return;

    }
    if(loginSenha.value != PASSWORD) {
        document.getElementById('resposta').innerHTML = ("Senha incorreta!");
        return;

    }
    if(loginSenha.value == PASSWORD && loginNome.value == LOGIN) {
        document.getElementById('resposta').innerHTML = ("Acesso permitido!");
        return;

    }

}

function limpar() {
    document.getElementById('resposta').innerHTML = ("");
    loginNome.value = null;
    loginSenha.value = null;

}