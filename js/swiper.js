var swiper = new Swiper(".slider-container", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<img src="./img/intro/mv-roll.png" alt="mv-roll" class="'+className+'">'
      // return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  speed : 1500
});

var bgswiper = new Swiper(".bg-container", {
  direction: "vertical",
  slidesPerView: "auto",
  // slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed : 1500,
});

//리사이즈 될때 확인하기
var index = 5;

var thumbswiper = new Swiper(".thumbSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: index,
  spaceBetween: 0,
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320:{
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 3
    },
    // when window width is >= 480px
    1400: {
      slidesPerView: 4
    },
    // when window width is >= 640px
    1600: {
      slidesPerView: 5
    }
  },
});
