const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('counter-form');
const dateEL =document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdowntitle ='';
let countdownDate = '';
let countdownvalue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//set Date input Min with Today's date
const today = new Date().toISOString().split('T')[0];
// in this way you didant accsses before today
 dateEL.setAttribute('min',today);


//Populate countdoen / complete UI
function updateDOM(){
  const now = new Date().getTime();
  const distance = countdownValue - now;
 console.log('distance:', distance);


const days = Math.floor(distance / day);
const hours = Math.floor((distance % day) / hour);
const minutes = Math.floor((distance % hour) / minute);
const seconds = Math.floor((distance % minute) / second);
console.log(days, hours, minutes, seconds)


// Hide Input
inputContainer.hidden = true;
// show countdown
countdownEl.hidden = false;
}

 //Take values from Input
 function updateCountdown(e) {
   //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    countdowntitle = e.srcElement[0].value;
    countdownDate = e.srcElement[0].value;
    console.log(countdowntitle, countdownDate);
    // Get number of current Date, updateDOM
    countdownvalue = new Date(countdownDate).getTime();
    console.log ('Countdown value:', countdownvalue)
    updateDOM();
 }


 //event listeners
  countdownForm.addEventListener('submit', updateCountdown);