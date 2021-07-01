const sm=1;
let time=sm*60;
const countdown=document.getElementById('countdown');

setInterval(updatecount , 1000);

function updatecount(){
    const min=Math.floor(time/60);
    
    let seconds =time%60;
    
    seconds=seconds<10 ? '0' +seconds : seconds;
   

    countdown.innerHTML=`${min}:${seconds}`;
    time--;
    if(min== 00 && seconds==00){
        time=time+1;
        alert("your time up");
        if(true){
        window.location.replace("http://127.0.0.1:5500/stopwatch_p7/index2.html");
        }
    }
}