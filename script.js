const roll = document.querySelector('.roll');
const winningNumber = 20;
const dice = document.querySelector('.dice');
const score = document.querySelector('.score')
const reset = document.querySelector('.reset')
const msg = document.querySelector('.msg')
const badNum = 1;
const diceMsg = 'You just rolled a # '
const totalmsg = 'You scored  '
const frame = document.getElementById('frame');
let total = 0;


roll.addEventListener('click', () => {
    let num = (Math.floor((Math.random() * 6) + 1))
    dice.innerHTML = `${diceMsg} ${num} Dice`;
    total += num;
    score.innerHTML = `${totalmsg} ${total} Points! so far, keep going...`;

    if (num === badNum) {
        msg.innerHTML = "You just rolled #1 Dice, you lose!     -       >>> hit Reset to start over <<<";
        msg.style.color = 'red';
        roll.style.visibility = 'hidden';
        frame.src = './img/dice1.png';
        
    };

    if (total >= winningNumber) {
        msg.innerHTML = "You scored over 20 points without hitting the #1, you won!!!     -       >>> hit Reset to start over <<<";
        roll.style.visibility = 'hidden';
    };


    if (num === 1) {
        frame.src = './img/dice1.png';
    } else if (num === 2) {
        frame.src = './img/dice2.png';
    } else if (num === 3) {
        frame.src = './img/dice3.png';
    } else if (num === 4) {
        frame.src = './img/dice4.png';
    } else if (num === 5) {
        frame.src = './img/dice5.png';
    } else {
        frame.src = './img/dice6.png';
        
    };

});



reset.addEventListener('click', () => {
    roll.style.visibility = 'visible';
    total = 0;
    tempNumerHolder = 0;
    dice.innerHTML = '0';
    score.innerHTML = '0';
    msg.innerHTML = '';
    frame.src = '/img/dice0.png '
});
