//adding players
let addPlayerButton = document.querySelector('#addPlayerButton');
let playerToAdd = document.querySelector('#playerToAdd');

let players = document.querySelector('#players');

let addScoreButton = document.querySelector('.addScore');

addPlayerButton.addEventListener('click',() => {
        addThisPlayer = playerToAdd.value;
        players.innerHTML +=
        `<div>
        <span>${addThisPlayer}</span>
        <input type='text' id='scoreToAdd' name='scoreToAdd'>
        <button class='addScore' id='addScoreTo${addThisPlayer}'>+</button>
        <span class='totalScore'>0</span>
        </div>`;
        playerToAdd.value = '';
})

players.addEventListener('click',(Event) => {
    if(Event.target.classList.contains('addScore')){
        let scoreToAdd = parseInt(Event.target.previousElementSibling.value);
        let score = parseInt(Event.target.nextElementSibling.innerHTML);
        if(!isNaN(scoreToAdd)){
        Event.target.nextElementSibling.innerHTML = scoreToAdd + score;
        }
        Event.target.previousElementSibling.value = '';
        if(parseInt(Event.target.nextElementSibling.innerHTML) >= 10000){
            alert('BALLS DEEP ROUND HAS COMMENCED!');
            let winningScore = Event.target.nextElementSibling.innerHTML;
            let spanz = document.querySelectorAll('.totalScore');
            spanz.forEach(span => {
                if(span.innerText == winningScore){
                    return;
                }
                let neededToWin = winningScore - parseInt(span.innerText) + 1;
                span.innerHTML = `${span.innerText}. <span class = 'needs'>NEEDS ${neededToWin} TO WIN.</span>`;
            })
        }
    }
});

playerToAdd.addEventListener('keydown', pressed => {
    if(pressed.key == 'Enter'){
        pressed.preventDefault();
        addPlayerButton.click();
    }
});






