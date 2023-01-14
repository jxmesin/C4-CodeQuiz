let currentQuiz = 0
let score = 0

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEl = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


const quizData = [
    { 
        question:"Which of the following methods is used to access HTML elements using JScript?" ,
        a: "getElementbyId",
        b: "getElementByClassName",
        c: "Both A and B",
        d: "None of the above",
        correct: "c",
    },
    { 
        question:"Which of the following methods can be used to display data in some form using Javascript?" ,
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        correct: "d",
    },
    { 
        question:"Which function is used to serialize an object into a JSON string in Javascript" ,
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
        correct: "a",
    },
    { 
        question: "Which of the following is not a Javascript framework?",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "Cassandra",
        correct: "d",
    },
];


loadQuiz()


function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer 
    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly<h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

