//create space factory
const spaceFactory = () => {

    let  mark = "N/A";

    let isFilled = () => {
        console.log(mark);
        if (mark === "N/A") {
            console.log("it's not filled")
            return false;
            
        } else {
            console.log("it is filled")
            return true;
        }
    }

    let makeMark = (theSymbol) => {
        console.log("I MADE A MARK")
        console.log(theSymbol)
        mark = theSymbol;
        console.log(mark);

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
            changeTurns();
        }
        
//if this doesn't work, need to check if player symbols work
        
        //board.markSpace(spaceNumber, activePlayer().playerSymbol);
       

        
    }

    return {activePlayer, makeMove, reset}

})();



//checks if game is over and returns whether it is or not
const isGameOver = () => {
    
    const spaces = board.spaces;

    if (spaces[0].isFilled()) {
        if (spaces[0].mark == spaces[1].mark && spaces[1].mark == spaces[2].mark) {
            return true;
        }
        if (spaces[0].mark == spaces[3].mark && spaces[3].mark == spaces[6].mark) {
            return true;
        }
        if (spaces[0].mark == spaces[4].mark && spaces[4].mark == spaces[8].mark) {
            return true;
        }
    }
    if (spaces[4].isFilled()) {
        if (spaces[4].mark == spaces[3].mark && spaces[3].mark == spaces[5].mark) {
            return true;
        }
        if (spaces[4].mark == spaces[1].mark && spaces[1].mark == spaces[7].mark) {
            return true;
        }
        if (spaces[4].mark == spaces[2].mark && spaces[2].mark == spaces[6].mark) {
            return true;
        }
    }
    if (spaces[8].isFilled()) {
        if (spaces[6].mark == spaces[7].mark && spaces[7].mark == spaces[8].mark) {
            return true;
        }
        if (spaces[2].mark == spaces[5].mark && spaces[5].mark == spaces[8].mark) {
            return true;
        }
    }
    //make sure to check for a tie as well
    return false;
}

  //number spaces via index 0 thru 8

//config spaceDivs
const configSpaceDiv = (mySpaceDiv, spaceNum) => {

    mySpaceDiv.classList.add("space");
    mySpaceDiv.setAttribute("space-number", spaceNum);





    //make do things when pressed.
    mySpaceDiv.addEventListener("click", function () {
        this.style.backgroundColor = "red";
        const spaceNum = this.getAttribute("space-number")

        gameMaster.makeMove(spaceNum);

        this.textContent = board.spaces[spaceNum].getMark();


        //mark the space of the div



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

renderBoard();