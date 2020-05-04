var time;
var quizMinutes = 7;
var quizSeconds = 0;
var today = new Date();
function timeStarted() {
    quizTime();
    document.getElementById("starttime").innerHTML = "Quiz Starts at :"+"<br>"+ today.getHours() + " : " + today.getMinutes()+((today.getHours() > 12) ? " PM " : " AM ");
     }
function quizTime() {
    if (parseInt(quizSeconds) > 0) {
        quizSeconds = parseInt(quizSeconds) - 1;
        document.getElementById("showtime").innerHTML = "Time Remaining :"+"<br>" + quizMinutes+" Mins : " + quizSeconds+" Secs";
        time = setTimeout("quizTime()", 1000);
    }
    else {
        if (parseInt(quizSeconds) == 0) {
            quizMinutes = parseInt(quizMinutes) - 1;
            if (parseInt(quizMinutes) == 0) {
                clearTimeout(time);
            let confirmation = confirm('TIME UP!!'+'\n'+'Proceed To Submit');
                if(confirmation == true){
                    alert('Congratulations'+'\n'+'Quiz was sucessfully Submitted');
                }else{
                    alert('Quiz submission Failed');
                }
               document.location.href = "welcome.html";
            }
            else {
                quizSeconds = 60;
                document.getElementById("showtime").innerHTML = "Time Remaining :"+"\n" + quizMinutes + " Mins :" + quizSeconds + " Secs";
                time = setTimeout("quizTime()", 1000);
            }
        }
       
    }
}





