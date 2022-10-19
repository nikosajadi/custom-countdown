const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('counter-form');
const dateEL =document.getElementById('date-picker');

//set Date input Min with Today's date
const today = new Date().toISOString().split('T')[0];
 dateEL.setAttribute('min',today);
