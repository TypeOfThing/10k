//adding players
let addPlayerButton = document.querySelector('#addPlayerButton');
let playerToAdd = document.querySelector('#playerToAdd').value;

let players = document.querySelector('#players');

let addScoreButton = document.querySelector('.addScore');

addPlayerButton.addEventListener('click',() => {
        playerToAdd = document.querySelector('#playerToAdd').value;
        players.innerHTML +=
        `<div>
        <span>${playerToAdd}</span>
        <input type='text' id='scoreToAdd' name='scoreToAdd'>
        <button class='addScore' id='addScoreTo${playerToAdd}'>+</button>
        <span>0</span>
        </div>`
})

players.addEventListener('click',(Event) => {
    if(Event.target.classList.contains('addScore')){
        let scoreToAdd = parseInt(Event.target.previousElementSibling.value);
        let score = parseInt(Event.target.nextElementSibling.innerHTML);
        if(!isNaN(scoreToAdd)){
        Event.target.nextElementSibling.innerHTML = scoreToAdd + score;
        }else{
            console.log('error: please enter a number');
        }
    }
})






