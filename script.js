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

const OperatorButtonArr = ['AC', '±', '%', '÷', 'X', '-', '+', '='] 


// 5. Add an empty arrays that will changing depending on the user input 
// These need to work as a string to concatinate. Need to convert this back to a number value.  
let firstValue = ''
let secondValue = ''
let operatorButton = ''
let result = ''

// 6. Need to add a calculate function tha will take the number value as a number with a switch case or an if statement. 
// Let's try a simple sum caclulation 

const calculate = () => {
    firstValue.parseFloat(firstValue)
    secondValue.parseFloat(secondValue)

    if (buttonValue === '+') {
        result = firstValue = secondValue
        resultOnScreen.innerHTML = result
    }

}



// 3. The resultOnScreen needs to change with the buttons, need to target the inner HTML of the resultOnScreen. 
// This can be done by using a for loop with the event listener function 

for (button of calcButtons) {
    button.addEventListener("click", (event) => {
        const buttonValue = event.target.innerText
        resultOnScreen.innerText += buttonValue
        // Need to research how to seperate the symboles. 
    })
}


 










