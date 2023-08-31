var countDown = new Date("Jan 1, 2024 00:00:00").getTime();

var x = setInterval(function(){

    var now = new Date().getTime();
    var dist = countDown - now ;

    var days = Math.floor(dist/(1000*60*60*24));
    var hours = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((dist%(1000*60*60*24))/(1000*60));
    var seconds = Math.floor((dist%(1000*60*60*24))/(1000));


document.getElementById("display").innerHTML = days +"d "+ hours +"h " + minutes +"m " +seconds +"s "


if (dist<0){
    clearInterval(x);
    document.getElementById("display").innerHTML ="EXPIRED";
}

},1000);




// STOP WATCH
var hr=0;
var min=0;
var sec=0;
var count =0;

var timer = false;

function start(){
    timer= true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
     hr=0;
     min=0;
     sec=0;
     count =0;

     document.getElementById("hr").innerHTML=hr;
     document.getElementById("min").innerHTML=min;
     document.getElementById("sec").innerHTML=sec;
     document.getElementById("count").innerHTML=count;
}

function stopwatch(){
if(timer==true){
    count=count+1;

    
    
    if(count==99){
        sec=sec+1;
        count=0;
    }
    if(sec==59){
        min=min+1;
        sec=0;
    }
    if(min==59){
        hr=hr+1;
        min=0;
        sec=0;
    }
    document.getElementById("count").innerHTML=count;
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("min").innerHTML=min;
    document.getElementById("hr").innerHTML=hr;

    setTimeout("stopwatch()",10)
}
}
















