// function countDown(){

//     setInterval(function(){

// let date = new Date("august 14,2024,12:00:00").getTime();
// let currentDate =new Date ().getTime();
// let sub =date-currentDate;

// let days =Math.floor( sub / (1000*60*60*24));
// console.log(days);

// let hr = Math.floor( sub %(1000*60*60*24)/(1000*60*60));
// console.log(hr);

// let min = Math.floor( sub %(1000*60*60)/(1000*60));
// console.log(min);

// let sec = Math.floor( sub %(1000*60)/(1000));
// console.log(sec);

// document.getElementById("day").innerHTML=days+"days";
// document.getElementById("hr").innerHTML=hr +'hr';
// document.getElementById("min").innerHTML=min + "min";
// document.getElementById("sec").innerHTML=sec +"sec";

//     },1000)
// }
// countDown();

function countDown() {
  setInterval(function () {
    let date = new Date("august 14 ,2024,12:00:00");
    let currentDate = new Date().getTime();
    let subtract = date - currentDate;

    let days = Math.floor(subtract / (1000 * 60 * 60 * 24));
    document.getElementById("day").innerHTML = days + "<br>" + "days";
    let hr = Math.floor((subtract % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("hr").innerHTML = hr + "<br>" + "hours";

    let min = Math.floor((subtract % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("min").innerHTML = min + "<br>" + "minutes";

    let sec = Math.floor((subtract % (1000 * 60)) / 1000);
    document.getElementById("sec").innerHTML = sec + "<br>" + "seconds";
  }, 1000);
}
// countDown();
