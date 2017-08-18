window.onload = function() {
  cardSlide();
  gridSlide();
  function cardSlide() {
    $('#label1').click(function() {
      currentSlide(1);
    })
    $('#label2').click(function() {
      currentSlide(2);
    })
    $('#label3').click(function() {
      currentSlide(3);
    })
    $('#label4').click(function() {
      currentSlide(4);
    })
    var slideIndex = 1;
    showSlides(slideIndex);

    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }
    //
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("card--piece-mobile");
      var dots = document.getElementsByClassName("dot");
      var dotcircle = document.getElementsByClassName("dot-circle");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
          dotcircle[i].className = dotcircle[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      dotcircle[slideIndex-1].className += " active";
    }
  }
  function gridSlide() {
    $('#arrow-left').click(function() {
      plusSlides(-1);
    })
    $('#arrow-right').click(function() {
      plusSlides(1);
    })
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("square-img-mobile");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slides[slideIndex-1].style.display = "flex";
    }
  }

}
