const storageKey = '@clodoaldodantas:dark-theme';

const toggleSwitch = document.getElementById('toggle-switch');
const wrapper = document.querySelector('.bio-wrapper');

window.addEventListener('load', () => {
  const isDarkTheme = Boolean(localStorage.getItem(storageKey));
  toggleSwitch.checked = isDarkTheme;
  toggleTheme(isDarkTheme);
});

toggleSwitch.addEventListener('change', event => {
  toggleTheme(event.target.checked);
});

function toggleTheme(isDark) {
  if (isDark) {
    wrapper.setAttribute('data-theme', 'dark');
    localStorage.setItem(storageKey, true);
  } else {
    wrapper.removeAttribute('data-theme');
    localStorage.removeItem(storageKey);
  }
}
