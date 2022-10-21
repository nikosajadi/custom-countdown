const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('counter-form');
const dateEL =document.getElementById('date-picker');

let countdowntitle ='';
let countdownDate = '';




//set Date input Min with Today's date
const today = new Date().toISOString().split('T')[0];
// in this way you didant accsses before today
 dateEL.setAttribute('min',today);


 //Take values from Input
 function updateCountdown(e) {
   //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    countdowntitle = e.srcElement[0].value;
    countdownDate = e.srcElement[0].value;
    console.log(countdowntitle, countdownDate);
 }


 //event listeners

 countdownForm.addEventListener('submit', updateCountdown);