const listImage = document.querySelector('.list_banner_main');
const imgs = document.querySelectorAll('.img-banner');
const dots = document.querySelectorAll('.dot');
let current = 0;
let autoSlideInterval;

function currentSlide(index) {
    current = index;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${-width * current}px)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[current].classList.add('active');
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        current = (current + 1) % imgs.length;  
        currentSlide(current);
    }, 3000); 
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval); 
        currentSlide(index);
        autoSlide(); 
    });
});

currentSlide(current);
autoSlide();
