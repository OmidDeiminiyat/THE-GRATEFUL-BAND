// script.js
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const circles = document.querySelectorAll('.circle');
  
    circles.forEach(circle => {
      circle.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        
        images.forEach(img => img.classList.remove('active'));
        circles.forEach(circ => circ.classList.remove('active'));
        
        images[index].classList.add('active');
        this.classList.add('active');
      });
    });
  });
  


  const menuOne = document.getElementById('ico');
  const menuTwo = document.getElementById('mobileOpened');
  const mainSection = document.getElementById('main');
  const changeIcone = document.getElementById('icoTwo');
  function openBar() {

    menuOne.style.display = 'none';
    menuTwo.style.display = 'flex';
    changeIcone.style.display = 'block';
    mainSection.style.opacity = '0.3';
  }

  function closeBar() {
    changeIcone.style.display = 'none';
    menuOne.style.display = 'flex';
    menuTwo.style.display = 'none';
    mainSection.style.opacity = '1';
  }


  // Email validation
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function submitForm() {
   const myForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const Thanks = document.getElementById('thankYou');
    console.log(emailInput);
    if (!validateEmail(emailInput)) {
      emailError.style.display = 'block';
    } else {
      emailError.style.display = 'none';
      myForm.style.display = 'none';
      Thanks.style.display='block';
    }
  }



  const imageContainer = document.getElementById('puImages');

  let arrayImages = [
    `<div id="im1" class="carousel-image img1 active" ></div>`,
    `<div id="im2" class="carousel-image img2 active" ></div>`,
    `<div id="im3" class="carousel-image img3 active"></div>`,
    `<div id="im4" class="carousel-image img4 active"></div>`,
    `<div id="im5" class="carousel-image img5 active"></div>`,
  ];
  let indexNumber = 0;
  imageContainer.innerHTML = arrayImages[0];
  setInterval(() => {
    if (indexNumber >= arrayImages.length - 1) {
      indexNumber = 0;
      
    } else {
      indexNumber = indexNumber + 1;
    }
    imageContainer.innerHTML = arrayImages[indexNumber];
  },4000);




  const Burchange = document.getElementById('circles');

  let myArray = [
    `<span  data-index="0" class="material-symbols-outlined circle active"> fiber_manual_record </span>
    <span data-index="1"class="material-symbols-outlined circle" > fiber_manual_record </span>
    <span data-index="2" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="3" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="4"class="material-symbols-outlined circle"> fiber_manual_record </span>`,
    `<span  data-index="0" class="material-symbols-outlined circle "> fiber_manual_record </span>
    <span data-index="1"class="material-symbols-outlined circle active" > fiber_manual_record </span>
    <span data-index="2" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="3" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="4"class="material-symbols-outlined circle"> fiber_manual_record </span>`,
    `<span  data-index="0" class="material-symbols-outlined circle "> fiber_manual_record </span>
    <span data-index="1"class="material-symbols-outlined circle " > fiber_manual_record </span>
    <span data-index="2" class="material-symbols-outlined circle active"> fiber_manual_record </span>
    <span data-index="3" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="4"class="material-symbols-outlined circle"> fiber_manual_record </span>`,
    `<span  data-index="0" class="material-symbols-outlined circle "> fiber_manual_record </span>
    <span data-index="1"class="material-symbols-outlined circle" > fiber_manual_record </span>
    <span data-index="2" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="3" class="material-symbols-outlined circle active"> fiber_manual_record </span>
    <span data-index="4"class="material-symbols-outlined circle"> fiber_manual_record </span>`,
    `<span  data-index="0" class="material-symbols-outlined circle "> fiber_manual_record </span>
    <span data-index="1"class="material-symbols-outlined circle" > fiber_manual_record </span>
    <span data-index="2" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="3" class="material-symbols-outlined circle"> fiber_manual_record </span>
    <span data-index="4"class="material-symbols-outlined circle active"> fiber_manual_record </span>`,
  ];
  let buttArray = 0;
  Burchange.innerHTML = myArray[0];
  setInterval(() => {
    if (buttArray >= myArray.length - 1) {
      buttArray = 0;
      
    } else {
      buttArray = buttArray + 1;
    }
    Burchange.innerHTML = myArray[buttArray];
  },4000);


  function gallery() {
    const first = document.getElementById('hiddenGalery');
    const second = document.getElementById('mainImages');
    const third = document.getElementById('worldTiur');
    const forth = document.getElementById('staff');
    first.style.display = 'grid';
    second.style.display = 'none';
    third.style.display = 'none';
    forth.style.display = 'none';
  }

  function home() {
    const first = document.getElementById('hiddenGalery');
    const second = document.getElementById('mainImages');
    const third = document.getElementById('worldTiur');
    const forth = document.getElementById('staff');
    first.style.display = 'none';
    second.style.display = 'grid';
    third.style.display = 'grid';
    forth.style.display = 'grid';
  }


function buyTicket(data) {
  const sectionOne = document.getElementById('buyOne');
  const sectionTwo = document.getElementById('buyTwo');
  const sectionThree = document.getElementById('buyThree');
  const sectionFour = document.getElementById('buyFour');
  const sectionFive = document.getElementById('buyFive');
  const sectionSix = document.getElementById('buySix');
 if (data == 'no1') {
  sectionOne.style.display = 'none';
  sectionTwo.style.display = 'grid';
 } else if (data == 'no2') {
  sectionThree.style.display = 'none';
  sectionFour.style.display = 'grid';
 } else if(data == 'no3') {
  sectionFive.style.display = 'none';
  sectionSix.style.display = 'grid';
 }
  
}