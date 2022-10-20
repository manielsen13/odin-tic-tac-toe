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
    const markSpace = (symbol) => {
        mark = symbol;
    }

    return {mark, isFilled, markSpace}
}




//creat board module
function board(){
    const spaces = [9];
    
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