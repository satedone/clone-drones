let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
const productCards = Array.from(carouselInner.querySelectorAll('.product-card'));

let slidesPerView = 1;
let currentIndex = 0;

function updateSlidesPerView() {
  if (window.innerWidth >= 768) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const totalSlides = productCards.length;
  const offset = currentIndex % totalSlides;
  carouselInner.style.transform = `translateX(-${offset * (100 / slidesPerView)}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex -= slidesPerView;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex += slidesPerView;
  updateCarousel();
});

window.addEventListener('resize', updateSlidesPerView);

updateSlidesPerView();
