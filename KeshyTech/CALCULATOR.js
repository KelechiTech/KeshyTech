// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
//The display() function accesses the DOM using the id of 
//the result and appends the value of the clicked button to the result
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
//The JavaScript eval() function evaluates an expression that you pass to it.
// It returns the result of that expression.
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}