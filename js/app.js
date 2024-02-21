//pega a quantidade de ingressos disponiveis
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    //pega o tipo e quantidade do ingresso solicitado
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    //pega o ingresso selecionado e a quantidade e subtrai da quantidade total
    if (tipoIngresso == 'pista') {
        if ((qtdPista = qtdPista - quantidade) < 0) {
            alert('Quantidade indisponivel para Pista');
            qtdPista = qtdPista + quantidade;
        } else {
            document.getElementById('qtd-pista').innerHTML = `${qtdPista}`;
        }
    } else if (tipoIngresso == 'superior') {
        if ((qtdSuperior = qtdSuperior - quantidade) < 0) {
            alert('Quantidade indisponivel para Superior');
            qtdSuperior = qtdSuperior + quantidade;
            console.log(qtdSuperior)
        } else {
            document.getElementById('qtd-superior').innerHTML = `${qtdSuperior}`;
        }
    } else if (tipoIngresso == 'inferior') {
        if ((qtdInferior = qtdInferior - quantidade) < 0) {
            alert('Quantidade indisponivel para Inferior');
            qtdInferior = qtdInferior + quantidade;
        } else {
            document.getElementById('qtd-inferior').innerHTML = `${qtdInferior}`;
        }

    }
}