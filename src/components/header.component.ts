import { createThemeToggle } from './toggle-theme.component';

export function createHeader() {
  const html = String.raw;
  const headerComponent = document.createElement('header');
  const title = 'Web App Blueprint!';
  const githubUrl = 'https://github.com/AIcodeAcademy/web_app_blueprint';
  const headerHtml = html`
    <nav>
      <ul>
        <li><strong>${title}</strong></li>
      </ul>
      <ul>
        <li><a href="${githubUrl}" target="_blank">Github</a></li>
        <li id="theme-toggle-template"></li>
      </ul>
    </nav>
  `;
  headerComponent.innerHTML = headerHtml;
  const themeToggleTemplate = headerComponent.querySelector('#theme-toggle-template');
  themeToggleTemplate?.appendChild(createThemeToggle());
  return headerComponent;
}
