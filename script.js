const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

let countdownTitle = '';
let countdownDate = '';
let countdownValue =  new Date();
let countdownActive;
// it is a global variable
let savedCountdown;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//set Date input Min with Today's date
const today = new Date().toISOString().split('T')[0];
// in this way you didant accsses before today
dateEl.setAttribute('min',today);


//
function updateDOM(){
  countdownActive = setInterval(()=>{
    const now = new Date().getTime();
  const distance = countdownValue - now;
 console.log('distance:', distance);


const days = Math.floor(distance / day);
const hours = Math.floor((distance % day) / hour);
const minutes = Math.floor((distance % hour) / minute);
const seconds = Math.floor((distance % minute) / second);
console.log(days, hours, minutes, seconds);

// Hide Input
inputContainer.hidden = true;

// if the countdown has ended , show complete 
if (distance <0) {
  countdownEl.hidden = true
  clearInterval(countdownActive);
  completeElInfo.textContent = `${countdownElTitle} finished on ${countdownDate}`;
  completeEl.hidden = false;
} else {
  // Else, show the countdown in progress
   countdownElTitle.textContent = `${countdownElTitle}`;
  timeElements [0].textContent = `${days}`;
  timeElements [1].textContent = `${hours}`;
  timeElements [2].textContent = `${minutes}`;
  timeElements [3].textContent = `${seconds}`;
  completeEl.hidden= true;
  // show countdown
  countdownEl.hidden = false;
 }
  // second: 1000
  } , second);
  }

   //Take values from Input
function updateCountdown(e) {
  //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
   e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
       // we are creating the object now 
    savedCountdown = {
      // key and value are 
      title: countdownTitle,
      date: countdownDate,
    }; 
    console.log(savedCountdown);
    // here JSON will be JavaScript value to a JSON string
   localStorage.setItem('countdown', JSON.stringify(savedCountdown));
     
  // check if no date enterd
  if (countdownDate === ''){
      alert ('Please select a date');
    
  } else {
      // Get number of current Date, updateDOM
      countdownValue = new Date(countdownDate).getTime();
      console.log ('Countdown value:', countdownValue)
      updateDOM();
  }
}


//Reset all Value
function reset(){
//  Hide countdown, show inputContainer
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
//stop the countdown
  clearInterval(countdownActive);
//  Reset value
  countdownTitle = '';
  countdownDate = '';
  localStorage.removeItem('countdown');
}

function resetorePreviousCountdown() {
  // get countdown from localStorage if available
  if (localStorage.getItem('countdown')){
    inputContainer.hidden = true;
    savedCountdown =  JSON.parse (localStorage.getItem('countdown'));
    countdownTitle = savedCountdown.title;
    countdownDate =  savedCountdown.date;
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}


 //event listeners
  countdownForm.addEventListener('submit', updateCountdown);
  countdownBtn.addEventListener ('click', reset);
  completeBtn.addEventListener ('click', reset);

  // on Load, check localStorage
  resetorePreviousCountdown();