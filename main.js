/* header toogle */
$(document).ready(function(){
    $('#menubtn').click(function(){
        $('ul').toggleClass('show');
        this.classList.toggle('fa-xmark')
    });
});

//slider-carousel
const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`

    }
)
const goPrev = () => {
    counter--
    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
//console.log(slides)