const hourElement=document.getElementById("hour")
const minuteElement=document.getElementById("minutes")
const secondElement=document.getElementById("second")
const ampmEle=document.getElementById("ampm")

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ap="AM";

    if(h>12){
        h=h-12;
        ap="PM";
    }
    hourElement.innerText=h;
    minuteElement.innerText=m;
    secondElement.innerText=s;
    ampmEle.innerText=ap;
    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();

