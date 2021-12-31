// Get the calculator result to store a new value
let result = document.getElementById("result")

// get the value of the buttons 
buttons = document.querySelectorAll("button")

// Create a variable to store the new value
let resultAnswer = ""

// Add an event listener and a for of loop to get the button value

for (item of buttons) {
    item.addEventListener("click", (event) => {
        console.log("Test")
    })
}