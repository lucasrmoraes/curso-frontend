# DOM

- Document  Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação
- NÂO é uma linguaguem de programação
- É essencial para o JS entender o modelo de páginas web

## Para que serve?

- Alterar a estrutura
- Alterar o estilo
- Alterar o conteudo

## Como?

- Disponibilizando API <!-- Fornece recursos, métodos -->
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Arvore de elementos
- Seletores
- Objetos (nós / nodes) <!-- Como se cada tag aberta, fosse cascata ou ramificando -->

### Exemplo HTML

...
<html>
    <head></head>
    <body></body>
</html>
...

### Exemplo Obj

...
objeto ={
    html :{
        head :{},
        body : {
            h1: {

            }
        }
    }
}
...

## DOM x JS

- O DOM pode ser usado por outras linguaguens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar JavaScript

- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar Requisições desnecessárias (performance)
- SPA (Single Page Applications)<!-- São paginas que não necessitam ficar recarregando para o usuário-->
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript

- Código é executado por navegadores
- O conteúdo NÂO fica visivel para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos (callback) <!-- função passada a outra função como argumento -->

Seleciona o objeto e disponibiliza (métodos / função).callback


- document.getElementById (id)
- document.getElementsByTagName ("div")
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name') // setar (inserir, definir)
- element.getAttribute('name') // trazer (buscar)
- element.addEventListener()
- window.location // URL página
- window.onload (en-US) // Controlar funções
- console.log() // Exibir funções console (tela)
- window.scrollTo(x, y) // Função

## Seletores

- Tipos de seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById()
- getElementByTagName()
- getElementByName()
- getElementByClassName()
- querySelectorAll() // #id | .class

#### Referências

- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o
