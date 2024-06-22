let addPlayerInput = document.querySelector('#addPlayerInput');
let addPlayerButton = document.querySelector('#addPlayerButton');
let playersContainer = document.querySelector('#playersContainer');

let addPlayer = playerToAdd => { //this function handles adding players to the game
    let newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.innerHTML =                     
    `<span>${playerToAdd}</span>
    <input type='text' class='scoreToAdd' inputmode='numeric' placeholder='0'>
    <button class='addScoreButton'>+</button>
    <span>0</span><hr>`
    playersContainer.appendChild(newPlayer);
}

let calcNeeded = totalScore => { //this function calculates how much each player needs to win balls deep round
    let players = document.querySelectorAll('.player');
    players.forEach(z =>{
        if(z.lastElementChild.previousElementSibling.innerText == totalScore){ return }
        let scoreNeeded = (totalScore - parseInt(z.lastElementChild.previousElementSibling.innerText) + 1);
        let needed = document.createElement('div');
        needed.style.color = 'crimson';
        needed.innerText = `${scoreNeeded} NEEDED TO WIN`;
        z.insertBefore(needed, z.lastElementChild);
        /* z.appendChild(needed); */
    })
}

addPlayerButton.addEventListener('click', () => {
    let playerToAdd = addPlayerInput.value;
    addPlayerInput.value = '';
    addPlayer(playerToAdd);
})

playersContainer.addEventListener('click', x => {
    if(x.target.classList.contains('addScoreButton')){
        let scoreToAdd = parseInt(x.target.previousElementSibling.value);
        let currentScore = parseInt(x.target.nextElementSibling.innerText);
        let totalScore = currentScore + scoreToAdd;

        x.target.previousElementSibling.value = '';

        x.target.nextElementSibling.innerText = totalScore;
        if(totalScore >= 10000){
            alert('BALLS DEEP ROUND HAS COMMENCED')
            calcNeeded(totalScore);
        }
    }
})