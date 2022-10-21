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



//set Date input Min with Today's date
const today = new Date().toISOString().split('T')[0];
// in this way you didant accsses before today
 dateEL.setAttribute('min',today);


//Populate countdoen / complete UI
function updateDOM(){
 const now = new Date().getTime();
 const distance = countdownvalue - now;
 console.log('distance' , distance);
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
    console.log ('Countdown value', countdownvalue)
    updateDom();
 }


 //event listeners

 countdownForm.addEventListener('submit', updateCountdown);