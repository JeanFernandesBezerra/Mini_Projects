const prompt = require("prompt-sync")({ sigint: true });

// Estrutura das matrizes: [numeroDoPedido, moedaDoPedido, valorDoPedidoCripto, valorDoPedidoReal, horarioDoPedido]
let listaCompra = [];
let listaVenda = [];

function LoopMenuInterativo(login, id, usuarioLogado){
    while(true){    
        console.log("Bem-vindo " + login + "| ID " + id);
        console.log(
            "=== OPÇÕES ===\n"+
            "1 - Consultar carteira\n"+
            "2 - Enviar ordem de compra\n"+
            "3 - Enviar ordem de venda\n"+
            "4 - visualizar ordens\n"+
            "5 - Depositar Saldo (R$)\n"+
            "6 - logout (voltar)"
        );
        let decissaoMenu = prompt("selecione: ");
        if(decissaoMenu == "6"){
            break;
        }
        escolhaMenuInterativo(decissaoMenu, usuarioLogado);
    }
}

function escolhaMenuInterativo(decissao, usuarioLogado){
    switch(decissao){
        case "1":
            consultarCarteira(usuarioLogado);
            return true;

        case "2":
            ordemCompra(usuarioLogado);
            return true;

        case "3":
            ordemVenda(usuarioLogado);
            return true;

        case "4":
            verOrdem();
            return true;

        case "5":
            depositarReal(usuarioLogado);
            return true;

        default:
            console.log("opção inválida");
    }
}

function consultarCarteira(usuarioLogado){
    console.log("\n=== SUA CARTEIRA ===");
    console.log(`Saldo em Reais:  R$ ${usuarioLogado[3].toFixed(2)}`);
    console.log(`Saldo em BTC:    ${usuarioLogado[4]} BTC`);
    console.log(`Saldo em ETH:    ${usuarioLogado[5]} ETH`);
    console.log(`Saldo em SOL:    ${usuarioLogado[6]} SOL`);
    console.log("=========================================\n");
}

function depositarReal(usuarioLogado) {
    console.log("\n=== DEPOSITAR SALDO EM REAIS ===");
    let valorDeposito = Number(prompt("Digite o valor que deseja depositar: R$ "));
    
    if (validaçãoDinheiro(valorDeposito) == false) {
        return depositarReal(usuarioLogado);
    }

    usuarioLogado[3] += valorDeposito; 
    console.log(`\n=== Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso! ===`);
    console.log(`=== Novo saldo: R$ ${usuarioLogado[3].toFixed(2)} ===\n`);
}

function ordemCompra(usuarioLogado){
    while(true){
        console.log(
            "\n=== MOEDA DE COMPRA ===\n"+
            "1 - BTC\n"+
            "2 - ETH\n"+
            "3 - SOL\n"+
            "4 - voltar"
        );
        let escolha = prompt("Selecione a moeda: ");

        let transacao = null;

        switch(escolha){
            case "1":
                transacao = gerenciadorTransacaoCompra("BTC", listaCompra, usuarioLogado);
                if (transacao !== null) {
                    listaCompra.push(transacao);
                }
                break;
            
            case "2":
                transacao = gerenciadorTransacaoCompra("ETH", listaCompra, usuarioLogado);
                if (transacao !== null) {
                    listaCompra.push(transacao);
                }
                break;

            case "3":
                transacao = gerenciadorTransacaoCompra("SOL", listaCompra, usuarioLogado);
                if (transacao !== null) {
                    listaCompra.push(transacao);
                }
                break;

            case "4":
                return;

            default:
                console.log("\n=== opção inválida. ===\n");
        }
    }
}

