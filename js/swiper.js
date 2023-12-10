var bgswiper = new Swiper(".bg-container", {
  direction: "vertical",
  //slidesPerView: "auto",
  //slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed : 1500,
});

var thumbswiper = new Swiper(".thumbSwiper", {
  //loop: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320:{
      slidesPerView: 1
    },
    1080: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    1400: {
      slidesPerView: 1
    },
    // when window width is >= 640px
    1600: {
      slidesPerView: 1
    }
  },
});
