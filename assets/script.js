var questions = [
    {
        prompt: "Which of the following methods is used to access HTML elements using JScript?\n(a) getElementbyId()\n(b) getElementByClassName()\n(c) Both A and B\n(d) None of the above",
        answer: "b"
    },
    {
        prompt: "Which of the following methods can be used to display data in some form using Javascript?\n(a) document.write()\n(b) console.log()\n(c) window.alert()\n(d) All of the above",
        answer: "d"
    },
    {
        prompt: "Which function is used to serialize an object into a JSON string in Javascript?\n(a) stringify()\n(b) parse()\n(c) convert()\n(d) None of the above",
        answer: "a"
    },
    {
        prompt: "Which of the following methods is used to access HTML elements using Javascript?\n(a) getElementbyId()\n(b) getElementByClassName()\n(c) Both A and B\n(d) None of the above",
        answer: "b"
    },
    {
        prompt: "Which of the following is not a Javascript framework?\n(a) Node\n(b) Vue\n(c) React\n(d) Cassandra",
        answer: "d"
    },
]

var score = 0;

for( i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    }   else {
        alert("Wrong!");
    }
} 

alert("You got " + score + "/" +questions.length);
