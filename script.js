/* Almost tearing my hear out trying to make if statements work. I've had much more success with a switch case. I struggled to find out how to */

// resultsOnScreen will display the final calculation to the user. 
const resultsOnScreen = document.getElementById("result-on-screen")

// result variable to store the final calculation before it is passed to the resultsOnScreen variable above 
// buttonsClicked variable to store what buttons the users has clicked as a string to later be changed to a number value. 
let result = ""
let buttonsClicked = ""

// Variable to select the calculator buttons 
let calcButton = document.querySelectorAll("button")

// Event listener to obtain the button values and pass this to the resultsOnScreen variable  

calcButton.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonValue = event.target.value
        resultsOnScreen.innerHTML += buttonValue
        console.log(`The button value is ${buttonValue}`)
        // calling the checkButtonClicked function to run the below switch case. 
        checkButtonClicked(buttonValue)
    })
    
});

/* ---- NEXT ---- */ 

// Switch case to check for the button values to append and then eval the results 
// function to call that checks the value of the button and actions the switch statement. 

let checkButtonClicked = (buttonValue) => {


    switch(buttonValue) {
        // Used eval to calculate the string of button values 
        case '=':
            let calculateSring = buttonsClicked
            result = eval(calculateSring)
            resultsOnScreen.innerHTML = result
            break;
        
        case 'AC':
            buttonsClicked = ""
            result = ""
            resultsOnScreen.innerHTML = result
            break;

        default: 
            buttonsClicked += buttonValue
    }

}









