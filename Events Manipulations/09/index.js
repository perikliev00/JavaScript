let days=document.getElementsByClassName('days');
let hours=document.getElementsByClassName('hours');
let minutes=document.getElementsByClassName('minutes');
let seconds=document.getElementsByClassName('seconds');
days[1].addEventListener('click',function() {
    hours[0].value=Number(days[0].value)*24;
    minutes[0].value=Number(hours[0].value)*60;
    seconds[0].value=Number(minutes[0].value)*60;
})
hours[1].addEventListener('click',function() {
    days[0].value=Math.floor(Number(hours[0].value)/24);
    minutes[0].value=Number(hours[0].value)*60;
    seconds[0].value=Number(minutes[0].value)*60;
})
minutes[1].addEventListener('click',function() {
    hours[0].value=Math.floor(Number(minutes[0].value)/60);
    days[0].value=Math.floor(Number(hours[0].value)/24);
    seconds[0].value=Number(minutes[0].value)*60;
})
seconds[1].addEventListener('click', function() {
    minutes[0].value=Math.floor(Number(seconds[0].value)/60);
    hours[0].value=Math.floor(Number(minutes[0].value)/60);
    days[0].value=Math.floor(Number(hours[0].value)/24);
})