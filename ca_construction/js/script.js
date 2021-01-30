
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

window.addEventListener('scroll', function(){
    var header = document.querySelector('.container');
    header.classList.toggle('sticky', window.scrollY > 0 && window.innerWidth >= 768);
})

testWebP(function(support) {
if( support == true){
 document.querySelector('body').classList.add('webp');
}
});

    $('.menu-btn').click(function () { 
       
        $('.menu-btn').toggleClass('open');
        $('nav').toggleClass('open');
    });
    
  
$('.form__menu-btn').click(function(){
    $('.form-wrap').removeClass('active');
})
$(window).scroll(function(){
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
   
    if(document.documentElement.clientHeight < scrollHeight ){

        $('.first_li ').css({
            'border-color': '#4376ec',
            'box-shadow': '1px 1px 5px 1px rgba(54,198,244,0.84)',
           })
    }

        });


$('.top-button').click(function(){
  $('html, body').stop().animate({scrollTop: 0},1000);
  return false;
});

$(window).scroll(function(){
  if ( $(document).scrollTop() > 1500) {
    $('.top-button').fadeIn('2000');
  } else {
    $('.top-button').fadeOut('2000');
  }
});



  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      //heightStyle: "fill",
    });
    $( "#isolation" ).accordion({
        collapsible: true,
        //heightStyle: "fill",
      });
    $( "#maconnerie" ).accordion({
        collapsible: true,
       // heightStyle: "fill",
    });
    $( "#peinture" ).accordion({
        collapsible: true,
        //heightStyle: "fill",
    });
    
  } );


$.fancybox.defaults.thumbs.autoStart = true;

$('[data-fancybox="images"]').fancybox({
  afterLoad : function(instance, current) {
    var pixelRatio = window.devicePixelRatio || 1;

    if ( pixelRatio > 1.5 ) {
      current.width  = current.width  / pixelRatio;
      current.height = current.height / pixelRatio;
    }
  }
});

// fancybox
$().fancybox({
  selector : '.your-class .slick-slide:not(.slick-cloned)',
  backFocus : false,
  afterShow : function( instance, current ) {
    current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
  }
});

// Slick
// =====

$(".gallery__slider").slick({
  autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      adaptiveHeight: true,
      dots: false,
      infinite: true,
      variableWidth: true,
      centerMode: true,
      centerPadding: '60px',
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      loop: true,
      // fade: true,
       //cssEase: 'linear',
      

});

// ============================================
// Attach custom click event on cloned elements, 
// trigger click event on corresponding link
// ============================================
$(document).on('click', '.slick-cloned', function(e) {
  var $slides = $(this)
  .parent()
  .children('.slick-slide:not(.slick-cloned)');

  $slides
    .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
    .trigger("click.fb-start", { $trigger: $(this) });

  return false;
});

// play on load for gallery view
setTimeout(transition, 1000);

$('.js-trigger-transition').on('click', function(e) {
  // e.preventDefault();
  transition();
});

function transition() {
  var tl = new TimelineMax();
  
  tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%' }, ease: Power2.easeOut}, 'close')
  .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%' }, ease: Power2.easeOut}, 'close')
  .to($('.loader'), 0.2, {opacity: 1})
  .to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%' }, ease: Power2.easeOut}, '+=1.5', 'open')
  .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%' }, ease: Power2.easeOut}, '-=0.2', 'open')
  .to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
}

//MEDIA QUERIES
$(window).ready(function() {
 
  $('.map').append(function(){
    let map = '';
    if($('body').width() <= 1170){
      $('.map').empty();
      
      map=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1310.8667075697217!2d2.4143566343396077!3d48.92047111663638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c622a22f9ff%3A0xf2d3e0d93146091!2s26%20Rue%20Maurice%20Lachatre%2C%2093700%20Drancy%2C%20Fran%C5%A3a!5e0!3m2!1sro!2s!4v1610563396101!5m2!1sro!2s" width="${$(window).innerWidth()-20}" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>`
      
    }else{
      $('.map').empty();
      map=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1310.8667075697217!2d2.4143566343396077!3d48.92047111663638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c622a22f9ff%3A0xf2d3e0d93146091!2s26%20Rue%20Maurice%20Lachatre%2C%2093700%20Drancy%2C%20Fran%C5%A3a!5e0!3m2!1sro!2s!4v1610563396101!5m2!1sro!2s" width="1170" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>`
    }
    
    return map;
  });
  
});
$(window).resize(function() {
 
  $('.map').append(function(){
    let map = '';
    if($('body').width() <= 1170){
      $('.map').empty();
      
      map=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1310.8667075697217!2d2.4143566343396077!3d48.92047111663638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c622a22f9ff%3A0xf2d3e0d93146091!2s26%20Rue%20Maurice%20Lachatre%2C%2093700%20Drancy%2C%20Fran%C5%A3a!5e0!3m2!1sro!2s!4v1610563396101!5m2!1sro!2s" width="${$(window).innerWidth()-20}" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>`
      
    }else{
      $('.map').empty();
      map=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1310.8667075697217!2d2.4143566343396077!3d48.92047111663638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c622a22f9ff%3A0xf2d3e0d93146091!2s26%20Rue%20Maurice%20Lachatre%2C%2093700%20Drancy%2C%20Fran%C5%A3a!5e0!3m2!1sro!2s!4v1610563396101!5m2!1sro!2s" width="1170" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="true" tabindex="0"></iframe>`
    }
    
    return map;
  });
  
});
$('.couverture, .isolation, .maconnerie, .peinture').wrap("<div class='provizori_wrap'></div>");


