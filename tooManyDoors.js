const button = document.querySelector(".btn");
let question = document.querySelector(".question")
const door1 = document.querySelector(".door1");
const door2 = document.querySelector(".door2");
const door3 = document.querySelector(".door3");
const points = document.querySelector(".points");
pt = 0;

const questions = ["What came first the Egg[1] or the Chicken[2] or 'I dont care, it's chicken![3]",
    "How many licks does it take take to get to the center of a tootsie pop: 200[1], 300[2], 364[3]", "SpiderMan vs Hulk: SpiderMan[1] Hulk[2] They both get participation awards[3]", "what goes first in cereal: Milk[1], Cereal[2], Sorry I'm on a diet I cant eat that[3]", "How many bones are there in the human body: 206[1], 185[2], 208[3]"];

button.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * questions.length);
    question.innerText = questions[randomNumber];
})

door3.addEventListener("click", () => {
    if (question.innerText == "What came first the Egg[1] or the Chicken[2] or 'I dont care, it's chicken![3]" || question.innerText == "How many licks does it take take to get to the center of a tootsie pop: 200[1], 300[2], 364[3]" || question.innerText == "what goes first in cereal: Milk[1], Cereal[2], Sorry I'm on a diet I cant eat that[3]") {
        question.innerText = "Correct";
        questions.remove(questions[randomNumber]);
        points.innerText = pt += 1;
    } else {
        question.innerText = "Wrong";
    }
})
door2.addEventListener("click", () => {
    if (question.innerText == "SpiderMan vs Hulk: SpiderMan[1] Hulk[2] They both get participation awards[3]" || question.innerText == "what goes first in cereal: Milk[1], Cereal[2], Sorry I'm on a diet I cant eat that[3]") {
        question.innerText = "Correct";
        points.innerText = pt += 1;
    } else {
        question.innerText = "Wrong";
    }
})

door1.addEventListener("click", () => {
    if (question.innerText == "How many bones are there in the human body: 206[1], 185[2], 208[3]") {
        question.innerText = "Correct";
        points.innerText = pt += 1;
    } else {
        question.innerText = "Wrong";
    }
})

