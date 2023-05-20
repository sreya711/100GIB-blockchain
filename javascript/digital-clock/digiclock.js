function displayTime() {
  var today=new Date();  
  var h=today.getHours();  
  var m=today.getMinutes();  
  var s=today.getSeconds();
  h=h<10? "0"+h : h;
  m=m<10? "0"+m : m;
  s=s<10? "0"+s : s;
  document.getElementById("time").textContent = h+":"+m+":"+s;
   }
setInterval(displayTime, 1000);