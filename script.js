var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button1 = document.getElementById('color1');
var button2 = document.getElementById('color2');
var span1 = document.querySelector('.random1');
var span2 = document.querySelector('.random2');

span1.textContent = color1.value;
span2.textContent = color2.value;

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ', ' + color2.value + ")";

    css.textContent = body.style.background + ';';
}


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();





function getRandomHexColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }  

button1.addEventListener('click', function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };
    span1.textContent = color;
})

button2.addEventListener('click', function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    span2.textContent = color;
})

setGradient();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

console.log(color1.value);
console.log(color2.value);


