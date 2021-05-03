let color = document.querySelectorAll('.color li');
let links = document.querySelectorAll('.links li');

color.forEach(item => {
    item.style.backgroundColor = item.getAttribute('data-color');
    item.addEventListener('click',function() {
        document.body.style.setProperty('--mainColor',this.getAttribute('data-color'))
    })
});

links.forEach(item => {
    item.addEventListener('click' , function() {
        links.forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
        console.log($(`#${this.textContent}`).offset().top)
        $('html').animate({
            scrollTop: $(`#${this.textContent}`).offset().top
        },1000)
    })
})

document.querySelector('.menu').onclick = function() {
    document.querySelector('.submenu').classList.add('show');
}
document.querySelector('.fa-close').onclick = function() {
    document.querySelector('.submenu').classList.remove('show');
}

$('.fa-chevron-down').on('click' , function() {
    $('html').animate({
        scrollTop: $('#About').offset().top
    },1000)
});

$('.see').on('click',function() {
    $(this).css('display','none');
    $('.hidden').slideDown();
});

/* Start Slider */
let slides = document.querySelectorAll('.slide');
let currentSlide = 1;

function removeAll(){
    slides.forEach(item => {
        item.classList.remove('active');
    });
};
document.querySelector('.fa-chevron-right').onclick = function() {
    if(currentSlide === slides.length) {
        currentSlide === 1;
    }
    currentSlide ++;
    check();
}
document.querySelector('.fa-chevron-left').onclick = function() {
    if(currentSlide === 1) {
        currentSlide === slides.length;
    }
    currentSlide --;
    check();
}
function check() {
    removeAll();
    setTimeout(function () {
        slides[currentSlide - 1].classList.add('active');
        if(currentSlide === slides.length) {
            document.querySelector('.fa-chevron-right').style.display = 'none'
        } else {
            document.querySelector('.fa-chevron-right').style.display = 'block'
        };
        if(currentSlide === 1) {
            document.querySelector('.fa-chevron-left').style.display = 'none'
        } else {
            document.querySelector('.fa-chevron-left').style.display = 'block'
        }
    } , 500);
};
check();
/* End Slider */

window.onscroll = function() {
    if(pageYOffset > 1000) {
        document.querySelector('.go').classList.add('select');
        document.querySelector('.go i').classList.add('select')
    } else {
        document.querySelector('.go').classList.remove('select')
        document.querySelector('.go i').classList.remove('select')
    }
};
document.onclick = function(e) {
    if(e.target.classList.contains('select')){
        let interval = setInterval(function() {
            window.scrollBy(0,-10);
            if(window.pageYOffset === 0) {
                clearInterval(interval)
            }
        },1)
    }
}