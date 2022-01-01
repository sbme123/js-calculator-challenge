// Setting up the result displayed on the calculator, this will display the calculator result. 

const resultOnScreen = document.getElementById("result-on-screen")
// Testing that it's working 
// resultOnScreen.innerHTML = 1
// console.log(resultOnScreen.innerHTML)

// Adding a qeury selector for the buttons, everything with the button class
buttons = document.querySelectorAll(".button")
// Testing that It's working 
// ahh need to do the for loop thing! 
console.dir(buttons)
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].style.backgroundColor = "red"
// }
// or use the new forEach callback fucntion. 
// buttons.forEach(button => {
//    button.style.backgroundColor = "red" 
// });


