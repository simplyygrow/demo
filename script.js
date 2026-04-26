const mobileToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-nav-close');
const mobileLinks = document.querySelectorAll('.mobile-nav a');
const mobileAccordions = document.querySelectorAll('.mobile-accordion');
const faqItems = document.querySelectorAll('.faq-item');

function setMobileNav(open) {
  if (!mobileToggle || !mobileNav) {
    return;
  }

  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
  mobileNav.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
}

mobileToggle?.addEventListener('click', () => setMobileNav(true));
mobileClose?.addEventListener('click', () => setMobileNav(false));

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => setMobileNav(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMobileNav(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) {
    setMobileNav(false);
  }
});

mobileAccordions.forEach((accordion) => {
  const trigger = accordion.querySelector('.mobile-accordion-trigger');
  trigger?.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    accordion.classList.toggle('open', !expanded);
  });
});

faqItems.forEach((item, index) => {
  const trigger = item.querySelector('.faq-question');
  if (!trigger) {
    return;
  }

  if (index === 0) {
    item.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }

  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    item.classList.toggle('open', !expanded);
  });
});
