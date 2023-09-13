### Exercício Modulo 14

- <Resolva as Operações>


- 10 + 15 = 25 (number)
- "10" + 2 = "12" (string)
- "10" * 2 = "20" (string)
- "10" / 3 = 3.3333 (float)
- "10" % 3 = 0.3 (float)
- 10 + true = 11 (number)
- 10 == "10" =  true (boolean)
- 10 === "10" = false (boolean)
- 10 < 11 = true (boolean)
- 10 > 12 = false (boolean)
- 10 <= 10.1 = true (boolean)
- 10 > 9.99 = true (boolean)
- 10 != "dez" = true (boolean)
- 10 + true = 11 (number)
- "dez" + true = "onze" (string)
- 10 + false = 10 (number)
- 10 * false = 0 (number)
- true + true = 2 (number)
- 10++ = 11 (number)
- 10-- = 9 (number)
- 1 & 1 = true (boolean)
- 1 & 0 = false (boolean)
- 0 & 0 = true (boolean)
- 1 & 0 = false (boolean)
- 0 / 1 = 0 (number)
- 5 + 5 == 10 = true (boolean)
- "5" + "5" == 10 = false (boolean)
- "5" * 2 > 9 = true (boolean)
- (10+10) * 2 = 40 (number)
- 10 + 10 * 2 = 30 (number)

<Responda as perguntas de acordo com as variáveis>

- var branco = "preto";
- var preto = "cinza";
- var cinza = "branco";
- var carro = "preto";
- var valor = 30000;
- var prestacao = 750;


<A> branco == "branco"

let branco = "preto"

if (branco == "branco") {
    console.log ("Verdadeira");
} else {
    console.log ("Falso");
}



<B> branco == cinza

let branco = "preto";
let cinza = "branco";

if (branco == cinza) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}



<C> carro === branco

let branco = "preto";
let carro = "preto";

if ( branco === carro) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}



<D> var cavalo = carro == "preto" ? "cinza" : "marrom";

let cavalo;
let carro = "preto";

if (cavalo == carro) {
    cavalo = "cinza";
} else {
    cavalo = "marrom";
}



<E> Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3000? Demonstre a operação.

let prestacao = 750;
let entrada = 3000;
let valor = 30000;

for ( entrada = 3000; entrada < valor; entrada += prestacao) {
    console.log(entrada + prestacao);
} 

if ( entrada == valor){
	console.log("36 Parcelas");
} else {
	console.log("Refazer a operação");
}


<F> Somando as variáveis de cores é formada uma sring de quantos caracteres?

let branco = "preto";
let preto = "cinza";
let cinza = "branco";
let somacaracteres = "";

if (somacaracteres = branco.length + preto.length + cinza.length) {
	console.log(somacaracteres);
}