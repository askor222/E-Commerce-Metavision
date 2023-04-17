
/*window.addEventListener("load", function () {
  console.log("el contenido ha cargado");
  var imagenes = [];
  imagenes[0] = "img/imagen4";
  imagenes[1] = "img/imagen5";
  imagenes[2] = "img/imagen6";
  imagenes[3] = "img/imagen7";
var indiceImagenes = 0;
var tiempo = 2000;
  function cambiarImagenes()
  document.slider.src = imagenes[indiceimagenes];
   if (indiceimagenes<3) {
    indiceimagenes++;
   } else {
    indiceimagenes = 0;
   }
   cambiarimagenes();
   setInterval(cambiarimagenes,tiempo);
});
*/




document.querySelectorAll(".segunda").forEach((e)); {    
e.addEventListener("click", ()=> {
 // let principal = document.getElementById("principal");
  //principal.setAttribute("src", "imag/js.pnp");
  //principal.src = "img/js.pnp";
  console.log("esto es lo que hace"+e.id.valueof);
  document.getElementById("princapl").src =document.getElementById(e.id).src;
});
};  
















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

