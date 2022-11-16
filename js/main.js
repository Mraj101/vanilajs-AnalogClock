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
/* simplified rotating calculation:
*the hour stick takes 12 hours to complete 1 full rotation which is 360 degrees
*so 360/12= 30              [30 degrees in 1 hour]

{but how many degree in 1 minutes?????}

if 60 minutes is 30 degrees [as mentioned above,1 hour i.e 6 minutes]    movement than 1 minutes will be 60/30= .5     [0.5 degree movement]

*1 hour is 60 minutes
   - 1 minutes or 60 seconds when the stick of second moves 360 degrees
   - so 360/60=6 degrees ,   [6 degrees in 1 seconds]

so we get   1 hours = the hours stick moves 30 degrees  
            1 minutes= the hours stick moves 1/2 degrees
            
            1 minutes= the minutes stick moves 6 degrees
            1 seconds= the second stick moves 6 degrees.
*/
