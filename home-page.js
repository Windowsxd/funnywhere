console.log('the funny isnt here!');
function gri(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var funnyt = document.getElementById('funnytext');
var increment = 1
var rotation = 1
const funnytext = [
  'please show me the funny',
  'i want the funny 😠',
  'come on show me the funny',
  'im asking u where the funny is',
  'please!!!!!',
  'so😭b',
  'mmmmmmmmmmmm',
  'show me the funny or else',
  'i wont do any harm just show me the funny',
  'wait im the one whos supposed to show the funny?',
  'stop clicking me!',
  'that hurts',
  'reeeeee'
]
function random(table) {
  return table[Math.floor(Math.random() * table.length)]
}
function increase() {
  if (increment != 0) {
    if (increment >= 100) {
      funnyt.innerText = 'here i am 😳'
      increment = 0
      rotation = 0
    } else {
      increment = increment * 1.2
      funnyt.innerText = random(funnytext);
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