function ordemVenda(usuarioLogado){
    while(true){
        console.log(
            "\n=== MOEDA DE VENDA ===\n"+
            "1 - BTC\n"+
            "2 - ETH\n"+
            "3 - SOL\n"+
            "4 - voltar"
        );
        let escolha = prompt("Selecione a moeda: ");

        let transacao = null;

        switch(escolha){
            case "1":
                transacao = gerenciadorTransacaoVenda("BTC", listaVenda, usuarioLogado);
                if (transacao !== null) {
                    listaVenda.push(transacao);
                }
                break;
            
            case "2":
                transacao = gerenciadorTransacaoVenda("ETH", listaVenda, usuarioLogado);
                if (transacao !== null) {
                    listaVenda.push(transacao);
                }
                break;

            case "3":
                transacao = gerenciadorTransacaoVenda("SOL", listaVenda, usuarioLogado);
                if (transacao !== null) {
                    listaVenda.push(transacao);
                }
                break;

            case "4":
                return;

            default:
                console.log("\n=== opção inválida. ===\n");
        }
    }
}

function gerenciadorTransacaoCompra(moeda, listaAlvo, usuarioLogado){
    let idPedido = numeroPedido(listaAlvo);
    
    let qtdCripto = quantidadeCriptoSimples(); 
    let qtdReal = quantidadeReal();
    
    let custoTotal = qtdCripto * qtdReal;
    let saldoDisponivelReal = usuarioLogado[3];

    if (custoTotal > saldoDisponivelReal) {
        console.log(`\n=== ERRO: Saldo em Real insuficiente! ===`);
        console.log(`=== Custo total da ordem: R$ ${custoTotal.toFixed(2)} ===`);
        console.log(`=== Seu saldo atual em Reais: R$ ${saldoDisponivelReal.toFixed(2)} ===`);
        console.log("=========================================\n");
        return null; 
    }

    usuarioLogado[3] -= custoTotal;

    let horaExata = pegarHorarioPedido();

    let listaTemporaria = [
        idPedido,
        moeda,
        qtdCripto,
        qtdReal,
        horaExata
    ];

    console.log(`\n=== Ordem de compra enviada com sucesso! ===`);
    console.log(`=== R$ ${custoTotal.toFixed(2)} descontados da sua carteira. ===\n`);
    return listaTemporaria;
}

function gerenciadorTransacaoVenda(moeda, listaAlvo, usuarioLogado){
    let idPedido = numeroPedido(listaAlvo);
    
    let qtdCripto = quantidadeCriptoVenda(moeda, usuarioLogado); 
    if (qtdCripto === null) {
        return null;
    }

    let qtdReal = quantidadeReal();

    let indiceMoeda = 0;
    if (moeda === "BTC") indiceMoeda = 4;
    if (moeda === "ETH") indiceMoeda = 5;
    if (moeda === "SOL") indiceMoeda = 6;

    usuarioLogado[indiceMoeda] -= qtdCripto;

    let horaExata = pegarHorarioPedido();

    let listaTemporaria = [
        idPedido,
        moeda,
        qtdCripto,
        qtdReal,
        horaExata
    ];

    console.log(`\n=== Ordem de venda enviada com sucesso! ===`);
    console.log(`=== ${qtdCripto} ${moeda} descontados da sua carteira. ===\n`);
    return listaTemporaria;
}

function numeroPedido(lista){
    return lista.length;
}

function quantidadeReal(){
    let real = Number(prompt("Valor por cada unidade da cripto (Preço em R$): "));
    if(validaçãoDinheiro(real) == false){
        return quantidadeReal();
    }
    return real;
}

function quantidadeCriptoSimples(){
    let cripto = Number(prompt("Quantidade de cripto: "));
    if(validaçãoDinheiro(cripto) == false){
        return quantidadeCriptoSimples();
    }
    return cripto;
}

