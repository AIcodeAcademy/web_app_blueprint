

export function renderHeader() {
 const html = String.raw;
 const title = 'Web App Blueprint!';
 const githubUrl = 'https://github.com/AIcodeAcademy/web_app_blueprint';
 const header = html`
   <nav>
     <ul>
       <li><strong>${title}</strong></li>
     </ul>
     <ul>
       <li><a href="${githubUrl}" target="_blank">Github</a></li>
     </ul>
   </nav>
 `;
 return header;
}
