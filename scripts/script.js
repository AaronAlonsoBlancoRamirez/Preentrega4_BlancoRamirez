function myFunction() {
    var x = document.getElementById("barra");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  
  function showSlides(n) {
    let i;
    let slides = document.getElementById("carrusel_secundario");

    if (n > slides.length) {slideIndex = 1}   

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
    
  }