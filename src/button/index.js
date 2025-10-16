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

export default class SuperheroButton extends HTMLElement {
  static get observedAttributes() {
    return ['target', 'size'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  getParsedTarget() {
    const raw = this.getAttribute('target');
    if (raw == null) return undefined;
    const asNumber = Number(raw);
    return Number.isInteger(asNumber) ? asNumber : raw;
  }

  getSize() {
    return this.getAttribute('size') || 'icon';
  }

  getOptionsFromAttributes() {
    const options = {};
    for (const name of this.getAttributeNames()) {
      if (name === 'target' || name === 'size') continue;
      options[name] = this.getAttribute(name);
    }
    return options;
  }

  render() {
    const target = this.getParsedTarget();
    const size = this.getSize();
    const options = this.getOptionsFromAttributes();

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

    this.className = `superhero-utils-button ${size}`;
    this.innerHTML = templates[size];

    (async () => {
      if (typeof target !== 'number') return;
      const { sender_address } = await fetchJson(
        `https://api.superhero.com/api/posts/${target}_v3`,
      );
      this.querySelector('a')?.setAttribute(
        'href',
        genTipDeepLink(target, sender_address, options),
      );
    })();

    (async () => {
      const tipsEl = this.querySelector('.tips');
      if (tipsEl && target != null) tipsEl.innerHTML = String(await getTipAmount(target));
    })();
  }
}

if (!customElements.get('superhero-button')) {
  customElements.define('superhero-button', SuperheroButton);
}
