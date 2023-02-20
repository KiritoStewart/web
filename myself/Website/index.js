$(document).ready(function(e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function() {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'My homepage',
        'Nice to meet U',
        'Welcome ! ! !'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'My homepage',
        'TS Parts of me',
        'U can Know More'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});