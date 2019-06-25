document.getElementById('dalej').addEventListener('click',pogoda);


// var x;
var x;
var d;
var h;
var min;
var temperatura;
var clouds;



 
function test(x, d, h, min, temperatura, clouds)
{
   document.getElementById('data').innerHTML+="<div class='data1'>"+x+"."+d+"</div><br>";
   document.getElementById('god').innerHTML+="<div class='godz1'>"+h+":"+min+"</div><br>";
   document.getElementById('temp').innerHTML+="<div class='temp1'>"+temperatura+"°C"+"</div><br>";
   if( clouds <= 30)
   {
      document.getElementById('zachmurzenie').innerHTML+= "<div class='zach1'><i class='fas fa-sun'></i></div><br>";
   }
   else if( clouds > 30 && clouds <= 70)
   {
      document.getElementById('zachmurzenie').innerHTML+= "<div class='zach1'><i class='fas fa-cloud-sun'></i></div><br>";
   }
   else
   {
      document.getElementById('zachmurzenie').innerHTML+= "<div class='zach1'><i class='fas fa-cloud'></i></div><br>";
   }
}



function pogoda()
{
   document.getElementById('data').innerHTML ="<h2>Data:</h2><br>";
   document.getElementById('god').innerHTML ="<h2>Godzina:</h2><br>";
   document.getElementById('temp').innerHTML ="<h2>Temperatura:</h2><br>";
   document.getElementById('zachmurzenie').innerHTML ="<h2>Zachmurzenie:</h2><br>";
   
   var city = document.getElementById('valuecity').value;
 


   fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=ae76d0efed32d9f29c4d54a5738b80ca').then(function(response){
      return response.json();
   })
   .then(function(jsonData){
      jsonData.list.forEach(function(item){
         var odp = item.dt_txt.split(" ", 2);
         var godzinka = odp[1].split(":", 3);
         var datka = odp[0].split("-", 3);

         test(datka[2], datka[1], godzinka[0], godzinka[1], Math.round(item.main.temp-273), item.clouds.all);
         console.log(odp[0]);
         console.log(odp[1]);
         console.log(Math.round(item.main.temp-273));
         item.weather.forEach(function(ele)
         {
            console.log(ele.description);
         });
         
      });
   })
}

// var napis="Jacek Tomek Marcin";
// var odp = napis.split(' ', 3);
// console.log(odp[1]);
