# curso-frontend
### Ebac

# GIT
## versionamento

    - Histórico
    - Controle de versão
    - Quem alterou
    - O que alterou
    - Quando alterou
    - Todos os arquivos
    - Evoluçao Continua

    Arquivo A | Versão 1 | Versão 2
    Arquivo B | Versão 1 | Versão 2

## Instalação do GIT

## Criar conta no GitHub

## Clonar o projeto

git clone: https://github.com/lucasrmoraes/curso-frontend.git

## Commits

Informação de alteração

- após testado todo seu código

- cd "curso-frontend"/ ( cd, usado para acessar a pasta do diretório )
- git add * ( Atualiza o diretorio do commite )
- git commit -m "" ( add um commit )
- git push ( Envia alterações para repositório GitHub)
- git pull ( Puxar / trazer alterações do GitHub par sua máquina)

- git fetch --all (Verifica se não tem uma versão nova na minha branch master que possa interferir na que estou desenvolvendo)

- touch .gitignore (cria um arquivo)

## GitFlow 

Fluxo do Git

### Branchs

São ramificações / versões paralelas (Bastante utiliza quando se está trabalhando em equipe)

- main / master (quando o projeto é publicado)
- develop (desenvolvimento, gitalterações, versões de teste - Após todas as operações subimos o(s) arquivo(s) para o master)
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

- Feature (Como se fosse uma sub-versão da branch "dev")
- Bugfix (Correções rápidas)
- Release (Gerar versão nova)
- Hotfix (Correções rápidas)
- Support (Suporte)

- git checkout -b dev (cria uma branch nova)
- git checkout master / main (muda de branch)
- git branch (Confere as branch que foram criadas)

### Merge

- Mescla de branchs
- Voçê pode precisar resolver conflitos manualmente

- git merge main (mescla)

### Pull Requests

- Mescla de branchs no repoositório
- Permite code review
- O repositório resolve os conflitos automaticamente

### configura  GitFlow

- git flow init (roda uma configuração de como vai trabalhar com branchs diferentes)
- git flow feature start {nome-da-feature}