
function StartGame() {
    
        var timerCount = 100
        var timerEl = document.querySelector("#timer")

        timerEl.textContent = timerCount

        var timer = window.setInterval(function() {
            timerCount--;
            timerEl.textContent = timerCount

            if(timerCount === 0) {
                clearInterval(timer)
                alert("Quiz Failed, Try Again")
            }
        }, 1000);

        var questions = [
            { 
                q: "Your CSS belongs in which criteria?",
                choices: ["in-line HTML", "seperate style sheet", "Javascript functions"],
                a:"B" 
            }, 
            { 
                q: "What does CSS stand for?", 
                choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"], 
                a:"C"
            },
            { 
                q: "Inside which HTML element do we put the JavaScript?", 
                choices: ["<javascript>", "<script>", "<js>"], 
                a:"B"
            },
            { 
                q: "Where is the correct place to insert a JavaScript?", 
                choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body>"], 
                a:"A"
            }]

            
        var questionsPointer = 0

        var question = document.querySelector("#question")
        var optionA = document.querySelector("#optionA")
        var optionB = document.querySelector("#optionB")
        var optionC = document.querySelector("#optionC")


        function setQuestions() {

            if (questionsPointer === questions.length) {
                clearInterval(timer)
                alert("You're Done With " + timerCount + " Time left!")
                return
            }
            question.textContent = questions[questionsPointer].q
            optionA.textContent = questions[questionsPointer].choices[0]
            optionB.textContent = questions[questionsPointer].choices[1]
            optionC.textContent = questions[questionsPointer].choices[2]
        }

        setQuestions()

        optionA.addEventListener("click", function () {
            if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
                console.log("This is correct")
                questionsPointer++
                setQuestions()
            }  else {
                alert("Incorrect Answer, Try Again")
                console.log("this is wrong")
                timerCount -= 10
            }
        })

        optionB.addEventListener("click", function () {
            if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
                console.log("This is correct")
                questionsPointer++
                setQuestions()
            }  else {
                alert("Incorrect Answer, Try Again")
                console.log("this is wrong")
                timerCount -= 10
            }
        })

        optionC.addEventListener("click", function () {
            if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
                console.log("This is correct")
                questionsPointer++
                setQuestions()
            }  else {
                alert("Incorrect Answer, Try Again")
                console.log("this is wrong")
                timerCount -= 10
            }
        })
}

document.querySelector("#StartGame").addEventListener("click", StartGame)