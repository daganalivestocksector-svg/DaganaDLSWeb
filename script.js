// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Signup form (demo: replace with your form service, e.g. Formspree)
const form = document.getElementById('signupForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    msg.textContent = 'Enter a valid email address.';
    return;
  }
  msg.textContent = 'You are on the list. We will email ' + email + '.';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
