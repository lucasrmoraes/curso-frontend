# Operadores

## Aritméticos: retornam o resultado de uma operação
- + somar
- - subtrair
- * multiplicar
- / dividir
- % resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false)
<   menor que
>   maior que
<=  menor ou igual
>=  maior ou igual

## Comparadores Lógicos: testelógico, retorno booleano (true / false)

==      igualdade entre sentenças (valor)
!=      diferença entre sentenças (valor) <!-- O ponto de '!' é como se tivesse negando-->
===     igualdade entre sentenças (valor e tipo)
!==     diferena entre sentenças (valor e tipo)
=       atribuição <!-- Quando recebe um valor ou um caracter, usando o "" o computador entende como string -->
typeof  teste de variável

a == b - true
a != b - false

* Atribuição <!-- '=' Declara a variável ou atribui um valor a ela -->
b = 4
a = b
a = 4

## Operadores de lógica e junção lógica
- !     NÂO (NOT) <!-- Nega a sentença-->
- &&    E (AND) <!-- Ambas as condições precisam ser verdadeiras -->
- ||    OU (OR) <!-- Qual quer uma das condições precisa ser verdadeira -->

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:

- a != b        // o valor de a é diferente de b
- x !== y       // o valor e o tipo de x são diferentes de y
- !a == b       // o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em números binários:
- true é equivalente a 1
- false é equivalente a 0

#### Operador lógico de atribuição

- Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

- Exemplo:

- var meucarro = cor == "preto" ? "preto" : "branco";

## If
if (...) {
    ... <!-- A chave só é necessaria quando usa mais de uma linha-->
}

## Else
else (...) {

}

if (cor == "preto") {
    meucarro = "preto";
}   else {
    meucarro = "cinza";
}

## Else if
else if (...){

}

* Exemplo

if (cor == "preto") {
    meucarro = "preto";
}  else if (cor == "vermelho"){
    meucarro = "cinza";
}  else if (cor == "amarelo"){
    meucarro = "branco";
}  else {
    meucarro = "azul";
}


### Switch

switch (cor) {
    case 'branco' :
        meucarro = 'branco'
        break
    case 'vermelho' :
        meucarro = 'vermelho'
        break
    case 'amarelo' :
        meucarro = 'amarelo'
        break
    default :
        console.log ('não temos a cor desejada');
}


## Média

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 3;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if(media > 8) {
    console.log("Aluno Aprovado")
} else {
    console.log("Aluno em recuperação")
}

### Laços de Repetição

...

for ([expresaoInicial]; [condicao]; [incremento])<!--for - repetição(condição) {execução } -->

    console.log("total de horas: " + hora);

// fazer a revisão do carro aos 10km

var km;
var revisao = 10; 

for(km = 0; km < revisao; km++ ){
    console.log("pode rodar");
}

for(km = 0; km < revisao; km++ ){
    console.log("apenas" + km + "kms então pode rodar");
}

### Cálculo de média de alunos

var alunos = [
    [6, 7, 5, 2],
    [8, 5, 6, 8],
    [10, 7, 8, 4]
]

var nota = 0;
for (var i= 0; i < alunos.length; i++){ <!-- Este primeiro laço percorre os alunos, neste caso são 3. -->
    
    nota = 0
    aluno = alunos[i]
    console.log("Aluno: " + aluno);

<!--Laço abaixo percorre as notas dos alunos, são 4 notas por aluno. -->

    for(c = 0; c < aluno.length; c++){ 
        nota += aluno[c]
    }

    media = nota / 4;

<!--Executa a média dos alunos através do loop -->

    if(media >= 7){
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Média: " + media + " - " + resultado);
}

### While

while ( [condição] ){
    [execução]
}

<!--Caso de utilizar o while a "variavel" precisa estar declarada antes do laço. Podemos trabalhar tanto com imcremento '++' ou decremento '--' -->

var contador = 0;
while (contador < 0) {
    contador++;
}

var hora = 23;
while (hora > 0){
        <!--Console log - Texto apresenta na tela-->
    console.log(hora); 
    hora--;
}

### Do

do {
    [execução]
} while ([condição])

### Funções

- Evitar repetições de código
- Realizar chamadas dinâmicas de algoritimos

function calcularMedia(notas) {

    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
        soma += notas [c]; // "+=" recebe e soma o valor
    } 


    media = soma / notas.length; 
// Ficou um cálculo dinâmico, porque independente da quantidade de notas ela apresenta na tela

    return media;
}

function aprovacao ( media ){
    let condicao = media >= 7 ? "aprovado" : "reprovado";
    
    return condicao;
}

console.log("Média: " + calcularMedia([8, 8, 5 , 7, 2] ) )

console.log(aprovacao (calcularMedia([8, 8, 5 , 7, 2] ) ) )

<!-- Funções sempre terão um retorno após término da operação -->

<!-- Regras: Nome da função; Parametros (uso de parenteses); As chaves "{}" onde será executado dentro da função -->

<!-- Se faz necessario sempre colocar uma "war" pois sem ela não percorre o laço -->

<!-- Posso repetir "console.log()" quantas vezes achar necessario -->

<!-- Uso "var" e "let" tem o mesmo objetivo. O "let" é mais usado atualmente.-->

### Função Executada diferente

function calcularMedia(notas) {

  var soma = 0;
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

console.log(aprovacao([8, 8, 5 , 7, 2] ) );