 
 function updateClock(){

 const now= new Date();
 let hours=now.getHours();
 const meridiem= hours >= 12 ? "pm" : "Am";
 hours= hours % 12 || 12;
 hours= hours.toString().padStart(2,0);
 const minutes=now.getMinutes().toString().padStart(2,0);
 const Seconds=now.getSeconds().toString().padStart(2,0);
 const timeString=`${hours}:${minutes}:${Seconds}${meridiem}`;
 document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock,1000);
