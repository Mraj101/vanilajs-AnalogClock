let hour=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');

setInterval(()=>{
    let date=new Date();
    let hr=date.getHours()*30;
    let min=date.getMinutes()*6;
    let sec=date.getSeconds()*6;

    hour.style.transform=`rotatez(
        ${(hr)+(min/12)}deg)`
    minutes.style.transform=`rotatez(
        ${min}deg)`
    seconds.style.transform=`rotatez(
        ${sec}deg)`
});
