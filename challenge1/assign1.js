let message;
//function to prompt user to enter students marks
function comradesMarks() {
    const marks= parseInt(window.prompt("Enter Comrades Marks!"), 10);
    const result = document.getElementById("result");
//If statement to convert marks to grade upon entry
if(marks <= 100 && marks >= 79) {
    message = "Grade A";
}else if(marks >= 60 && marks < 79) {
    message = "Grade B";
}else if(marks >= 49 && marks < 59) {
    message = "Grade C";
}else if(marks >= 40 && marks < 49) {
    message = "Grade D";
}else if(marks <= 40){
    message = "Grade E";
}else{
    message = console.log("Invalid marks entered");
};
result.textContent = message;
return message;
};