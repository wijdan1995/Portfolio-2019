//Show and hide the nav
const navSlide = () => {
    $('.nav-links').toggleClass('nav-active')
    // console.log('Toggle Class')
}

$('.bar').on('click', navSlide);


//scroll smooth
$('.nav-links a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
    $('.nav-links').toggleClass('nav-active')
});
