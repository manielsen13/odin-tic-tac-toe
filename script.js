//create space factory
const spaceFactory = () => {

    let  mark = "N/A";

    let isFilled = () => {
        if (mark === "N/A") {
            return false;
            
        } else {
            return true;
        }
    }

    let makeMark = (theSymbol) => {
        mark = theSymbol;

    }

    let getMark = () => {
        return mark;
    }

    return {isFilled, makeMark, getMark};
}
//THE SYMBOL IS UNDEFINED AS I PLUG IT IN
//SO TO ANSWER MY QUESTION--WHY IS MARK NOW UNDEFINED?





//create board module
const board = (() => {

    const spaces = [];

    (function () {
        for (let i = 0; i<9; i++) {
            let newSpace = spaceFactory();
            spaces.push(newSpace);
        }
    })();

    return {spaces};   
  })();

//make player factory
const playerFactory = (pName, pSymbol) => {

    const playerSymbol = pSymbol;
    const playerName = pName;

    return {playerSymbol, playerName};
}




//create game module
const gameMaster = (() => {

    let gameOver = false;
    let turnCounter = 1;
    const player1 = playerFactory("Player 1", "X");
    const player2 = playerFactory("Player 2", "O");

    const changeTurns = () => {
        turnCounter++;
    }

    const reset = () => {
        window.location.reload();
    }

    const activePlayer = () => {
        if (turnCounter % 2 == 1) {
            return player1;
        }
        else {
            return player2;
        }
    }

    //this function is called when one of the square are clicked.
    const makeMove = (spaceNumber) => {
        if (!board.spaces[spaceNumber].isFilled()) {
            board.spaces[spaceNumber].makeMark(activePlayer().playerSymbol);
            if (isGameOver() == "Win") {
                console.log(activePlayer().playerName + " is the Winner!");
                gameMaster.gameOver = true;
            }
            if (isGameOver() == "Draw") {
                console.log("Game is a DRAW!");
                gameMaster.gameOver = true;
            }
            changeTurns();
        }
        
//if this doesn't work, need to check if player symbols work
        
        //board.markSpace(spaceNumber, activePlayer().playerSymbol);
       

        
    }

    return {activePlayer, makeMove, reset, gameOver}

})();



//checks if game is over and returns whether it is or not
//make sure to check for ties as well here.
const isGameOver = () => {
    
    const spaces = board.spaces;

    if (spaces[0].isFilled()) {
        if (spaces[0].getMark() == spaces[1].getMark() && spaces[1].getMark() == spaces[2].getMark()) {
            return "Win";
        }
        if (spaces[0].getMark() == spaces[3].getMark() && spaces[3].getMark() == spaces[6].getMark()) {
            return "Win";
        }
        if (spaces[0].getMark() == spaces[4].getMark() && spaces[4].getMark() == spaces[8].getMark()) {
            return "Win";
        }
    }
    if (spaces[4].isFilled()) {
        if (spaces[4].getMark() == spaces[3].getMark() && spaces[3].getMark() == spaces[5].getMark()) {
            return "Win";
        }
        if (spaces[4].getMark() == spaces[1].getMark() && spaces[1].getMark() == spaces[7].getMark()) {
            return "Win";
        }
        if (spaces[4].getMark() == spaces[2].getMark() && spaces[2].getMark() == spaces[6].getMark()) {
            return "Win";
        }
    }
    if (spaces[8].isFilled()) {
        if (spaces[6].getMark() == spaces[7].getMark() && spaces[7].getMark() == spaces[8].getMark()) {
            return "Win";
        }
        if (spaces[2].getMark() == spaces[5].getMark() && spaces[5].getMark() == spaces[8].getMark()) {
            return "Win";
        }
    }


    //check for game not being over
    for (let i = 0; i < 9; i++) {
        if (spaces[i].isFilled() == false) {
            return "Not Over";
        }
    }
    

    //return draw if all spaces are taken up and no one is declared the winner.
    return "Draw";

}

  //number spaces via index 0 thru 8

//config spaceDivs
const configSpaceDiv = (mySpaceDiv, spaceNum) => {

    mySpaceDiv.classList.add("space");
    mySpaceDiv.setAttribute("space-number", spaceNum);





    //make do things when pressed.
    mySpaceDiv.addEventListener("click", function () {

        //only works if the game isn't over
        if (gameMaster.gameOver == false) {
            this.style.backgroundColor = "whitesmoke";
            this.style.border = "solid 2px black"
            const spaceNum = this.getAttribute("space-number")
    
            gameMaster.makeMove(spaceNum);
    
            this.textContent = board.spaces[spaceNum].getMark();
        }
    })


}

//make and render HTML elements
const renderBoard = () => {
    let boardDiv = document.getElementById("board");

    for (let i=0; i<9; i++) {
        let spaceDiv = document.createElement("div");
        
        configSpaceDiv(spaceDiv, i);
        boardDiv.appendChild(spaceDiv);
    }
}


//create a home screen where players can enter their names before the game starts.

//create function to display a winning screen or title thing upon winning
//display a button to start over(reset the page)
//make sure to listen for ties as well

renderBoard();