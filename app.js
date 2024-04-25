let date = new Date();

let hours1 = document.querySelector('#hours');
let minutes1 = document.querySelector('#minutes');
let seconds1 = document.querySelector('#seconds');

let zero = time => time.toString().length < 2 ? `0${time}`: time;

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

hours1.innerHTML = zero(hours);
minutes1.innerHTML = zero(minutes);
seconds1.innerHTML = zero(seconds);     


setInterval(() =>{
    let date = new Date();
    seconds1.innerHTML = zero(date.getSeconds());
    if(date.getSeconds() == 0)
    minutes1.innerHTML = zero(date.getMinutes());
if(date.getHours() == 0)
    hours1.innerHTML = zero(date.getHours());
},1000)



