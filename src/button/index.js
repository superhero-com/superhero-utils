import './index.scss';
import icon from '../img/icon.svg';

async function fetchJson(url) {
  const request = await fetch(url);
  if (!request.ok) throw new Error('Failed to fetch JSON');
  return request.json();
}

const genTipDeepLink = (target, recipient, params) => {
  const isPost = typeof target === 'number';
  const u = new URL('https://wallet.superhero.com/account');
  u.searchParams.set('payload', isPost ? `TIP_POST:${target}` : `TIP_PROFILE`);
  u.searchParams.set('account', isPost ? recipient : target);
  const callbackUrl = 'https://superhero.com/'; // TODO: use window.location.href
  u.searchParams.set('x-success', callbackUrl);
  u.searchParams.set('x-cancel', callbackUrl);
  Object.entries(params)
    .filter(([, value]) => ![undefined, null].includes(value))
    .forEach(([name, value]) => u.searchParams.set(name, value));
  return u;
};

const getTipAmount = async (target) => {
  try {
    if (typeof target === 'number') {
      return +(await fetchJson(`https://api.superhero.com/api/tips/posts/${target}_v3/summary`))
        .totalTips;
    }
    const address = target.endsWith('.chain')
      ? (await fetchJson(`https://mainnet.aeternity.io/v3/names/${target}`)).pointers.find(
          ({ key }) => key === 'account_pubkey',
        )?.id
      : target;
    return +(await fetchJson(`https://api.superhero.com/api/tips/accounts/${address}/summary`))
      .totalTipsReceived;
  } catch {
    return 0;
  }
};

export const createButtonByDiv = (divElement, target, { size = 'icon', ...options } = {}) => {
  const genLink = (text = '') => `
    <a href="${genTipDeepLink(target, undefined, options)}">
      <img alt="Superhero Icon" src="${icon}" />
      ${text && `<span>${text}</span>`}
    </a>`;

  const tipsAmount = `
    <div class="tips-amount">
      <span class="tips">0</span>
      <span class="ae">AE</span>
    </div>`;

  const templates = {
    icon: genLink(),
    small: genLink('Donate') + tipsAmount,
    medium: genLink('Donate Now') + tipsAmount,
    large: tipsAmount + genLink('Donate Now'),
  };

  if (!templates[size]) throw new Error('Unsupported size');
  divElement.innerHTML = templates[size];
  divElement.className = `superhero-utils-button ${size}`;

  (async () => {
    if (typeof target !== 'number') return;
    const { sender_address } = await fetchJson(`https://api.superhero.com/api/posts/${target}_v3`);
    divElement
      .querySelector('a')
      .setAttribute('href', genTipDeepLink(target, sender_address, options));
  })();

  (async () => {
    const tipsEl = divElement.querySelector('.tips');
    if (tipsEl) tipsEl.innerHTML = await getTipAmount(target);
  })();

  return divElement;
};

export default (selectorOrElement, target, options = {}) => {
  const element =
    typeof selectorOrElement === 'string'
      ? document.querySelectorAll(selectorOrElement)
      : selectorOrElement;

  const handleElement = (element) => {
    const instance = createButtonByDiv(document.createElement('div'), target, options);
    element.replaceWith(instance);
    return instance;
  };

  return NodeList.prototype.isPrototypeOf(element)
    ? Array.from(element).map(handleElement)
    : handleElement(element);
};