function quantidadeCriptoVenda(moeda, usuarioLogado){
    let cripto = Number(prompt("Quantidade de cripto para vender: "));
    if(validaçãoDinheiro(cripto) == false){
        return quantidadeCriptoVenda(moeda, usuarioLogado);
    }

    let indiceMoeda = 0;
    if (moeda === "BTC") indiceMoeda = 4;
    if (moeda === "ETH") indiceMoeda = 5;
    if (moeda === "SOL") indiceMoeda = 6;

    let saldoDisponivel = usuarioLogado[indiceMoeda];

    if (cripto > saldoDisponivel) {
        console.log(`\n=== ERRO: Saldo insuficiente em ${moeda}! ===`);
        console.log(`=== Você possui: ${saldoDisponivel} ${moeda} | Tentou vender: ${cripto} ${moeda} ===`);
        console.log("=========================================\n");
        return null;
    }

    return cripto;
}

function validaçãoDinheiro(dinheiro){
    if (isNaN(dinheiro) || dinheiro <= 0){
        console.log("\n=== ERRO - DIGITE UM VALOR VÁLIDO. ===\n");
        return false;
    }
    return true;
}

function verOrdem(){
    while(true){
        console.log("=== ORDEM ===");
        console.log(
            "1 - Ordem de compra\n"+
            "2 - Ordem de venda\n"+
            "3 - voltar"
        );
        let selecionar = prompt("selecione: ");
        
        if(selecionar == "1"){
            verOrdemCompra();
        }
        else if(selecionar == "2"){
            verOrdemVenda();
        }
        else if(selecionar == "3"){
            break;
        }
        else{
            console.log("\n=== opção inválida ===\n");
        }
    }
}

function verOrdemCompra(){
    console.log("=== HISTÓRICO DE COMPRAS ===");
    
    if (listaCompra.length === 0) {
        console.log("Nenhuma ordem de compra registrada.");
        return;
    }

    for (let i = 0; i < listaCompra.length; i++) {
        for (let j = 0; j < listaCompra.length - 1; j++) {
            if (listaCompra[j][3] < listaCompra[j + 1][3]) {
                let temp = listaCompra[j];
                listaCompra[j] = listaCompra[j + 1];
                listaCompra[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < listaCompra.length; i++) {
        let id      = listaCompra[i][0];
        let moeda   = listaCompra[i][1];
        let cripto  = listaCompra[i][2];
        let real    = listaCompra[i][3];
        let horario = listaCompra[i][4];

        console.log(`[Ordem #${id}] Preço Unitário: R$ ${real.toFixed(2)} | Qtd: ${cripto} ${moeda} | Horário: ${horario}`);
    }
    console.log("=========================================\n");
}

function verOrdemVenda(){
    console.log("=== HISTÓRICO DE VENDAS ===");
    
    if (listaVenda.length === 0) {
        console.log("Nenhuma ordem de venda registrada.");
        return;
    }

    for (let i = 0; i < listaVenda.length; i++) {
        for (let j = 0; j < listaVenda.length - 1; j++) {
            if (listaVenda[j][3] > listaVenda[j + 1][3]) {
                let temp = listaVenda[j];
                listaVenda[j] = listaVenda[j + 1];
                listaVenda[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < listaVenda.length; i++) {
        let id      = listaVenda[i][0];
        let moeda   = listaVenda[i][1];
        let cripto  = listaVenda[i][2];
        let real    = listaVenda[i][3];
        let horario = listaVenda[i][4];

        console.log(`[Ordem #${id}] Preço Unitário: R$ ${real.toFixed(2)} | Qtd: ${cripto} ${moeda} | Horário: ${horario}`);
    }
    console.log("=========================================\n");
}

function pegarHorarioPedido() {
    let agora = new Date(); 

    let hora    = agora.getHours();
    let minuto  = agora.getMinutes();
    let segundo = agora.getSeconds();

    if (hora < 10)    hora = "0" + hora;
    if (minuto < 10)  minuto = "0" + minuto;
    if (segundo < 10) segundo = "0" + segundo;  

    return `${hora}:${minuto}:${segundo}`;
}

module.exports = {
    LoopMenuInterativo: LoopMenuInterativo
};