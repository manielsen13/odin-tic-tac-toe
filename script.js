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




//creat board module
const board = (() => {
    const spaces = [];

    (function (spaces) {
        for (let i = 0; i<9; i++) {
            spaces.push(spaceFactory());
        }
    })();

    const markSpace = (spaceNumber, symbol) => {
        spaces[spaceNumber].makeMark(symbol);
    }


    const checkForWin = () => {
        //make a check for win function

    }
    
    
  })();


  

  


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