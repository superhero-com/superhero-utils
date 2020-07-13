import { detect } from 'detect-browser';
import css from '!!css-loader!sass-loader!./style.scss';
import icon from './img/v1-icon.png';

const isMobileDevice = navigator.userAgent.includes('Mobi');

const linkToExtension = !isMobileDevice && {
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/superhero-wallet/',
  chrome: 'https://chrome.google.com/webstore/detail/superhero/mnhmmkepfddpifjkamaligfeemcbhdne'
}[detect().name];

const genTipDeeplink = (url) => {
  const u = new URL('https://wallet.superhero.com/tip');
  u.searchParams.set('url', url);
  u.searchParams.set('x-success', url);
  u.searchParams.set('x-cancel', url);
  return u;
}

let tips;
const getTipAmount = async (url) => {
  if (!tips) {
    tips = (await (await fetch('https://raendom-backend.z52da5wt.xyz/cache/stats')).json()).by_url;
  }
  return (tips.find(u => u.url === url) || {}).total_amount || 0;
};

export const createButtonInstance = ({ size = 'icon', url = window.location.href, account }) => {
  // data-account attribute is needed claiming
  // data-url attribute is needed to be detected by wallet extension
  const genLink = (text = '') => `
    <a
      target="_blank"
      href="${linkToExtension || genTipDeeplink(url)}"
      ${account ? `data-account="${account}"` : ''}
      data-url="${url}"
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
  button.className = `superhero-button ${size}`;

  (async () => {
    const tipsEl = button.querySelector('.tips');
    if (tipsEl) tipsEl.innerHTML = await getTipAmount(url);
  })();

  return button;
}

let cssInlined = false;

export default (selectorOrElement, options) => {
  if (process.env.INLINE_CSS && !cssInlined) {
    const styles = document.createElement('style');
    styles.appendChild(document.createTextNode(css.toString()));
    document.getElementsByTagName('head')[0].prepend(styles);
    cssInlined = true;
  }

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
