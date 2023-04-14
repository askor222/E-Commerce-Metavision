const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];


const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-Right");

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0,5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";   
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0,5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionFirst);
        slider.style.marginLeft = "-100%";   
    }, 500);
}


btnRight.addEventListener("clic", function(){
    Next();
});
btnLeft.addEventListener("clic", function(){
    prev();
});
setInterval(function(){
    Next();

},5000);
 slider = document.querySelector("#slider");
 sliderSection = document.querySelectorAll(".slider__section");
 sliderSectionLast = sliderSection[sliderSection.length-1];


 btnLeft = document.querySelector("#btn-left");
 btnRight = document.querySelector("#btn-Right");

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0,5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";   
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0,5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionFirst);
        slider.style.marginLeft = "-100%";   
    }, 500);
}


btnRight.addEventListener("clic", function(){
    Next();
});
btnLeft.addEventListener("clic", function(){
    prev();
});
setInterval(function(){
    Next();

},5000);