
//initialising a variable name data

let Price = document.getElementsByClassName("Price");
var data1 = 0;
var data2 = 0;
var data3 = 0;

var total1 = 0;
var total2 = 0;
var total3 = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting1").innerText = data1;
document.getElementById("counting2").innerText = data2;
document.getElementById("counting3").innerText = data3;

//creation of increment function
function increment1() {
    data1 = data1 + 1;
    document.getElementById("counting1").innerText = data1;
    total1 = (data1) * 7999;

    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}
//creation of decrement function
function decrement1() {
    if (data1 <= 0) {
        alert("Please Add Some Quantity");
    } else {
        data1 = data1 - 1;
    }
    total1 = (data1) * 7999;

    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}

//creation of increment function
function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting2").innerText = data2;
    total2 = (data2) * 13999;
    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;

}
//creation of decrement function
function decrement2() {
    if (data2 <= 0) {
        alert("Please Add Some Quantity");
    } else {
        data2 = data2 - 1;
    }
    document.getElementById("counting2").innerText = data2;
    total2 = (data2) * 13999;

    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}
//creation of increment function
function increment3() {

    data3 = data3 + 1;
    document.getElementById("counting3").innerText = data3;
    total3 = (data3) * 16499;

    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}
//creation of decrement function
function decrement3() {
    if (data3 <= 0) {
        alert("Please Add Some Quantity");
    } else {
        data3 = data3 - 1;
    }
    document.getElementById("counting3").innerText = data3;
    total3 = (data3) * 16499;

    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}

function delet1() {
    data1 = data1 * 0;
    document.getElementById("counting1").innerText = data1;
    total1 = 0;
    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}
function delet2() {
    data2 = data2 * 0;
    document.getElementById("counting2").innerText = data2;
    total2 = 0;
    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}
function delet3() {
    data3 = data3 * 0;
    document.getElementById("counting3").innerText = data3;
    total3 = 0;
    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerText = subtotal;
}

function checkout() {
    if (data1 == 0 && data2 == 0 && data3 == 0) {
        alert('Please Add Atleast One Product To Proceed')
    }
    else {
        document.querySelector('.slide1').innerHTML = `
    <h1>Thank You For Shopping With Us</h1>
    `;
    }
}