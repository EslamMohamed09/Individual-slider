let sliders = Array.from(document.querySelectorAll('.slider-container .product-card'));
let currentSlide = 1;
let prevBtn = document.querySelector('.slider-section .arrows .arrow-left');
let nextBtn = document.querySelector('.slider-section .arrows .arrow-right');
let slideNumber = document.querySelector('.slider-section .slide-number');

let paginationIndicators = document.createElement('ul');

paginationIndicators.setAttribute('class', 'pagination-indicators');

for (let i=1; i<=sliders.length; i++){
    
    let paginationIndicator = document.createElement('li');
    
        paginationIndicator.setAttribute('data-index', i);
        paginationIndicator.appendChild(document.createTextNode(i));
        paginationIndicators.appendChild(paginationIndicator);
}

document.querySelector('.slider-section .indicators').appendChild(paginationIndicators);

let paginationDots = Array.from(document.querySelectorAll('.pagination-indicators li'));

function removeAllActive(){

    sliders.forEach(function(slider){
        slider.classList.remove('active');
    });

    paginationDots.forEach(function(bullet){
        bullet.classList.remove('active');
    });    

}

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

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

function theChecker(){

    slideNumber.textContent = 'Slide ' + (currentSlide) + ' of ' + (sliders.length);

    removeAllActive();
 
    sliders[currentSlide - 1].classList.add('active');

    paginationIndicators.children[currentSlide -1].classList.add('active');

    if(currentSlide == 1){
       prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if(currentSlide == sliders.length){
       nextBtn.classList.add('disabled');
    } else {
       nextBtn.classList.remove('disabled');
    }

}

theChecker();

for (let i=0; i < paginationDots.length; i++) { // Get Slide By It's Dot
     paginationDots[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
     }
}