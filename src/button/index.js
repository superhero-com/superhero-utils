import './index.scss';
import icon from '../img/v1-icon.png';

const genTipDeeplink = ({ url, ...params }) => {
  const u = new URL('https://wallet.superhero.com/tip');
  u.searchParams.set('url', url);
  u.searchParams.set('x-success', url);
  u.searchParams.set('x-cancel', url);
  Object.entries(params)
    .filter(([, value]) => ![undefined, null].includes(value))
    .forEach(([name, value]) => u.searchParams.set(name, value));
  return u;
};

let tips;
const getTipAmount = async (url) => {
  if (!tips) {
    tips = (await (await fetch('https://raendom-backend.z52da5wt.xyz/cache/stats')).json()).by_url;
  }
  return tips.find(u => u.url === url)?.total_amount || 0;
};

const createButtonInstance = ({ size = 'icon', url = window.location.href, account, ...options }) => {
  // data-account attribute is needed claiming
  const genLink = (text = '') => `
    <a
      href="${genTipDeeplink({ url, ...options })}"
      ${account ? `data-account="${account}"` : ''}
    >
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
  const button = document.createElement('div');
  button.innerHTML = templates[size];
  button.className = `superhero-button-2 ${size}`;

  (async () => {
    const tipsEl = button.querySelector('.tips');
    if (tipsEl) tipsEl.innerHTML = await getTipAmount(url);
  })();

  return button;
};

export default (selectorOrElement, options = {}) => {
  const element = typeof selectorOrElement === 'string'
    ? document.querySelectorAll(selectorOrElement)
    : selectorOrElement;

  const handleElement = element => {
    const instance = createButtonInstance(options);
    element.replaceWith(instance);
    return instance;
  };

  return NodeList.prototype.isPrototypeOf(element)
    ? Array.from(element).map(handleElement)
    : handleElement(element);
};
