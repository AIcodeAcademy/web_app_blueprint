const html = String.raw;

export function createThemeToggle() {
  const themeToggleComponent = document.createElement('div');
  const themeToggleHtml = html` <a id="theme-toggle" aria-label="Toggle theme" href="#">
    <span class="light">🔳</span>
    <span class="dark">🔲</span>
  </a>`;
  themeToggleComponent.innerHTML = themeToggleHtml;
  themeToggleComponent.addEventListener('click', onToggleTheme);
  setTheme(getSystemTheme());
  return themeToggleComponent;
}

function onToggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme: string) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
}

// setTheme(getSystemTheme());

