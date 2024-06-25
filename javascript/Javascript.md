# Javascript

- Estado de JS
- Onde é executado
- Omnipresente na web
- App hídridos
- Aplicações de ponta-a-ponta: banco de dados, back-end / front-end
- Interagir com DOM (api-web)
- Requisições dinâmicas
- IoT (Internet das Coisas): o JS está presente em tudo
- ECMAScript

## Fundamentos JS

- Fundamentos do JavaScript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks
- Neste curso evoluímos da base para o topo
- É melhor que começar na frente e precisar retornar a base

## Metodologia

- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e segura
- Neste curso apresentamos conceitos de modo progressivo seguindo uma linha de evolução
- Começa fácil e vai aumentando a complexidade
- Além da especialização, aprendemos a integrar com diversas possibilidades

## Lógica de Programação

- Computador:
- Máquina que extrai dados
- Processar: realizar operações nos dados de entrada
- Dado: é o que pode ser processamento
- Informação: resultado do processameto
- Processamento de dados: Entrada (dados) > Processamento > Saída (informação)

# E a lógica?

Lógica é aquilo que faz sentido

## Como escrever um programa?

- Aplicar a lógica para descrever os passos para resolcer um problema em ordem de execução
- A sequencia de passos, instruções que o computador deve seguir é conhecida com Algoritimo

## Algoritimo

- Sequência lógica e finita de instruções que resolvem um problema
- Exemplo: receita de bolo, manual de instrução
- Nem todo algoritimo é um programa de computador, mas todo programa de computador é algoritimo
- Quem viabiliza o funcionamento dos algoritimos nos computadores: linguagens de programação

### Algoritimo para calcular a média de 3 números

1. Inicio;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber o terceiro número: entrada 3;
5. Processamneto: Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) / 3;
6. Exibir o resultado: print, echo, console.log;
7. Fim;

### Torre de Hanoi

- Mover todos os discos para a direita, com menor número de movimento possível, sem colocar um disco em cima de um disco menor: www.somatematica.com.br/jogos/hanoi/
- Jogos: www.somatematica.com.br/jogos.php

## Funcionalidade Gerais

- Criar algoritmos e programas para executar no navegador: client side
- Manipular o Dom: elementos HTML, eventos (clique, submit), estilos CSS
- Node.js: framework JF para back-end / runtime em JS
- Mongo.db / GraphQL: banco de dados em JS
- React / Vue.js / Angular: frameworks JS para desenvolvimento web / mobile
- React Native: framework JS para desenvolvimento mobile

- recebe e manipular dados
- tomar decisões baseadosalõgica computacional
- loop e interações
- condições de saída

### Executar o JS

- Console browers
- Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/

### Instalação do Node.js

- Para a gente conseguir executar scripts JS no terminal de comando, precisamos utilizar o Node.js
- Instalação: https://node.js.org/pt-br/download/package-manager/

* Windows: Primeiro instalar o Chocolatey
- Precisa executar o PowerShell como administrator
- se tudo der certo na instalação do Chocolatey, rodar: choco install nvs
- nvs add lts
- $ nvs use lts
- PATH -= %LOCALAPPDATA%\nvs\default
- PATH += %LOCALAPPDATA%\nvs\node\14.17.0\x64

#### Após concluir a instalação

- Rodar em um novo terminal: node-v

### Váriaveis

- São utilizadas para referenciar espaço na memória

- var (váriaveis)
- const (fica com valor imutável)
- let
- string (tipo de variavel - armazena texto, frase - conjunto de caracteres)
- tipagem: número ou string
- array: conjunto de valores (pode armazenar diversas variáveis seja elas numeros, texto, boolean) <!-- .length (possivel saber quantas informações tem armazenada) -->

## Operadores

- Soma +
- Subtração -
- Multiplicação *
- Dividir /
- Módulo (resto da divisão) %
- Math: random(), round (), sqrt().

* Atribuição
a = b
a += b
a -= b
a *= b
a /= b
a %= b
Atribui 1 usando (++)
Subtrai 1 usando (--)

* Operações de Comparação / Lógicos
- Igual = ou ===
- Diferente !=
- Maior que >
- Maior ou igual >=
- Menor que <
- Menor que <=

### Comandos

- typeof: informa que de que tipo é a variável <!-- Obs: Utilizando '' ou "" na atribuição de uma variável, o sistema entende como uma string-->