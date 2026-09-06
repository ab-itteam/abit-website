document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav-links');

function closeNavigation(returnFocus = false) {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  if (returnFocus) toggle.focus();
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  closeNavigation();
  // Move keyboard focus to the destination when the mobile menu collapses.
  const destination = link.hash && document.querySelector(link.hash);
  if (destination) {
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
    destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeNavigation(true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav') && toggle.getAttribute('aria-expanded') === 'true') closeNavigation();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', (event) => {
  if (event.matches) closeNavigation();
});

const copyButton = document.querySelector('[data-copy-email]');
const copyStatus = document.querySelector('.copy-status');
let copyReset;
copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.copyEmail;
  window.clearTimeout(copyReset);
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email address copied. Let’s talk soon.';
    copyButton.querySelector('span').textContent = 'Copied!';
    copyReset = window.setTimeout(() => {
      copyButton.querySelector('span').textContent = 'Copy email';
      copyStatus.textContent = '';
    }, 4000);
  } catch {
    copyButton.querySelector('span').textContent = 'Copy email';
    copyStatus.textContent = `You can copy the address directly: ${email}`;
  }
});
