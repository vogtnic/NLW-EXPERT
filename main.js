const questions = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Atribuição de valor",
        "Comparação de valores, sem considerar tipos",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 'texto';",
        "var myVar = true;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de dados binários",
        "Um modelo de objetos para interagir com documentos HTML",
        "Um sistema de encriptação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener'?",
      respostas: [
        "Adicionar elementos visuais à página",
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Criar uma nova variável",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de estilização",
        "Um formato de dados para intercâmbio",
        "Um método para declaração de funções",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma diferença, ambos são intercambiáveis",
        "let é usado para valores constantes, enquanto const é usado para variáveis mutáveis",
        "const é usado para valores constantes, enquanto let é usado para variáveis mutáveis",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Uma função que é passada como argumento para outra função e é executada posteriormente",
        "Uma função que chama a si mesma recursivamente",
      ],
      correta: 1
    },
    {
      pergunta: "Como é feita a iteração em um array em JavaScript?",
      respostas: [
        "Usando um loop 'for/in'",
        "Usando um loop 'while'",
        "Usando um loop 'for'",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar um elemento HTML na hierarquia do DOM",
        "Elevar a declaração de uma variável ou função para o topo de seu escopo antes da execução do código",
        "Elevar a velocidade de execução do código JavaScript",
      ],
      correta: 1
    },
  ];
  
  // selecionando a tag com id QUIZ
  const quiz = document.querySelector('#quiz')
  // selecionando a tag template
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = questions.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // laço de repetição
  for(const item of questions) {
    // selecionando o conteúdo do template e clonando todos os items dentro
    const quizItem = template.content.cloneNode(true)
    // mudando o titulo do html com os itens do array
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
  
      // colocando uma função para cada input ser único e poder responder todas as questões
      dt.querySelector('input').setAttribute('name', 'pergunta-' + questions.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      // verificar qual resposta foi selecionada
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
      
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // tirando o 'resposta A' que tem no HTML
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }