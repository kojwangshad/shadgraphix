/* SMOOTH SCROLL */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll('.reveal');
  
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  
  /* CONTACT FORM */
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    message.textContent = "Thank you! Your message has been sent.";
    message.style.color = "green";
    form.reset();
  });
  
