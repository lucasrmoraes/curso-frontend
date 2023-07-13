function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
    soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao ( notas ){

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 7 ? "aprovado" : "reprovado";
    
    return 'Media: ' + media + ' - Resultado: ' + condicao;

}

// Função Recursivas

function contagemRegressiva( numero ) {

    console.log( numero );
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)

    contagemRegressiva(proximoNumero); // 9

}

contagemRegressiva(10); // ideia da principal é reaproveitar uma função dentro de outra função


document.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01'); // recebendo formuçario-01 (valores) e chamando o documento lá na estrutura do HTML

    let dados = new FormData(formulario); // Captando dados do formulário, utilizando método FormData

    let objeto = {}; // Tipo de váriavel, recebe vários valores e consegue add várias caracteristicas a este objeto

    let notas = [];

    for (let key of dados.keys()) { // Laço criado para capturar os dados deste objeto
        objeto[key] = dados.get(key);

        // adicona itens no array
        notas.push(parseInt(dados.get(key))); 
        // parseInt para o programa entender que são numeros inteiros
    }

    console.log(notas); // Finalidade do console.log é para vermos o que está ocorrendo por de baixo dos panos

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    aprovacao(notas);

});