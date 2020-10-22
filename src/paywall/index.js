import './index.scss';
import createButton from '../button';

const localStorageKey = 'superhero-paywall-paid-urls';
const urlResult = 'superhero-paywall-tip-result';
const urlParamSuccess = 'success';

const removeWalletResponse = url => {
  const u = new URL(url);
  u.searchParams.delete(urlResult);
  return u.toString();
}

const getPaidUrls = () => localStorage[localStorageKey] ? JSON.parse(localStorage[localStorageKey]) : [];

const markUrlAsPaid = (url) => {
  const paidUrls = getPaidUrls();
  if (paidUrls.includes(url)) return;
  paidUrls.push(url);
  localStorage[localStorageKey] = JSON.stringify(paidUrls);
}

export default async ({ url = removeWalletResponse(window.location.href) } = {}) => {
  if (new URL(window.location).searchParams.get(urlResult) === urlParamSuccess) markUrlAsPaid(url);
  if (getPaidUrls().includes(url)) return;

  const overlay = document.createElement('div');
  overlay.className = 'superhero-utils-paywall';
  overlay.innerHTML = `
    <div class="modal">
      You need to leave a tip to continue
      <br />
      <div class="button" />
    </div>
  `;

  const successUrl = new URL(url);
  successUrl.searchParams.set(urlResult, urlParamSuccess);
  createButton(overlay.querySelector('.button'), {
    size: 'small',
    url,
    'x-success': successUrl,
  });

  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
};
