window.addEventListener('scroll', function(){
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0)

   $('.dropdown li a').css('color', 'white')
});
$(document).ready( function(){
    $('.icon-bar').click( function(){
        $('nav').toggle()
    })
    $('.serDown').click( function(){
        $('.dropdown').toggle()
    })
    $('#times').click( function(){
        $('.dropdown').hide()
    })
    
})



