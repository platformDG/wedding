 // JavaScript를 사용하여 스크롤 동작 구현
 document.getElementById('btn3').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 방지

    const element = document.querySelector(this.getAttribute('href'));
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });