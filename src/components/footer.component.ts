import { Credit } from '../models/credit.type';
import { getCurrentYear } from '../utils/date.function';

const author: Credit = {
  name: 'Alberto Basalo',
  url: 'https://albertobasalo.dev',
};
const company: Credit = {
  name: 'AI code Academy',
  url: 'https://aicode.academy',
};

export function renderFooter() {
  const html = String.raw;
  const copyright = `&copy; ${getCurrentYear()}`;
  const authorLink = `<a href="${author.url}" target="_blank">${author.name}</a>`;
  const companyLink = `<a href="${company.url}" target="_blank">${company.name}</a>`;
  const footer = html`<p>${copyright} ${authorLink} for ${companyLink}</p>`;
  return footer;
}
