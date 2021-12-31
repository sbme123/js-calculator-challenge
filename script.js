// Seleting the results id. 
let resultOnScreen = document.getElementById("result")
console.dir(resultOnScreen)

// Select all buttons
button = document.querySelectorAll(".button")
button.value = button.innerText
console.log(button)
// convert button innerText to a value 











// // Get the calculator result to store a new value
// let resultOnScreen = document.getElementById("result")

// // get the value of the buttons 
// buttons = document.querySelectorAll(".button")

// // Create a variable to store the new value
// let resultAnswer = ""



// // Add an event listener and a for of loop to get the button value

// for (item of buttons) {
//     item.addEventListener("click", (event) => {
//         // getting the value of each button
//         buttonValue = event.target.value
//         console.log(`The value of this button is ${buttonValue}`)
//         resultOnScreen.innerText = buttonValue.value
//         console.log(resultOnScreen)

//     // if statement to perform multiple calc operations starting with the delete button
//         if (buttonValue == "AC") {
//             resultOnScreen.innerText = ""
//         // } else if (buttonValue == "*") {
//         //     resultAnswer += buttonValue 
//         //     result.value = resultAnswer
//             // Using the JS eval function to calculate the resultAnswer varliable 
//         } else if (buttonValue = "=") {
//             resultOnScreen = eval(resultAnswer)
//         }   else {
            
//         }
//     })
    
// }
