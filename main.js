(() => {
  console.log('js is running');

  const glass_container = document.querySelector('.glass-container'); //get glass container
  const btn = document.querySelectorAll('.btn'); //get prev and next buttons
  const prev = document.querySelector('.prev'); //get prev button only
  const next = document.querySelector('.next'); //get next button only
  const slides = document.querySelectorAll('.slide'); //get all slides

  const firstIndex = 0; //as we have array of slides this is our first index
  const lastIndex = slides.length - 1; //and this is last

  let activeSlide = 0; //the active slide

  const slideInActive = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  };

  //change slide to previous slide
  const prevSlide = () => {
    console.log('prev');
    slideInActive();
    activeSlide--;
    if (activeSlide < firstIndex) activeSlide = lastIndex;
    slides[activeSlide].classList.add('active');
  };

  //change slide to next slide
  const nextSlide = () => {
    console.log('next');
    slideInActive();
    activeSlide++;
    if (activeSlide > lastIndex) activeSlide = firstIndex;
    slides[activeSlide].classList.add('active');
  };

  //work on mouse enter
  const onMouseEnter = () => {
    console.log('onMouseEnter');
    //change the button width
    btn.forEach((button) => {
      button.style.width = '12vw';
    });
    //trigger on click
    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);
  };

  //reset on mouseleave
  const onMouseLeave = () => {
    console.log('onMouseLeave');
    btn.forEach((button) => {
      button.style.width = '95vw';
    });
  };

  //attach eventlisteners to glass container
  glass_container.addEventListener('mouseenter', onMouseEnter);
  glass_container.addEventListener('mouseleave', onMouseLeave);
})();
