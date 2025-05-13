  // Scroll animation trigger
  window.addEventListener('scroll', revealOnScroll);

  function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const revealTop = reveals[i].getBoundingClientRect().top;
          const revealPoint = 200;
          
          if (revealTop < windowHeight - revealPoint) {
              reveals[i].classList.add('active');
          }
      }
  }

  document.querySelector('.about__dropdown-toggle').addEventListener('change', function(e) {
    const content = document.querySelector('.about__dropdown-content');
    if (e.target.checked) {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
});

 