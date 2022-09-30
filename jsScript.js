function multiplyThree(){   

    let input = prompt("Please enter a number to multiply by 3");
    let total = input * 3 
    console.log(total);
    document.write("The result is: " + total);
}

multiplyThree();



function Calculator(){
    console.log("Calculating");
    let num1 = Number(prompt("Enter num1:"));
    let num2 = Number(prompt("Enter num2:"));
    sum(num1,num2);
}

function sum(a,b){
    let total = a + b;
    document.getElementById("sumRes").innerHTML=`<p> ${a} + ${b} = ${total}</p>`;
}