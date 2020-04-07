console.log('the funny isnt here!');
function gri(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var funnyt = document.getElementById('funnytext');
var increment = 1
var rotation = 1
function increase() {
  if (increment != 0) {
    if (increment >= 100) {
      funnyt.innerText = 'here i am :😳:'
      increment = 0
      rotation = 0
    } else {
      increment = increment * 1.2
    }
  }
}
function funny() {
  funnyt.style.left = gri(-increment, increment);
  funnyt.style.top = (window.innerHeight/2)-50 + gri(-increment, increment);
  funnyt.style.transform = 'rotate('+gri(-rotation, rotation)+'deg)'
}

(function lop (i) {          
   setTimeout(function() {   
      funny()             
      if (--i) lop(i);
   }, 10)
})(Infinity);  
