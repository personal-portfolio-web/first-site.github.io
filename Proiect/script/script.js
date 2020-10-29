$(document).ready(function(){
    $('.carousel').slick({
        autoplay : true,
        dots: true,
        mobileFirst: true,
        
    });
  });


  $('.section').hover(function(e){
    $(this).css({
        'transition': '.2s',
        'transform' : 'scale(1.1,1.1)',
        'box-shadow' : '10px 10px 5px #aaaaaa'

    })
    $(this).find($('p')).css({
        'overflow': 'inherit'
    })
    $('.wrap_first_section .bar').css({
        'transform' : ' translatey(-50px)'
    })
})
$('.section').mouseleave(function(){
    $(this).css({
        'transition': '.2s',
        'transform' : 'scale(1,1)',
        'box-shadow' : 'none',
        
    })
    $('.section p').css({'overflow': 'hidden'})
    $('.wrap_first_section .bar').css({
        'transform' : ' translatey(0)'
    })
})
$('.section').hide();
$(window).scroll(function(){
  if(window.scrollY > 50){
    $('.section').addClass('active');
    $('.active').show( 500 );  
}
 } 
 
);
function reload(){
    if($('.second_section__text p.active')){
        $(this).html('READ LESS');
    } 

    if ($('.second_section__text p.active') == undefined) {
        $(this).html('READ MORE');
    }
}
//.second_section__text p
function toggle(selector, button) {
    $(selector).toggleClass('active'); 
    let selectorActive = selector+'.active';
    let selectorButton = button + ' button';
    
    if($(selectorActive).length == 1){
        $(selectorButton).html('READ LESS');
        
    } 
  
    if ($(selectorActive).length == 0) {
        $(selectorButton).html('READ MORE');
    }
};
$('.tags a').click(function (e) { 
    e.preventDefault();
    $(this).css({'display' : 'none'})
});

$('.home').click(function () { 

        let xhr = new XMLHttpRequest()
            xhr.open('GET', 'index.html')
            xhr.send()
            xhr.onload= () =>{
                let data = JSON.parse( xhr.responseText  )
                console.log( data ) 
        }
        
            
        
});