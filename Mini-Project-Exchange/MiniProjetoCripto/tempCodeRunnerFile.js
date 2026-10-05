const prompt = require("prompt-sync")({ sigint: true });

//LOGIN | SENHA | ID | REAL | BTC | ETH | SOL
let usuarios = [
    ["jean", "123?", 0, 0, 0, 0, 0]
];


const exchange = require("./ExchangeCriptoProject.js");

function loopPrincipal(){
    while(true){
        if (escolhaAcesso() === false){
            break;
        }
    }
    console.log("=== programa finalizado. ===");
}

function escolhaAcesso(){
    console.log("=".repeat(15));
    console.log(
    "1 - Logar\n"+
    "2 - Criar conta\n"+
    "3 - Sair"
    );

    let decissao = prompt("selecionar: ");
    return verificarConta(decissao);
}

function verificarConta(decissao){
    console.log("=".repeat(15));
    switch(decissao){
        case "1":
            verificarLogin();
            return true;

        case "2":
            criarLogin();
            return true;

        case "3":
            return false;

        default:
            console.log("=== opção inválida. ===");
            return true;
    }
}

function listarUsuarios(){
    for (let i = 0; i < usuarios.length; i++){
        console.log(
            "Usuário: "+ usuarios[i][0] +
            " || ID:" + usuarios[i][2]
        );
    }
}

function verificarLogin(){
    let acessoLiberado = false;
    console.log("=".repeat(15));
    let login = prompt("Login: ");
    let senha = prompt("Senha: ");
    
    let usuarioEncontrado = null;

    for (let i = 0; i < usuarios.length; i++) {
        if (login == usuarios[i][0] && senha == usuarios[i][1]){
            acessoLiberado = true;
            usuarioEncontrado = usuarios[i];
            break;
        }
    }

    if (acessoLiberado == true){
        console.log("=== Login efetuado com sucesso. ===");
        exchange.LoopMenuInterativo(usuarioEncontrado[0], usuarioEncontrado[2], usuarioEncontrado);}
    else{
        console.log("=== Login ou senha incorretos. ===");
    }
}

function criarLogin(){
    let loginNovo = prompt("Crie o login: ");
    for (let i = 0; i < usuarios.length; i++){
        if(loginNovo == usuarios[i][0]){
            console.log("=== Login ja cadastrado. ===");
            return;
        }
    }

    let senhaFinal = criarSenha();
    let idGerador = criarId();

    usuarios.push([loginNovo, senhaFinal, idGerador, 0, 0, 0, 0]);
    console.log("=== Conta criada com sucesso! ===");
}

function criarSenha(){
    console.log("=== use números,letras maiuscula e simbolos especiais. ===");
    let senhaNova = prompt("Crie a senha: ");
    if(verificarQualidadeSenha(senhaNova) == true){
        return senhaNova;
    }
    else{
        return criarSenha();
    }
}

function verificarQualidadeSenha(novaSenha){
    if(verificarTamanho(novaSenha) && verificarMaiusculo(novaSenha) && 
    verificarMinusculo(novaSenha) && verificarNumero(novaSenha) 
    && verificarCaracterEspecial(novaSenha) == true){
        return true;
    }
    else{
        return false;
    }
}

function verificarTamanho(novaSenha){
    let tamanho = false;

    if(novaSenha.length < 8){
        console.log();
        console.log("=== senha precisa ter pelo menos 8 caracteres. ===");
        console.log();
        return tamanho;
    }
    else{
        tamanho = true;
        return tamanho;
    }
}

function verificarMaiusculo(novaSenha){
    let temMaiusculo = false;

    let upNovaSenha = novaSenha.toUpperCase();
    let lowNovaSenha = novaSenha.toLowerCase();

    for (let i = 0; i < novaSenha.length; i++){
        if(novaSenha[i] == upNovaSenha[i]){
            if(novaSenha[i] != lowNovaSenha[i]){
                temMaiusculo = true;
                return temMaiusculo;
            }
        }
    }
    if(!temMaiusculo){
        console.log();
        console.log("=== senha precisa ter pelo menos um caracter maiusculo. ===");
        console.log();
        return temMaiusculo;
    }
}

function verificarMinusculo(novaSenha){
    let temMinusculo = false;

    let upNovaSenha = novaSenha.toUpperCase();
    let lowNovaSenha = novaSenha.toLowerCase();

    for (let i = 0; i < novaSenha.length; i++){
        if(novaSenha[i] == lowNovaSenha[i]){
            if(novaSenha[i] != upNovaSenha[i]){
                temMinusculo = true;
                return temMinusculo;
            }
        }
    }
    if(!temMinusculo){
        console.log();
        console.log("=== senha precisa ter pelo menos um caracter minusculo. ===");
        console.log();
        return temMinusculo;
    }
}

function verificarNumero(novaSenha){
    let temNumero = false;
    let numeros = "0123456789";

    for (let i = 0; i < novaSenha.length; i++){
        for (let j = 0; j < numeros.length; j++){
            if(novaSenha[i] == numeros[j]){
                temNumero = true;
                return temNumero;
            }
        }
    }
    if(!temNumero){
        console.log("=== senha precisa ter pelo menos um número. ===");
        return temNumero;
    }
}

function verificarCaracterEspecial(novaSenha){
    let temCaracterEspecial = false;
    let caracterEspecial = "!@#$%¨&*()_-+=';:,.></?|*";

    for (let i = 0; i < novaSenha.length; i++){
        for (let j = 0; j < caracterEspecial.length; j++){
            if(novaSenha[i] == caracterEspecial[j]){
                temCaracterEspecial = true;
                return temCaracterEspecial;
            }
        }
    }
    if(!temCaracterEspecial){
        console.log("=== senha precisa ter pelo menos um caracter especial. ===");
        return temCaracterEspecial;
    }
}

function criarId(){
  return usuarios.length;
}    

loopPrincipal();