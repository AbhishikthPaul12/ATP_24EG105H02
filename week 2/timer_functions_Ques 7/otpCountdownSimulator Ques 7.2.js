/*OTP Countdown Simulator (Console App)*/
console.log("OTP sent successfully")
let number=10
let intervalID=setInterval(()=>{
    console.log(number)
    number--//Countdown is shown with a gap of 1 second
    if(number===0){
        console.log("Resend OTP")//Resend OTP option is shown after the countdown expires
        clearInterval(intervalID)//The countdown stops
    }
},1000)
