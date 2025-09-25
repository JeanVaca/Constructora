function openModal(){
    document.getElementById('my-modal').style.display = "inline-flex";
}

function closeModal(){
    document.getElementById('my-modal').style.display = "none";
}

var slideIndexJS = 1;
showSlides(slideIndexJS);

function changeSlides(n){
    showSlides(slideIndexJS += n);
}

function currentSlide(n){
    showSlides(slideIndexJS = n);
}

function showSlides(n){
    var i;
    var slidesJs = document.getElementsByClassName("my-slides");

    if (n > slidesJs.length){ slideIndexJS =1;}
    if (n < 1) {slideIndexJS = slidesJs.length;}

    for (i = 0; i < slidesJs.length; i++){
        slidesJs[i].style.display = "none";
    }

    slidesJs[slideIndexJS - 1].style.display = "block";
}

$(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $('#my-modal').hide();
    }
  });