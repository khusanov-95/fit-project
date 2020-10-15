//m-menu 
document.addEventListener(
  "DOMContentLoaded", () => {
      const menu = new Mmenu( "#my-menu", {
        extensions: {
          "all": ["theme-dark", "position-back", "position-right","pagedim-black","listview-justify" ]
        },
        navbar: {
          title: "<a class='scroll' href='#main'><img src='images/dest/main-logo.png' alt='alt'></a>"
        }

      });
      const api = menu.API;
      document.querySelector( ".hamburger" )
      .addEventListener(
          "click", ( evnt ) => {
              evnt.preventDefault();
              api.close();
          }
      );
  }
);


//preloader 
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 2500);

$(document).ready(function(){
//burger menu 
$(window).scroll(function() {
  if($(this).scrollTop() > $('.main').height() - 50){
    $('.mburger').removeClass("white-burger");
    $('.mburger').addClass("black-burger");
  } else {
    $('.mburger').removeClass("black-burger");
    $('.mburger').addClass("white-burger");
  }
})

//Slick slider
  $('.slider-gallery').slick({
      arrows: true,
      prevArrow:"<span class='prev-arrow'><i class='fas fa-chevron-left'></i></span>",
    nextArrow:"<span class='next-arrow'><i class='fas fa-chevron-right'></i></span>",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.slider-programs').slick({
    prevArrow:"<span class='prev-arrow'><i class='fas fa-chevron-left'></i></span>",
    nextArrow:"<span class='next-arrow'><i class='fas fa-chevron-right'></i></span>",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

// Page items animation
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animate__animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).css("opacity", "1");
        $(this).addClass('animate__jackInTheBox');
      }
    });
  });
// Page scrolling 
  var scrollLink = $('.scroll');
  //Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })
//back to top btn
$(window).scroll(function() {
  if($(this).scrollTop() >40){
    $('.back-to-top__inner').fadeIn();
  } else {
    $('.back-to-top__inner').fadeOut();
  }
})




});

