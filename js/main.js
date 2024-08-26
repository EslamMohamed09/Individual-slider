let sliders = document.querySelectorAll(".slider-section .slider-container .product-card");
let currentSlide = 1;
let prevBtn = document.querySelector(".slider-section .arrows .arrow-left");
let nextBtn = document.querySelector(".slider-section .arrows .arrow-right");
let slideNumber = document.querySelector(".slider-number-block .slide-number");

let paginationIndicators = document.createElement('ul');
paginationIndicators.setAttribute('class', 'pagination-indicators');

for (let i=1; i<=sliders.length; i++){

    let paginationIndicator = document.createElement('li');
        paginationIndicator.setAttribute('data-index', i);
        paginationIndicators.appendChild(paginationIndicator);
}

document.querySelector('.slider-section .indicators').appendChild(paginationIndicators);

let paginationDots = document.querySelectorAll('.slider-section .pagination-indicators li');

function prevSlide(){
  if(prevBtn.classList.contains('disabled')){

     return false;

  } else {
    currentSlide--;
    slidersChecker();
  }
}

function nextSlide(){
  if(nextBtn.classList.contains('disabled')){

     return false;

  } else {
    currentSlide++;
    slidersChecker();
  }
}

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

function slidersChecker(){

    sliders.forEach((slider) => {
       slider.classList.remove('active');
    });

    paginationDots.forEach((dot) => {
        dot.classList.remove('active');
    });

    sliders[currentSlide - 1].classList.add('active');
    paginationDots[currentSlide - 1].classList.add('active');

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

    slideNumber.textContent = 'slide ' + (currentSlide) + ' of ' + (sliders.length);
    
}

slidersChecker();

for(let i=0; i<paginationDots.length; i++){
    paginationDots[i].onclick = function(){
      currentSlide = parseInt(this.getAttribute('data-index'));
      slidersChecker();
    }
}