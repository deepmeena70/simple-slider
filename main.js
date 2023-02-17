(() => {
  console.log('js is running');

  const glass_container = document.querySelector('.glass-container');
  const btn = document.querySelectorAll('.btn');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slides = document.querySelectorAll('.slide');

  const firstIndex = 0;
  const lastIndex = slides.length - 1;

  let activeSlide = 0;

  const slideInActive = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  };

  prevSlide = () => {
    console.log('prev');
    slideInActive();
    activeSlide--;
    if (activeSlide < firstIndex) activeSlide = lastIndex;
    slides[activeSlide].classList.add('active');
  };

  nextSlide = () => {
    console.log('next');
    slideInActive();
    activeSlide++;
    if (activeSlide > lastIndex) activeSlide = firstIndex;
    slides[activeSlide].classList.add('active');
  };

  const onMouseEnter = (e) => {
    console.log('onMouseEnter');
    btn.forEach((button) => {
      button.style.width = '12vw';
    });
    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
  };

  const onMouseLeave = (e) => {
    console.log('onMouseLeave');
    btn.forEach((button) => {
      button.style.width = '95vw';
    });
  };

  glass_container.addEventListener('mouseenter', onMouseEnter);
  glass_container.addEventListener('mouseleave', onMouseLeave);
})();
