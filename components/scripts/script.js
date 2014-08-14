$(function() {
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize




  //set up ScrollMagic

  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 },
      {delay: 1, opacity: 1, scale: 1,
        ease: Back.easeOut});


  var scene = new ScrollScene({
    triggerElement: '#attractions'
  }).setTween(attractionstween)
    .addTo(controller);
}); //on load