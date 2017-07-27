/* fquery hide() */
// jQuery(document).ready(function(){
// 	jQuery('.logo-wrapper').hide();
// });

 $(".project-carousel").slick({
  // normal options...
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed:2000,
  // speed: 500,
  variableWidth: true,
  
  // the magic
  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }

  },{

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    },{

      breakpoint: 300,
      settings: "unslick" // destroys slick

    	}]
}); 