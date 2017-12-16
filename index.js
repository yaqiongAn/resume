$('.section').css({'margin-bottom':'0'})

$.fn.fullpage({
    
    slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    
    anchors: ['page1', 'page2', 'page3', 'page4','page5'],
    resize:true,
    controlArrowColor:'#acd',
    menu: '#menu',
    navigation:true,
    afterRender:function(){
        $('.controlArrow.next').css({'border':'none','right':'.9em','color':'rgb(8, 117, 44)'}).addClass('fa-angle-right fa'); 
        $('.controlArrow.prev').css({'border':'none','left':'.9em','color':'rgb(8, 117, 44)'}).addClass('fa-angle-left fa');
        

    },
    afterLoad:function(page,index){
        $('.animated').css({
            display: 'none'
        });
        $('.slide-box').css({'display':'none'})
        
        $('.resume').css({'top':'0'});
        
        
        
        if(page=='page2'){
            $('.section2').find('.animated').css({
                display: 'block'
            });
            $('.skill').addClass('animated bounceInUp')
        }
        
        if (page=='page3') {
            $('.section3').find('.animated').css({
                display: 'block'
            });
            $('.info-1').addClass('animated bounceInLeft');
            $('.info-2').addClass('animated bounceInDown');
            $('.info-3').addClass('animated bounceInUp');
            $('.info-4').addClass('animated bounceInRight');
                
        }
        if (page=='page5') {
            $('.slide-box').slideDown()
        }
    

                
    },

    
});
$('.work').mousemove(function(){
    $(this).find('.jishu').css({'display':'block'})
    $(this).addClass('animated pulse');
    
})
$('.work').mouseout(function(){
    $(this).find('.jishu').css({'display':'none'})
    $(this).removeClass('animated pulse')
})


$('.section1 a').mousemove(function(){
    $(this).addClass('animated flipInY');

})
$('.section1 a').mouseout(function(){
    $(this).removeClass('animated flipInY');

})
$('.section3 i').mousemove(function(){
    $(this).addClass('animated jello');

})
$('.section3 i').mouseout(function(){
    $(this).removeClass('animated jello');

})

