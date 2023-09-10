let screen=document.getElementById("input");
let buttons=document.getElementsByClassName("btn");
let screenValue="";


function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}


for (let item = 0; item < buttons.length; item++) {
    buttons[item].addEventListener('click' , (e)=>{
        btnText=e.target.innerText;
        console.log(btnText);

        if(btnText=='x'){
            btnText = '*' ;
            screenValue+=btnText;
            screen.value = screenValue;
        }else if(btnText == 'AC'){
            screenValue ="";
            screen.value=screenValue;
        }else if(btnText== '='){
            screen.value=eval(screenValue);
        }else{
            screenValue+=btnText;
            screen.value=screenValue;
        }
    });
}

