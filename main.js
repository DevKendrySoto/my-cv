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

 