$(document).ready(function() {
    // Back to top button
    const $backBtn = $('<div id="backToTop"><i class="fas fa-chevron-up"></i></div>');
    $('body').append($backBtn);
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });
    
    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
    
    // Parallax effect
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('header').css('background-position', 'center ' + (scrolled * 0.5) + 'px');
    });
});