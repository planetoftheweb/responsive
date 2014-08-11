$(function() {
  var topoffset = 43; //variable for scrolling effects
  var isTouch = 'ontouchstart' in document.documentElement;
  var wheight = $( window ).height(); //get the height of the window

  $('.fullheight').css('height', wheight); //set to window tallness 

  //adjust height of .fullheight elements on window resize
  $( window ).resize(function() {
    var wheight = $( window ).height();
    $('.fullheight').css('height', wheight); //set to window tallness 
  });

  //Set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  // Create ScrollMagic Scenes

  //pin navigation
  var pin = new ScrollScene({
    triggerElement: "#nav",
  }).setPin("#nav").addTo(controller);


  //pin rooms ---------------
  var roomOrigin = {
    bottom: -700,
    opacity: 0,
    scale:0,
  };

  var roomDest = {
    repeat: 1,
    yoyo: true,
    bottom: 0,
    opacity: 1,
    scale:1,
    ease: Back.easeOut
  };

if (!isTouch) {
  var roomtween = TweenMax.staggerFromTo(
    "#piccadilly .content", 
    1, roomOrigin, roomDest );

  var pin = new ScrollScene({
    triggerElement: "#piccadilly",
    offset: -topoffset,
    duration: 500
  }).setPin("#piccadilly")
  .setTween(roomtween).addTo(controller);


  var roomtween = TweenMax.staggerFromTo(
    "#cambridge .content", 
    1, roomOrigin, roomDest );

  var pin = new ScrollScene({
    triggerElement: "#cambridge",
    offset: -topoffset,
    duration: 500
  }).setPin("#cambridge")
  .setTween(roomtween)
  .addTo(controller);

  
  var roomtween = TweenMax.staggerFromTo(
    "#westminster .content", 
    1, roomOrigin, roomDest );

  var pin = new ScrollScene({
    triggerElement: "#westminster",
    offset: -topoffset,
    duration: 500
  }).setPin("#westminster")
  .setTween(roomtween)
  .addTo(controller);


  var roomtween = TweenMax.staggerFromTo(
    "#oxford .content", 
    1, roomOrigin, roomDest );

  var pin = new ScrollScene({
    triggerElement: "#oxford",
    offset: -topoffset,
    duration: 500
  }).setPin("#oxford")
  .setTween(roomtween)
  .addTo(controller);


  var roomtween = TweenMax.staggerFromTo(
    "#victoria .content", 
    1, roomOrigin, roomDest );

  var pin = new ScrollScene({
    triggerElement: "#victoria",
    offset: -topoffset,
    duration: 500
  }).setPin("#victoria")
  .setTween(roomtween)
  .addTo(controller);

  
  var roomtween = TweenMax.staggerFromTo(
    "#manchester .content", 
    1, roomOrigin, roomDest );

  var pin = new ScrollScene({
    triggerElement: "#manchester",
    offset: -topoffset,
    duration: 500
  }).setPin("#manchester")
  .setTween(roomtween)
  .addTo(controller);
  //pin rooms ---------------

}


  //set up tween animation for attractions


 var attractionstween = TweenMax.staggerFromTo("#attractions article", 1, { opacity: 0, scale:0},
    { delay: 1, opacity: 1, scale:1, ease: Back.easeOut});
  var scene = new ScrollScene({
    triggerElement: "#attractions",
    offset: -topoffset
  }).setTween(attractionstween).addTo(controller);


  //smooth scrolling from css tricks
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      }
    }
  });

  //highlight item on scroll
  $(window).scroll(function(){
    var windowpos = $(window).scrollTop()+topoffset;
    $('nav li a').removeClass('active');

    if ( windowpos > $('#hotelinfo').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#hotelinfo"]').addClass('active');
    }
    if ( windowpos > $('#rooms').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#rooms"]').addClass('active');
    }
    if ( windowpos > $('#dining').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#dining"]').addClass('active');
    }
    if ( windowpos > $('#events').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#events"]').addClass('active');
    }
    if ( windowpos > $('#attractions').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#attractions"]').addClass('active');
    }
  });

}); //function