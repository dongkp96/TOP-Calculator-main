const numbers = [];

const inputBar = document.querySelector(".numbers-bar");

//operators
function add(a, b){
    return a + b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a, b){
    if(b===0){
        return "Error, cannot divide by 0";
    }else{
        return a/b;
    }
}

//functions for operations and clearing
function clear(array){
    inputBar.value = "";
    array.length = 0;
    
}

function inputNumber(event){
    inputBar.value += event.target.textContent;
}


//eventListener assignments 
let numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) =>{
    button.addEventListener("click", inputNumber);
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function(){
    clear(numbers);
});
