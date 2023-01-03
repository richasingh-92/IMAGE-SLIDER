
let i = 0;
let j = 4;
const images = document.querySelectorAll(".image-container img");
const dots =  document.querySelectorAll(".dot-container button");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+1 );
}

function dot(num){
    images.forEach(function (image){
        image.classList.remove("active");
    });
    document.getElementById("content" + num).classList.add("active");
    i = num - 1;
    indicator(num);
}
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child("+ num +")").style.backgroundColor = "#8052ec";
}