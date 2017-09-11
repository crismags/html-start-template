(function () {
  $(".carousel-content").slick({
  // normal options...
  infinite: true,
  dots: false ,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  speed: 700,  
  autoplay: true,
  autoplaySpeed:2000,  
  variableWidth: false,
  adaptiveHeight: true,
  
  // the magic
  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      adaptiveHeight: true,
      fade: false,
      infinite: true
    }

  },{

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        adaptiveHeight: true,
        fade: false,
        infinite: true
      }

    },{

      breakpoint: 300,
      settings: "unslick" // destroys slick

      }]
}); 

})();

 
 /////////////////////////////////////////////////
// (function () {

// })();
