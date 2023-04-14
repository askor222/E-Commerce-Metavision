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



const myCheckbox = document.getElementById("myCheckbox");
myCheckbox.addEventListener("click", function() {
  if (myCheckbox.checked) {
    // Checkbox está marcado
    console.log("El checkbox está marcado");
  } else {
    // Checkbox no está marcado
    console.log("El checkbox no está marcado");
  }
});











const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownOptions = dropdownContent.querySelectorAll('a');

dropdownOptions.forEach((option) => {
  option.addEventListener('click', () => {
    dropdownButton.textContent = option.textContent;
    dropdownContent.classList.remove('show');
  });
});

dropdownButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});





const emailInput = document.getElementById('email-input');
const sendButton = document.getElementById('send-button');

function sendEmail() {
  const emailAddress = emailInput.value;
  // código para enviar el correo electrónico
  console.log(`Enviando correo electrónico a: ${emailAddress}`);
}

emailInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendEmail();
  }
});

sendButton.addEventListener('click', sendEmail);

