

let click = document.getElementsByClassName("pressDown");

let ranNum = Math.floor(Math.random() * 6);



/* functio that sends text to id score at the moment for texting */
document.addEventListener('click', ()=> {
    document.getElementById("score").innerHTML = ranNum; /* <- next add a random num gen here */  
    let diceCount = document.getElementById("msgArea").innerHTML = ranNum;

})

/* create a function to pick the corresponding dice image depening on the random number */




/* display the dice and the value */




/* add a function to add the value of the consecutives rolled dices, update the total and display */






/* create a funtion to check if the total value reaches 20, if so the player wins,
and if at any point the user get dice number 1 loses */


/* add a reset button to star over */
