const display  = document.querySelector(".display");
const minus    = document.getElementById("-")
const plus     = document.getElementById("+")
const multiple = document.getElementById("*")
const separate = document.getElementById("/")
const clear    = document.getElementById("C")
const zero     = document.getElementById("0")



function toDisplay(num){
    display.innerHTML += num;
}



function clearDisplay(){
    display.innerHTML = "  "
    plus.disabled     = false;
    separate.disabled = false;
    multiple.disabled = false;
    minus.disabled    = false;
}

function plustoDisplay(num){
    display.innerHTML += num;
    plus.disabled     = true
    separate.disabled = true
    multiple.disabled = true
    minus.disabled    = true
}

function minustoDisplay(num){
    display.innerHTML += num;
    plus.disabled     = true
    separate.disabled = true
    multiple.disabled = true
    minus.disabled    = true
}

function multipletoDisplay(num){
    display.innerHTML += num;
    plus.disabled     = true
    separate.disabled = true
    multiple.disabled = true
    minus.disabled    = true
}

function separatetoDisplay(num){
    display.innerHTML += num;
    plus.disabled     = true
    separate.disabled = true
    multiple.disabled = true
    minus.disabled    = true
}



function fromDisplay(){
    arithmetic(display.innerHTML);
}


function arithmetic(expression){

    
    if(expression?.includes("+")){

        display.innerHTML = Number(expression.split("+")[0]) + Number(expression.split("+")[1]);

    }else if(expression?.includes("-")){

        display.innerHTML = Number(expression.split("-")[0]) - Number(expression.split("-")[1]);

    }else if(expression?.includes("*")){

        display.innerHTML = Number(expression.split("*")[0]) * Number(expression.split("*")[1]);

    }else if(expression?.includes("/")){

        display.innerHTML = Number(expression.split("/")[0]) / Number(expression.split("/")[1]);

    }

    plus.disabled     = false;
    separate.disabled = false;
    multiple.disabled = false;
    minus.disabled    = false;
}










