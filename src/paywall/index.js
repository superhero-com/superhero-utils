import './index.scss';
import '../button';

const localStorageKey = 'superhero-paywall-paid-targets';
const urlResult = 'superhero-paywall-tip-result';
const urlParamSuccess = 'success';

const getPaidTargets = () =>
  localStorage[localStorageKey] ? JSON.parse(localStorage[localStorageKey]) : [];

const markTargetAsPaid = (target) => {
  const paidTargets = getPaidTargets();
  if (paidTargets.includes(target)) return;
  paidTargets.push(target);
  localStorage[localStorageKey] = JSON.stringify(paidTargets);
};

export default async (target) => {
  if (new URL(window.location).searchParams.get(urlResult) === urlParamSuccess)
    markTargetAsPaid(target);
  if (getPaidTargets().includes(target)) return;

  const overlay = document.createElement('div');
  overlay.className = 'superhero-utils-paywall';
  const successUrl = new URL(window.location.href);
  successUrl.searchParams.set(urlResult, urlParamSuccess);
  overlay.innerHTML = `
    <div class="modal">
      You need to leave a tip to continue
      <br />
      <superhero-button target="${target}" size="small" x-success="${successUrl}"></superhero-button>
    </div>
  `;

  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
};
