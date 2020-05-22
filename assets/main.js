const rollButton = document.querySelector('#roll-button')

const showAllRollsButton = document.querySelector('#show-rolls-button')

const textInput = document.querySelector('#input')

const totalRolls = document.querySelector('#total-rolls')

const orderList = document.querySelector('#all-rows-order-list')

const resetButton = document.querySelector('#reset-button')

const dieRolls = []


let i = 0

rollButton.addEventListener('click', function(){
   
    let userInputValue = textInput.value

   while(i < userInputValue) {

    randomDiceNumber = Math.floor(Math.random() * 6) + 1

    dieRolls.push(randomDiceNumber);

    totalRolls.innerHTML = dieRolls.reduce(function(a,b){

        return a + b;
    })
     i++
    }
 })

 showAllRollsButton.addEventListener('click', function(){
     for(i = 0; i < dieRolls.length; i++) {
         let currentDieValue = dieRolls[i];

         let li = document.createElement('li');

         li.appendChild(document.createTextNode(currentDieValue));
         
         orderList.appendChild(li);
     }
 })

 resetButton.addEventListener('click', function(){

     document.querySelector('#total-rolls').textContent = '0';

     dieRolls.length = '0';

     orderList.innerHTML = '';

 })


 /* LESSONS LEARNED THIS PROJECT:

 - .REDUCE ~ OUTPUTS THE TOTAL VALUE OR SUM OF AN ARRAY

 - SPECIFY THE SPECIFIC VALUE OR INDEX IN AN ARRAY USING [i]

 - CREATING AN ELEMENT VIA JAVASCRIPT USING .createElement()

 - appendCHILD & createTextNode ~ RESEARCH MORE ON BOTH TOPICS */