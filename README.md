# Super Trunfo

## Habilidades

Neste projeto, usei habilidades de :

* Ler o estado de um componente e usá-lo para alterar o que exibimos no browser

* Inicializar um componente, dando a ele um estado pré-definido

* Atualizar o estado de um componente

* Capturar eventos utilizando a sintaxe do React

* Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`

* Transmitir informações de componentes filhos para componentes pais via callbacks

---

## Funcionalidades

Neste projeto foi desenvolvido um jogo no estilo Super Trunfo, Ao utilizar essa aplicação a pessoa usuaria é capaz de :

* Criar um baralho, com tema livre;

* Adicionar e remover uma carta do baralho;

* Visualizar todas as cartas que foram adicionadas ao baralho;

* Jogar com o baralho criado.

---

## Desenvovimento

Foi desenvolvido uma aplicação em React com manipulação de estados em classes.Essa aplicação simulá um jogo de Super Trunfo, desde a criação das cartas do seu baralho até a funcionalidade de jogar.

Na renderização das cartas, a aplicção possui três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

O tema do baralho é **livre**, então explore a sua criatividade!

---

## Instruções para o uso da aplicação

1. Clone o repositório

* `git clone git@github.com:tryber/sd-020-a-project-tryunfo.git`.
* Entre na pasta do repositório que você acabou de clonar:
  * `cd sd-020-a-project-tryunfo`

2. Instale as dependências e inicialize o projeto

* Instale as dependências:
  * `npm install`
* Inicialize o projeto:
  * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

---

## Informações sobre o Super Trunfo

O Super Trunfo é um jogo de cartas que ficou muito popular no Brasil entre as décadas de 80 e 90, mas que faz bastante sucesso até hoje. Suas regras são bastante simples, por isso ele é considerado um jogo fácil de jogar. Apesar de ter regras simples, cada baralho  de Super Trunfo pode ter um tema diferente, o que o torna um jogo bastante divertido.

Originalmente, o jogo de Super Trunfo é formado por um baralho de 32 cartas. Cada carta representa um item relacionado ao tema do jogo. Em cada carta também existe uma lista com características daquele item e cada característica possui um valor numérico.

Para começar o jogo, as cartas devem ser embaralhadas e divididas igualmente para cada participante. Em cada rodada cada pessoa pega somente a primeira carta do seu monte. Na primeira rodada uma pessoa escolhe qual característica quer comparar com as cartas das outras pessoas que estão jogando. Ganha quem tiver o maior número nessa característica. A pessoa que ganhou a rodada recebe as cartas das outras pessoas e escolhe qual característica quer comparar na próxima rodada. O jogo termina quando alguma pessoa tiver todas as cartas do baralho.

Em cada baralho existe uma (e somente uma) carta Super Trunfo. Essa carta ganha de todas as outras cartas do baralho, independentemente dos valores das características.

O jogo de Super Trunfo pode ser feito com praticamente qualquer tema, mas tradicionalmente os mais comuns são: carros, países, cidades ou animais.
