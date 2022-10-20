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

    return false;
}







  


//create user module
function user() {

}

//create computer/AI module
function computerPlayer {

}

//create game module


//factory example
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };

//module example
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476