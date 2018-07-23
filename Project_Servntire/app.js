var questions=[
  {prompt: "In which year kerala was formed as Indian state?\n(a) 1956\n\(b) 1947\n(c) 1950",
answer: "a"
},
{
prompt: "Which one is recognized as the state animal of Kerala?\n(a) Tiger\n\(b) Cow\n(c) Elephant",
answer: "c"
},
{prompt: "Total number of districts in Kerala?\n(a) 14\n\(b) 13\n(c) 11",
answer: "a"
},
{prompt: "Which one is the highest populated district in Kerala?\n(a) Idukki\n\(b) Malappuram\n(c) Kottayam",
answer: "b"
},
{prompt: "Which one is the highest populated city in Kerala?\n(a) Thrissur\n\(b) Kochi\n(c) Trivandrum",
answer: "c"
}

]


var score=0
for(var i=0; i<questions.length; i++){
var response = window.prompt(questions[i].prompt);
if(response == questions[i].answer){
score++;
alert("correct!");
}
else
{alert("wrong!")
}
}
var perc=(score/questions.length)*100
if(perc > 40){
alert("Congrats!! you got "  + score + "/" + questions.length + " :)");
}
else {
alert("Sorry!! you got "  + score + "/" + questions.length + " :(");
}
