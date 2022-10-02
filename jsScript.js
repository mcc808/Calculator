function Calculator(){
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:")); 
    mult(num1,num2);
    div(num1,num2);
    add(num1,num2);
    sub(num1,num2);  
}

function mult(a,b){   
    let total = a * b;
    console.log(total);
    document.getElementById("multRes").innerHTML=`<p> ${a} * ${b} = ${total}</p>`;
}

function div(a,b){
    let total = a / b;
    console.log(total);
    document.getElementById("divRes").innerHTML=`<p> ${a} / ${b} = ${total}</p>`;
}

function add(a,b){
    let total = a + b;
    console.log(total);
    document.getElementById("addRes").innerHTML=`<p> ${a} + ${b} = ${total}</p>`;
}

function sub(a,b){
    let total = a - b;
    console.log(total);
    document.getElementById("subRes").innerHTML=`<p> ${a} - ${b} = ${total}</p>`;
}

