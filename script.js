/* Almost tearing my hear out trying to make if statements work. I've had much more success with a switch case. I struggled to find out how to */

// resultsOnScreen will display the final calculation to the user. 
const resultsOnScreen = document.getElementById("result-on-screen")

// Variable to select the calculator buttons 
let calcButton = document.querySelectorAll("button")

// Event listener to obtain the button values 

calcButton.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonValue = event.target.value
        resultsOnScreen.innerHTML = buttonValue
    })
    
});


 










