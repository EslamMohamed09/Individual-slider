// Get slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount = sliderImages.length;

var currentSlide = 1;

// slide Number Element
var slideNumberElement = document.getElementById('slide-number');

var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

// Handle click on prev & next button
prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;


var paginationElement = document.createElement('ul');

// SET Id on created UI Element
paginationElement.setAttribute('id', 'pagination-ul');

//Create list itemsbased on the slides count
for (var i=1; i<=slidesCount; i++){

    // Create The LI
    var paginationItem = document.createElement('li');

    // SET Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the main Ui list
    paginationElement.appendChild(paginationItem);

}

// Add the created Ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));




function removeAllActive(){

    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    paginationsBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });    

}

function theChecker(){

    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();
 
    sliderImages[currentSlide - 1].classList.add('active');

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

// Trigger the checker function
theChecker();

// prev slide function
function prevSlide(){
    if(prevBtn.classList.contains('disabled')){

        return false;
        
     } else {
       currentSlide--;
       theChecker();
     }
}

// next slide function
function nextSlide(){

  if(nextBtn.classList.contains('disabled')){

     return false;
     
  } else {
    currentSlide++;
    theChecker();
  }
    
}

// Loop through all bullets item - appear slide of clicked bullet
for (var i=0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
       currentSlide = parseInt(this.getAttribute('data-index'));
       theChecker();
    }
}