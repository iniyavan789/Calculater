
const display =document.querySelector(".display");
const buttons =document.querySelectorAll("button");
const specialchars = ["%", "*", "/", "-", "+", "="]
let output ="";


//Define function to calculate based on button clicked.
const calculate =(btnvalue)=>{

    if(btnvalue === "=" && btnvalue !== ""){
        //If output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%","/100"))

    }else if(btnvalue === "AC"){
        output = ""

    }else if(btnvalue == "DEL"){
        //IfDEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0,-1);

    }else{
        //If output is empty and button is specialchars then return.
        if(output === "" && specialchars.includes(btnvalue)) return;
        output += btnvalue;
    }
    
    display.value = output;
};

//Add event listener to buttons ,calls calculate() on click.
buttons.forEach((button)=>{
    //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});