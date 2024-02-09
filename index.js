const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Verifica se dois valores são iguais em valor e tipo.",
        "Verifica se dois valores são iguais apenas em valor.",
        "Verifica se dois valores são iguais apenas em tipo."
      ],
      correta: 0
    },
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Document Object Method",
        "Document Object Model",
        "Data Object Manipulation"
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "ver",
        "lat",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "unshift()",
        "concat()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses eventos ocorre quando um usuário clica em um elemento HTML?",
      respostas: [
        "mouseover",
        "click",
        "keypress"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'forEach' em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array.",
        "Adiciona um novo elemento ao início de um array.",
        "Remove o último elemento de um array."
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas estruturas de controle é usada para repetir um bloco de código até que uma condição seja verdadeira?",
      respostas: [
        "for",
        "while",
        "if"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Altera o conteúdo de um elemento HTML.",
        "Retorna o primeiro elemento que corresponde a um seletor CSS especificado.",
        "Adiciona um novo elemento ao final de um array."
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses métodos é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "concat()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'map' em JavaScript?",
      respostas: [
        "Adiciona um novo elemento ao início de um array.",
        "Itera sobre os elementos de um array e cria um novo array com base em uma função de mapeamento.",
        "Remove o último elemento de um array."
      ],
      correta: 1
    }
  ]
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector(`template`)
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length //lenght faz a somatória de todos a partir do 1
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //clonagem do conteúdo do templete (da primeira pergunta). O true serve para selecionar todos os nós que estão dentro de templete.
    quizItem.querySelector('h3').textContent = item.pergunta //modificando o h3
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+   perguntas.indexOf(item))// Adiciona o atributo name no HTML dentro de cada item do input, chamado de pergunta-0 ou 1... até 10. o perguntas.indexOf(item) pega o valor numérico e adiciona ao nome de cada input. Serve para manter somente as 3 opçoes selecionáveis para cada pergunta, antes dele só conseguia selecionar um radio para todas as perguntas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)//Muda o valor de cada um dos itens
      dt.querySelector('input').onchange = (event) => /*Aqui, estamos adicionando um manipulador de evento onchange para o elemento <input>. Isso significa que o código dentro da função será executado sempre que o valor desse input for alterado pelo usuário.*/ {
        const estaCorreta = event.target.value == item.correta /*Dentro do manipulador de evento onchange, estamos verificando se o valor atual do input (o índice da resposta selecionada pelo usuário) é igual ao índice da resposta correta (item.correta). Se forem iguais, estaCorreta será true; caso contrário, será false.*/ 
        
        corretas.delete(item)// Permite reavaliaçao do item caso a pessoa mude de ideia e marque outra opção, ele deleta a primeira informação para dar espaço a nova. 
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
      }
    
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()//usado para remover o "resposta A" que estava aparecendo como opção
  
    quiz.appendChild(quizItem)//Colocando as perguntas na tela para todas as 10 perguntas criadas
  }
  