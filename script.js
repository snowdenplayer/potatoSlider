$('.tarkikComandSlider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 4,
        vertical: true
      }
    }
  ]
});

$('.scroll-top').click(() => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});