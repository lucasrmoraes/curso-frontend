# Bootstrap

- Framework ou biblioteca desenvolvimento
- Modular 
- Componente ricos
- CSS + JS
- Grid System <!-- Tipo um layout formato de grade -->
- Responsivo <!-- Ele se adapta seja pc, tv, smartphone -->
- Mobile-first <!-- Pensa primeiro no mobile(celular) -->
- Amplamente utilizada
- Cross browser

## Biblioteca x Framework

- Biblioteca: oferece objetos / classes prontas para uso
- Framework: oferece um conjunto de bibliotecas
- Biblioteca: recurso para trabalhar
- Framework: metodologia de trabalho <!-- Ensina a pensar no layout -->
- Biblioteca: te leva ao destino <!-- Já esta pronto -->
- Framework te ensina a chegar

## Desenvolvimento ágil

- Metodologias: Scrum, Kanbam, XP <!-- Faz quebras ou seja faz quebras de ciclos de desenvolvimento -->
- Entrega de valor para o negócio 
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - Mínimo Produto Viável
- Estar envolvido x compremetido

## Vantagens

- Uso simples
- Menos código
- Abstração de estilos
- Documentação completa: https: //getbootstrap.com/

## Desvantagens

- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap

<a class = "btn btn-lg">Botão</a>

### Sem Bootstrap

<a class = "btn btn-lg">Botão</a>

    <style>
        html {
            font-size:62,5%
        }

        .botao {
            background-color: #fcf;
            border-radius: 2px;
            display: block;
            font-family: sans-serif;
            padding: 1rem 1.8rem;
            margin 4px auto
        }

        .botao.grande {
            font-size: 2 rem;
        }

        .botao:hover { ... }
        .botao:active { ... }
        .botao:visited { ... }

    </style>

...

## Componentes

- Blocos / Modelos / Templates reutilizáveis
https://getbootstrap.com/docs/5.3/components

## Helpers

- Funções básicas
- Incrementos
- Ajustes