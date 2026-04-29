const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const body = document.body;
const navToggle = $('.nav-toggle');
const navMenu = $('.nav-menu');
const navLinks = $$('.nav-link');
const toast = $('.toast');



function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  body.classList.toggle('menu-open', isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('active');
    navToggle?.classList.remove('active');
    navToggle?.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  });
});

const themeToggle = $('.theme-toggle');
const savedTheme = localStorage.getItem('accelra-theme');
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = current;
  localStorage.setItem('accelra-theme', current);
  themeToggle.innerHTML = current === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

const roles = [
  'AI Engineer',
  'Data Scientist',
  'MLOps Learner',
  'Computer Science Student',
  'Backend Builder'
];
const typingTarget = $('#typing-role');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typingTarget) return;
  const current = roles[roleIndex];
  const visible = deleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);
  typingTarget.textContent = visible;

  let delay = deleting ? 45 : 76;
  if (!deleting && charIndex > current.length) {
    deleting = true;
    delay = 1200;
  }
  if (deleting && charIndex < 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 240;
  }
  window.setTimeout(typeRole, delay);
}
typeRole();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

$$('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 40, 260)}ms`;
  revealObserver.observe(element);
});

const skillButtons = $$('.skills .filter-btn');
const skillCards = $$('.skill-card');

skillButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    skillButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    skillCards.forEach((card) => {
      const categories = (card.dataset.categories || '').split(/\s+/);
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

skillCards.forEach((card) => {
  const accent = card.dataset.accent;
  if (accent) card.style.setProperty('--accent', accent);
});

const statsSection = $('#proof');
let counted = false;

function animateCount(element) {
  const target = Number(element.dataset.count || 0);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}+`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !counted) {
      counted = true;
      $$('[data-count]').forEach(animateCount);
      countObserver.disconnect();
    }
  });
}, { threshold: 0.25 });
if (statsSection) countObserver.observe(statsSection);

const sections = $$('main section[id]');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { threshold: 0.42 });
sections.forEach((section) => activeObserver.observe(section));

const glow = $('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
});

$$('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied: ${text}`);
    } catch {
      showToast(text);
    }
  });
});

const contactForm = $('#contactForm');
const formStorageKey = 'accelra-contact-form';

function saveForm() {
  if (!contactForm) return;
  const data = Object.fromEntries(new FormData(contactForm).entries());
  localStorage.setItem(formStorageKey, JSON.stringify(data));
}

function loadForm() {
  if (!contactForm) return;
  const raw = localStorage.getItem(formStorageKey);
  if (!raw) return;
  const data = JSON.parse(raw);
  Object.entries(data).forEach(([key, value]) => {
    const field = contactForm.elements[key];
    if (field) field.value = value;
  });
}

loadForm();
contactForm?.addEventListener('input', saveForm);
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm).entries());
  const subject = encodeURIComponent(data.subject || 'Portfolio contact');
  const body = encodeURIComponent(`Hi Tan,\n\n${data.message}\n\nFrom: ${data.name}\nEmail: ${data.email}`);
  window.location.href = `mailto:noobtan77@gmail.com?subject=${subject}&body=${body}`;
  showToast('Opening your email app...');
});

const profileCard = $('.profile-card');
profileCard?.addEventListener('pointermove', (event) => {
  const rect = profileCard.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  profileCard.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
});
profileCard?.addEventListener('pointerleave', () => {
  profileCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

$('#year').textContent = new Date().getFullYear();
