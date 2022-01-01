// 1. Setting up the result displayed on the calculator, this will display the calculator result. 
const resultOnScreen = document.getElementById("result-on-screen")
/*
Testing that it's working 
resultOnScreen.innerHTML = 1
console.log(resultOnScreen.innerHTML)
*/

// 2. Adding a qeury selector for the buttons, everything with the button class
calcButtons = document.querySelectorAll(".button")
/* 
Testing that It's working 
ahh need to do the for loop thing! 
console.dir(buttons)
for (i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "red"
}
or use the new forEach callback fucntion. 
buttons.forEach(button => {
   button.style.backgroundColor = "red" 
}); 
*/

// 4. May need to add some sort of regex functionality for the symbols. 
// Create a variable for the symbol an check if it includes this within the calculation.  

const operatorButtonArr = ['AC', '±', '%', '÷', 'X', '-', '+', '='] 


// 5. Add an empty arrays that will changing depending on the user input 
// These need to work as a string to concatinate. Need to convert this back to a number value.  
let firstValue = ''
let secondValue = ''
let operatorButton = ''
let result = ''

// 6. Need to add a calculate function tha will take the number value as a number with a switch case or an if statement. 
// Let's try a simple sum caclulation 

const calculate = () => {
    // parseFloat to turn string into a number. 
    firstValue.parseFloat(firstValue)
    secondValue.parseFloat(secondValue)

    // Plus calculation 

    if (buttonValue === '+') {
        result = firstValue + secondValue
        resultOnScreen.innerHTML = result
        firstValue = result 
        secondValue = ''
    }

}

// 3. The resultOnScreen needs to change with the buttons, need to target the inner HTML of the resultOnScreen. 
// This can be done by using a for loop with the event listener function 

for (button of calcButtons) {
    button.addEventListener("click", (event) => {
        const buttonValue = event.target.innerText
        
        // Need to research how to seperate the operator buttons. 
        // Mabye set up the operator buttons as it's own variable to seperate fomr the buttonValue
        const operatorButtonValue = operatorButtonArr.includes(buttonValue)
        // if the user types an opperator first then we'll need to convert the opperator button 
        // to a first value. For example of the user his -1 to start. 
        if (firstValue && operatorButtonValue) {
            secondValue && calculate()
            operatorButton = buttonValue

        }  else if (!operatorButton) { 
            firstValue += buttonValue
        } else if (operatorButton) {
            secondValue += buttonValue
        }

        if (buttonValue !== '=') {
            resultOnScreen.innerHTML += buttonValue
        }

        if (buttonValue === "AC") {
            resultOnScreen.innerHTML = ""
        }
        
    })
}


 










