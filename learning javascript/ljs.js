
$(function(){

    // $('h1,h2,h3,h4').css('border','1px solid red')
    // $('div#container').css('border','1px solid red')
    // $('div:contains("Chike")').css('border','1px solid red')

    // $("button").click(function(){
    //     $('#box').fadeOut(1000);
    // });

    // $('#box').click(function(){
    //     alert('You clicked?');
    // });

    // $('input').blur(function(){

    //     if( $(this).val() === "" ){

    //         $(this).css('border','1px solid red');
    //         $('#box').text('Forgot to add text?')

    //     }

    // });

    // $('input').keydown(function(){

    //     if( $(this).val() !== "" ){
    //         $(this).css('border','1px solid #777');
    //         $('#box').text('Ok then')
    //     }

    // });

    // $('#box').hover(function(){

    //     $(this).text('you hovered in'); 

    // }, function(){

    //     $(this).text('you hovered out');

    // });


    // $(".notification-bar").delay(2000).slideDown().delay(5000).fadeOut();

    // $('h1').hide();
    // $('div.hidden').show();

    // $('div.hidden').fadeIn();

    // $('button').click(function(){
    //     $('#box1').fadeTo(5000, 0.45, function(){
    //         $(this).text("I don't feel so good.")
    //     });

    // }); 

    // $('#box1').hover(function(){
    //     $('#box1').slideToggle();
    // });

    // $('#left').click(function(){
    //     $('.box').animate({
    //         left: '-=40px',
    //         fontSize: '-=2px'
    //     }, function() {

    //     });
    // });

    // $('#up').click(function(){
    //     $('.box').animate({
    //         top: '-=40px',
    //         fontSize: '+=2px'
    //     }, function() {

    //     });
    // });

    // $('#right').click(function(){
    //     $('.box').animate({
    //         left: '+=40px',
    //         fontSize: '+=2px'
    //     }, function() {

    //     });
    // });

    // $('#down').click(function(){
    //     $('.box').animate({
    //         top: '+=40px',
    //         fontSize: '-=2px'
    //     }, function() {

    //     });
    // });

    $('#circle2').css({     
        'display': 'inline-block',
        'background': '#8a8d22',
        'color': 'white',
        'text-align': 'center',
        'line-height': '140px',
        'height': '140px',
        'width': '140px',
        'margin': '40px',
        'z-index': '1' 
    });

    $('#circle2').addClass('circleShape');

    $('.drpdwn').css('list-style','none');

    $('.drpdwn-lnk').hover(function(){
        $('.drpdwn').css('display','inline');
        $('.drpdwn').slideDown();
    },function(){

        $('.drpdwn').hover(function(){

        },function() {
            $('.drpdwn').slideUp();
        });
    });

    
});
