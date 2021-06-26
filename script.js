
const elham=document.getElementById('ham');
const elhead=document.getElementById("header");
const eloverlay=document.querySelector(".overlay");
const elsfade=document.querySelectorAll(".has-fade");
const body=document.querySelector("body");

elham.onclick=function(){
    console.log("Click hamburger");
    if(elhead.classList.contains('open')){
        body.classList.remove("noscroll");
        elhead.classList.remove('open');
        elsfade.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{
        body.classList.add("noscroll");
        elhead.classList.add('open');
        elsfade.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });    
    }
};
