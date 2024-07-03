let aPoint;
//function to suspend licence when speed limit is exceeded
function checkLimit() {
    let currentPoint = 0;
    const speed = parseInt(window.prompt("Enter speed!"), 10);
    const result = document.getElementById("result");
//if statements to check limit
if(speed <= 70 ) {
    aPoint = "Ok";
}else {
    currentPoint = Math.floor((speed - 70) / 5);
    if(currentPoint >= 12) {
        aPoint = "License suspended";
    }else {
        aPoint = `${currentPoint} Point(s)`;
    }
}
result.textContent = aPoint;
return aPoint;
}