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

/* Formulário envio de dados para cálculo da média */

document.getElementById('formulario-01').addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    if (this.getAttribute('class').match(/erro/)){
        return false;
    }

    let dados = new FormData(this); // Captando dados do formulário, utilizando método FormData

    let notas = [];

    for (let key of dados.keys()) { // Laço criado para capturar os dados deste objeto

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // number - é um numero casa decimal

        if(!isNaN(numero)) {
            notas.push(numero);
        }
        
    }

    console.log(notas); // Finalidade do console.log é para vermos o que está ocorrendo por de baixo dos panos

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    aprovacao(notas);

});

function validaCampo(elemento){
    
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        // Está informando ao usuario quando campo está vazio ou não foi preenchido!! Aparece a mensagem a seguir.

        if(this.value == '') {
            document.querySelector(".mensagem").innerHTML = 'Verifique o preenchimento em vermelho'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;

        } else {
            document.querySelector(".mensagem").innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        }

        });
}

function validaCampoNumerico(elemento){
    
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        console.log(this.value);

        // Está informando ao usuario quando campo está vazio ou não foi preenchido!! Aparece a mensagem a seguir.

        if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10) {
            document.querySelector(".mensagem").innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        
        // Se o valor do if for >= 0 e o campo não for preenchido, entende que é = '0'. Assim ele não dá a msg de erro.

        } else {
            document.querySelector(".mensagem").innerHTML = 'Verifique o preenchimento em vermelho'
            this.classList.add('erro');
            this.parentNode.classList.add('erro');

            return false;
        }

        });
}


let  camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let  camposNumericos = document.querySelectorAll('input.numero');


for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

// parseInt - para o programa entender que são numeros inteiros
// parseFloat - numero flutante
// !isNaN verifica se é realmente  um numero - quando o js tenta converter uma string por numero
// .match - retorna uma correspondência entre uma string com uma expressão regular
// focus quando o usuario clica no campo

// Obs: Neste formulário precisaria fazer um bloqueio, para não permitir o envio sem o preenchimento de todos os dados!!!