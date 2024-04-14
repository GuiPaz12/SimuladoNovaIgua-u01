// Mock das questões
const questions = [
    {
        question: "Qual é o objetivo principal do Estatuto do Magistério?",
        options: ["Proporcionar qualidade de ensino", "Regular a carreira dos professores", "Promover a educação nacional democrática"],
        answer: "Proporcionar qualidade de ensino"
    },
    {
        question: "Quais são os princípios e diretrizes do Magistério Público Municipal?",
        options: ["Gestão do Sistema Educacional", "Resultados da educação escolar", "Aperfeiçoamento profissional"],
        answer: "Gestão do Sistema Educacional"
    },
    {
        question: "Qual é a carga horária semanal para um Professor II com regência em turmas do primeiro segmento do Ensino Fundamental?",
        options: ["20 horas", "25 horas", "30 horas"],
        answer: "20 horas"
    },
    {
        question: "Quais são os direitos especiais dos membros do Magistério de acordo com o Estatuto?",
        options: ["Liberdade na escolha do processo didático", "Participação em cursos de aperfeiçoamento", "Assistir o cônjuge em caso de doença"],
        answer: "Liberdade na escolha do processo didático"
    },
    {
        question: "Quais são os deveres especiais dos servidores do Magistério?",
        options: ["Participar das atividades de educação no Município", "Alterar o horário de trabalho sem autorização", "Sair com os alunos para manifestações sem autorização"],
        answer: "Participar das atividades de educação no Município"
    },
    // Mais 15 questões adicionadas abaixo
    {
        question: "Quais são os requisitos mínimos para a investidura no cargo de Professor de Educação Infantil?",
        options: ["Ensino médio completo", "Licenciatura em Pedagogia", "Curso Técnico em Magistério"],
        answer: "Licenciatura em Pedagogia"
    },
    {
        question: "Qual é a duração mínima do estágio probatório para os membros do Magistério Público Municipal?",
        options: ["6 meses", "1 ano", "2 anos"],
        answer: "2 anos"
    },
    {
        question: "Quais são os casos em que um servidor do Magistério Público Municipal pode ser afastado das funções?",
        options: ["Apenas por motivo de saúde", "Por motivos disciplinares, de saúde ou para exercer mandato eletivo", "Por decisão unilateral do servidor"],
        answer: "Por motivos disciplinares, de saúde ou para exercer mandato eletivo"
    },
    {
        question: "Qual é o intervalo mínimo para a concessão de férias aos servidores do Magistério?",
        options: ["10 dias", "15 dias", "30 dias"],
        answer: "30 dias"
    },
    {
        question: "Quais são os requisitos para a dispensa do estágio probatório?",
        options: ["Avaliação favorável do desempenho", "Tempo mínimo de serviço e avaliação favorável do desempenho", "Tempo mínimo de serviço"],
        answer: "Tempo mínimo de serviço e avaliação favorável do desempenho"
    },
    {
        question: "Quais são as vedações impostas aos membros do Magistério em relação a atividades político-partidárias?",
        options: ["Participar de atividades político-partidárias", "Exercer cargos em partidos políticos", "Filiar-se a partidos políticos"],
        answer: "Filiar-se a partidos políticos"
    },
    {
        question: "Qual é o critério para a distribuição dos recursos financeiros destinados à remuneração dos profissionais do Magistério?",
        options: ["Tempo de serviço", "Formação acadêmica", "Nível de escolaridade"],
        answer: "Tempo de serviço"
    },
    {
        question: "Quais são as sanções previstas para os servidores do Magistério que descumprirem suas obrigações funcionais?",
        options: ["Advertência escrita", "Suspensão", "Demissão"],
        answer: "Demissão"
    },
    {
        question: "Qual é a finalidade do processo de avaliação do desempenho do Magistério?",
        options: ["Promoção dos professores", "Melhoria do ensino", "Incentivo financeiro"],
        answer: "Incentivo financeiro"
    },
    {
        question: "Quais são as ações de incentivo à valorização dos membros do Magistério?",
        options: ["Aumento de carga horária", "Participação em concursos internos", "Capacitação e aperfeiçoamento profissional"],
        answer: "Capacitação e aperfeiçoamento profissional"
    },
    {
        question: "Qual é o papel do Conselho Municipal de Educação em relação ao Magistério Público Municipal?",
        options: ["Definir a política educacional", "Fiscalizar o cumprimento do Estatuto", "Julgar as questões disciplinares dos professores"],
        answer: "Fiscalizar o cumprimento do Estatuto"
    },
    {
        question: "Quais são as hipóteses em que um servidor do Magistério pode ser cedido para exercer função em outro órgão?",
        options: ["Por solicitação do servidor", "Por necessidade do órgão cessionário", "Por decisão unilateral da administração"],
        answer: "Por necessidade do órgão cessionário"
    }
];

const main = document.querySelector('main');
const submitBtn = document.getElementById('submitBtn');

// Função para renderizar as questões na página
function renderQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `Questão ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        
        q.options.forEach(option => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionLabel.prepend(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });
        
        questionDiv.appendChild(optionsList);
        main.appendChild(questionDiv);
    });
}

renderQuestions();

// Função para verificar respostas ao clicar no botão de enviar
submitBtn.addEventListener('click', () => {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === q.answer) {
                score++;
            } else {
                // Destacar a resposta errada em vermelho
                selectedOption.parentElement.style.color = 'red';
                
                // Encontrar e destacar a resposta correta em verde
                const correctOption = document.querySelector(`input[value="${q.answer}"]`);
                correctOption.parentElement.style.color = 'green';
            }
        }
    });
    alert(`Você acertou ${score} de ${questions.length} questões.`);
});
