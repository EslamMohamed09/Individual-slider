let sliders = Array.from(document.querySelectorAll('.slider-container .product-card'));
let slidesCount = sliders.length;
let currentSlide = 1;
let prevBtn = document.querySelector('.slider-section .arrows .arrow-left');
let nextBtn = document.querySelector('.slider-section .arrows .arrow-right');
let slideNumberElement = document.getElementById('slide-number');

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

let paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');

for (let i=1; i<=slidesCount; i++){
    
    let paginationItem = document.createElement('li');
    
        paginationItem.setAttribute('data-index', i);
        paginationItem.appendChild(document.createTextNode(i));
        paginationElement.appendChild(paginationItem);
}

document.querySelector('.slider-section .indicators').appendChild(paginationElement);

let paginationCreatedUl = document.getElementById('pagination-ul');

let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


function removeAllActive(){

    sliders.forEach(function(slider){
        slider.classList.remove('active');
    });

    paginationsBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });    

}

function theChecker(){

    slideNumberElement.textContent = 'Slide' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();
 
    sliders[currentSlide - 1].classList.add('active');

    paginationCreatedUl.children[currentSlide -1].classList.add('active');

    if(currentSlide == 1){
       prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if(currentSlide == slidesCount){
       nextBtn.classList.add('disabled');
    } else {
       nextBtn.classList.remove('disabled');
    }

}

theChecker();

function prevSlide(){
    if(prevBtn.classList.contains('disabled')){

        return false;
        
     } else {
       currentSlide--;
       theChecker();
     }
}

function nextSlide(){

  if(nextBtn.classList.contains('disabled')){

     return false;
     
  } else {
    currentSlide++;
    theChecker();
  }
    
}

for (let i=0; i < paginationsBullets.length; i++) { // Dots Loop
     paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
     }
}