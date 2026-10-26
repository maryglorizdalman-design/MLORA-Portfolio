// Mobile navigation toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

const typedTarget = document.querySelector('.multiple-text');
if (window.Typed && typedTarget) {
  new Typed('.multiple-text', {
    strings: ['BS Computer Science Student', 'Creative Thinker', 'Future Programmer'],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1200,
    loop: true
  });
}

if (window.ScrollReveal) {
  ScrollReveal({ distance: '50px', duration: 1500, delay: 150, reset: false });
  ScrollReveal().reveal('.home-content, .heading, .image-place', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .pc-content, .card-group, .skills-container, .experience-content, .cr-content, .contact form, .image-placeholder', { origin: 'bottom' });
  ScrollReveal().reveal('.about-content', { origin: 'right' });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  formNote.textContent = 'Sending your message...';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formNote.textContent = 'Message sent successfully!';
      contactForm.reset();
    } else {
      formNote.textContent = 'Failed to send. Please try again.';
    }
  } catch (error) {
    formNote.textContent = 'Connection error. Check your internet.';
  }
});

