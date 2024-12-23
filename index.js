// 19/12/24
// Show the entered number is even or odd
let number = prompt("Please Enter the number to show if it is even or odd");
alert(number % 2 === 0 ?"Entered number is even" : "Entered number is odd")

//comparision of two numbers

let firstNumber=parseInt(prompt("Enter First Number to compare two integers"));
let secondNumber = parseInt(prompt("Enter Second Number"));
if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
    alert("please enter valid integers only")
}
else{
let comparision = firstNumber>secondNumber?"First number is greater than second number": firstNumber < secondNumber ? "First number is smaller than the second number" :"both numbers are equal"

alert(comparision)
}