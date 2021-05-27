//UC -14 Demonstrate Async Nature of Java Script
function showTime() {
    const date = new Date();
    return date.getHours()+ "Hrs :" + date.getMinutes() +" Mins :"+ date.getSeconds()+ "Seconds";
}

function showSessionExpire() {
    console.log("Activity-B : Your session expired At = "+showTime());
}
console.log("Activity-A : Triggering Activity-B At = "+showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A : Triggered Activity-B At = "+ showTime() +" will execute after 5 seconds.");