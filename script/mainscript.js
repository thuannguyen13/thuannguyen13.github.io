$(document).ready(function(){
Random_Background_Color();
windowScroll();
});


  // Parallax Effect
function SquareDiv() {
  var SquareWidth = $(".grid--col-3").width();
  console.log(SquareWidth);
  $(".card-piece").css('height', SquareWidth);
}

function windowScroll() {
      $(window).scroll(function() {
        var topMove = $(window).scrollTop();
        $(".header-title").css("transform","translate(0px,"+topMove/3+"px)");
        // $(".card-piece a").css("transform","translate(0px,"+topMove/5+"px)");
      });
  }

function Random_Background_Color(){
  var cards = $(".card-piece");
  var videoBg = $(".video-overlay");
  function random_BG_Color() {
    var randomColorValue = Math.floor(Math.random()*256)-1;
    var randomColorValue2 = Math.floor(Math.random()*256)-1;
    var randomColorValue3 = Math.floor(Math.random()*256)-1;
    var colorString = "rgb("+ randomColorValue +","+ randomColorValue2 +","+ randomColorValue3 + ")";
    return colorString;
  }
  function random_gradient_angles() {
    var randomAngles = Math.floor(Math.random()*180);
    return randomAngles;
  }



  // select all cards in the array
  // for (var i = 0; i < cards.length; i++) {
  //
  //     $(cards[i]).hover(
  //       function() {
  //         $(this).css("background","linear-gradient("+random_gradient_angles()+ "deg,"+random_BG_Color()+","+random_BG_Color()+")");
  //       },
  //       function() {
  //         $(this).css("background","black");
  //       }
  //     );
  //     // $(cards[i]).css("background-color",randomColor()); // cards[i] must be turn into Jquery Object=
  //   }

}
