let menu = document.querySelector('#menu');
let navibar = document.querySelector('.navigation');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navibar.classList.toggle('active');
}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navibar.classList.remove('active');
}
//page loader function
function load(){
    document.querySelector('.load-container').classList.add('fade-out');}
  function fadeOut(){
    setInterval(load, 3000);
  }
  window.onload = fadeOut;

//
let bill = 0;
let item1 = 0;
let item2 = 0;
let item3 = 0;
let item4 = 0;
let item5 = 0;
let item6 = 0;
let item7 = 0;
let item8 = 0;
let item9 = 0;
let orangePrice = document.getElementById('item1');
let kwalityPrice = document.getElementById('item2');
let butterPrice = document.getElementById('item3');
let realicePrice = document.getElementById('item4');
let strawPrice = document.getElementById('item5');
let crunchPrice = document.getElementById('item6');
let badamPrice = document.getElementById('item7');
let chockyPrice = document.getElementById('item8');
let kulfiPrice = document.getElementById('item9');

const orange=()=> {
    bill += 100;
    item1 += 100;
    orangePrice.innerHTML = "Orange, Strawberry ----------- " + item1;
    console.log(bill);

}
const kwality=()=> {
    bill += 70;
    item2 += 70;
    kwalityPrice.innerHTML = "Kwality walls ---------- " + item2;
    console.log(bill);
}

const butterscotch=()=> {
    bill += 80;
    item3 += 80;
    butterPrice.innerHTML = "ButterScotch -------- " + item3;
    console.log(bill);
}

const realice=() =>{
    bill += 250;
    item4 += 250;
    realicePrice.innerHTML = "Real ice cream --------------- " + item4;
    console.log(bill);
}

const strawberry=()=> {
    bill += 120;
    item5 += 120;
    strawPrice.innerHTML = "Strawberry ------------ " + item5;
    console.log(bill);
}
const crunch=()=> {
    bill += 40;
    item6 += 40;
    crunchPrice.innerHTML = "Cookie Crunch ------------ " + item6;
    console.log(bill);
}
const badam=()=> {
    bill += 30;
    item7 += 30;
    badamPrice.innerHTML = "Pista Badam ------------ " + item7;
    console.log(bill);
}
const chocolate=()=> {
    bill += 150;
    item8 += 150;
    chockyPrice.innerHTML = "Chocolate Cup ice ------------ " + item8;
    console.log(bill);
}
const kulfi=()=> {
    bill += 50;
    item9 += 50;
    kulfiPrice.innerHTML = "Kulfi ------------ " + item9;
    console.log(bill);
}

const Buy=()=> {
    let total = document.getElementById('total');
    total.innerHTML = "YOUR TOTAL BILL--------------- " + bill;
} 
