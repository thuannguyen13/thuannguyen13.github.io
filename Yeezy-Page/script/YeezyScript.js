window.onload = function() {
  $('#arrow-left').on('click', function(e){
    moveSlide(-1);
    e.preventDefault();
  });
  $('#arrow-right').on('click', function(e){
    moveSlide(1);
    e.preventDefault();
  });
  var slideNumber = 1;
  DisplayCarouselItems(slideNumber);
  function moveSlide(n){
    DisplayCarouselItems(slideNumber += n);
  }
  function currentSlide(n) {
    DisplayCarouselItems(slideNumber = n);
  }
  function DisplayCarouselItems(n) {
    var items =  document.getElementsByClassName('carousel-items');
    $(".carousel-items").addClass("animated slideInRight");
    if (n > items.length) {
      slideNumber = 1;
    }
    if(n < 1){
      slideNumber = items.length;
    }
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    items[slideNumber - 1].style.display = 'block';


  }
}
