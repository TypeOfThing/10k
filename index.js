let addPlayerInput = document.querySelector('#addPlayerInput');
let addPlayerButton = document.querySelector('#addPlayerButton');
let playersContainer = document.querySelector('#playersContainer');
let winningScore = 9999;
let ballsDeep = false;
let colorSelected = 'White';

let addPlayer = playerToAdd => { 
    let newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.innerHTML =                     
    `<span class='playerName' style='color:${colorSelected};'>${playerToAdd}</span>
    <input type='text' class='scoreToAdd' inputmode='numeric' placeholder='0'>
    <button class='addScoreButton'>+</button>
    <span>0</span>`
    playersContainer.appendChild(newPlayer);
    document.querySelector('#dropdown').firstElementChild.innerText = 'Color'
    colorSelected = 'White';
}

let calcNeeded = () => { 
    let players = document.querySelectorAll('.player');
    players.forEach(z => {
        if(z.nextElementSibling){
            if(z.nextElementSibling.classList.contains('needed')){
                z.nextElementSibling.remove()
            }
        }
        if(z.lastElementChild.innerText != winningScore){
        let scoreNeeded = (winningScore - parseInt(z.lastElementChild.innerText) + 50);
        let needed = document.createElement('div');
        needed.classList.add('needed');
        needed.style.color = 'crimson';
        needed.innerText = `${scoreNeeded} NEEDED TO WIN`;
        z.insertAdjacentElement('afterend', needed);
    }})
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
        if(totalScore > winningScore){
            winningScore = totalScore;
            if(!ballsDeep){
            alert('BALLS DEEP ROUND HAS COMMENCED')
            ballsDeep = true;
            }
            calcNeeded(totalScore);
        }
    }
})

//code below controls selecting a color
let dropdown = document.querySelector('#dropdown')
let ul = document.querySelector('ul')

dropdown.addEventListener('click', z => {
  if(z.target.classList.contains('clickable')){
      ul.classList.toggle('block');
  }
})

ul.addEventListener('click', x => {
  dropdown.firstElementChild.innerText = x.target.innerText;
  ul.classList.toggle('block');
  colorSelected = dropdown.firstElementChild.innerText;
})