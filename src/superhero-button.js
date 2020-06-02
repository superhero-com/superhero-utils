import { detect } from 'detect-browser';
import css from '!!css-loader!sass-loader!./style.scss';
import icon from './img/v1-icon.png';

const defaults = {
  size: 'icon',
  url: window.location.href,
};

const templates = {
  icon: `
    <div class="link-holder">
      <a class="link" target="_blank">
        <img alt="Superhero Icon" />
      </a>
    </div>`,
  small: `
    <div class="link-holder">
      <a class="link" target="_blank">
        <img alt="Superhero Icon" />
        <span>Donate</span>
      </a>
    </div>
    <div class="tips-amount">
      <span class="tips">0</span>
      <span class="ae">AE</span>
    </div> `,
  medium: `
    <div class="link-holder">
      <a class="link" target="_blank">
        <img alt="Superhero Icon" />
        <span>Donate Now</span>
      </a>
    </div>
    <div class="tips-amount">
      <span class="tips">0</span>
      <span class="ae">AE</span>
    </div>`,
  large: `
    <div class="tips-amount">
      <span class="tips">0</span>
      <span class="ae">AE</span>
    </div>
    <div class="link-holder">
      <a class="link" target="_blank">
        <img alt="Superhero Icon" />
        <span>Donate Now</span>
      </a>
    </div>`
};

const createButtonInstance = ({ size, url, account }) => {
  if (!templates[size]) throw new Error('Unsupported size');
  var button = document.createElement('button');
  button.innerHTML = templates[size];
  button.className = `superhero-button superhero-button-${size}`;
  const isMobile = navigator.userAgent.includes('Mobi');
  let deeplink = new URL('https://wallet.superhero.com/tip');
  if (isMobile) {
    deeplink.searchParams.set('url', encodeURIComponent(url));
    deeplink.searchParams.set('x-success', url);
    deeplink.searchParams.set('x-cancel', url);
  } else {
    const storeLinks = {
      firefox: 'https://addons.mozilla.org/en-US/firefox/addon/superhero-wallet/',
      chrome: 'https://chrome.google.com/webstore/detail/superhero/mnhmmkepfddpifjkamaligfeemcbhdne'
    };
    const { name } = detect();
    if (storeLinks[name]) deeplink = new URL(storeLinks[name]);
  }
  
  var link = button.querySelector(".link");
  link.href = deeplink;

  // add data-account atribute for claiming
  if (account) link.setAttribute("data-account", account);
  // add data-url atribute to be detected by wallet extension
  link.setAttribute("data-url", url);

  const getTips = async () =>  {
    const { by_url } = await (await fetch('https://raendom-backend.z52da5wt.xyz/cache/stats')).json();
    const tips = by_url.find(u => u.url === url) || {};
    
    var tipsEl = button.querySelector(".tips");
    if (tipsEl) tipsEl.innerHTML = tips.total_amount || 0;
  }

  getTips();

  const img = button.querySelector("img");
  img.src = icon;
  return button;
}

const insertStyles = () => {
  if (process.env.INLINE_CSS) {
    const style = document.querySelector("style.superhero-button-styles");
    if (style) return;
    const styles = document.createElement('style');
    const content = document.createTextNode(css.toString());
    styles.appendChild(content);
    styles.className = "superhero-button-styles";
    const head = document.getElementsByTagName('head')[0];    
    head.insertBefore(styles, head.childNodes[0]);
  }
}

const isNodeList = (nodes) =>  NodeList.prototype.isPrototypeOf(nodes);

const superheroButton = (element, options) => {
  const opt = { ...defaults, ...options };
  insertStyles(opt);
  const el = typeof element === 'string' ? document.querySelectorAll(element) : element;
  let instance;
  if (isNodeList(el)) {
    let buttonInstances = [];
    el.forEach(e => {
      const instance = createButtonInstance(opt);
      buttonInstances.push(instance);
      e.replaceWith(instance);
    });
    instance = buttonInstances;
  } else {
    instance = createButtonInstance(opt);
    el.replaceWith(instance);
  }

  return instance;
};

export default superheroButton;
