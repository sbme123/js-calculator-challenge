// Get the calculator result to store a new value
let result = document.getElementById("result")

// get the value of the buttons 
buttons = document.querySelectorAll(".button")

// Create a variable to store the new value
let resultAnswer = ""



// Add an event listener and a for of loop to get the button value

for (item of buttons) {
    item.addEventListener("click", (event) => {
        buttonValue = event.target.innerText
        console.log(`The value of this button is ${buttonValue}`)
        result.innerHTML += buttonValue
        
        // if (buttonValue == "x") {
        //     buttonValue = "*"
        //     resultAnswer.innerHtml += buttonValue
        //     result.innerHtml = resultAnswer
        // }
    })
    
}

// if statement to use the button value for the calculations

// if (buttonValue == "x") {
//     buttonValue = "*"
//     resultAnswer += buttonValue
//     result.value - resultAnswer
// }

