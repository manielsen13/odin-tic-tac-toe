//create space factory
const spaceFactory = () => {

    const mark = "";

    const isFilled = () => {
        if (mark != "") {
            return true;
        } else {
            return false;
        }
    }
    const makeMark = (symbol) => {
        mark = symbol;
    }

    return {mark, isFilled, makeMark};
}

//create board module
const board = (() => {
    const spaces = [];

    (function () {
        for (let i = 0; i<9; i++) {
            spaces.push(spaceFactory());
        }
    })();

    const markSpace = (spaceNumber, symbol) => {
        spaces[spaceNumber].makeMark(symbol);
    }

    return {spaces, markSpace};   
  })();

//checks if game is over and returns whether it is or not
const isGameOver = (board) => {
    
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


//make player factory
const playerFactory = (playerName, playerSymbol) => {

    const playerSymbol = playerSymbol;
    const playerName = playerName;

    const makeMove = (spaceNumber) => {
        board.markSpace(spaceNumber, playerSymbol);

    }

    return {playerSymbol, playerName, makeMove};
}




  //number spaces via index 0 thru 8



//create game module
