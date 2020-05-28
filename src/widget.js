const { detect } = require('detect-browser');

const defaults = {
  size: 'icon',
  url: window.location.href,
  importCss: false,
  version: 1,
  all: false
};

const templates = {
  icon: `<div class="superhero-button-link-holder">
            <a id="superhero-tip-link" class="superhero-button-link" target="_blank">
              <img src="../img/v1-icon.png" />
            </a>
          </div>`,
  small: `<div class="superhero-button-link-holder">
            <a id="superhero-tip-link" class="superhero-button-link" target="_blank">
              <img src="../img/v1-icon.png" />
              <span>Donate</span>
            </a>
          </div>
          <div class="superhero-button-tips-amount"><span id="tips">0</span><span class="ae">AE</span></div>`,
  medium: `<div class="superhero-button-link-holder">
            <a id="superhero-tip-link" class="superhero-button-link" target="_blank">
              <img src="../img/v1-icon.png" />
              <span>Donate Now</span>
            </a>
          </div>
          <div class="superhero-button-tips-amount"><span id="tips">0</span><span class="ae">AE</span></div>`,
  large: `<div class="superhero-button-tips-amount"><span id="tips">0</span><span class="ae">AE</span></div>
          <div class="superhero-button-link-holder">
            <a id="superhero-tip-link" class="superhero-button-link" target="_blank">
              <img src="../img/v1-icon.png" />
              <span>Donate Now</span>
            </a>
          </div>`
};

class SuperheroButton {
  
  constructor(element, options) {
    const opt = { ...defaults, ...options };
    this.insertStyles(opt);
    const el = this.isDomNode(element) || this.isNodeList(element) ? element : opt.all ? document.querySelectorAll(element) : document.querySelector(element);
    if (this.isNodeList(el)) {
      let buttonInstances = [];
      el.forEach(e => {
        const instance = this.createButtonInstance(opt);
        buttonInstances.push(instance);
        e.replaceWith(instance);
      });
      this.instance = buttonInstances;
    } else {
      this.instance = this.createButtonInstance(opt);
      el.replaceWith(this.instance);
    }
  }

  isDomNode(element) {
    return element instanceof Element || element instanceof HTMLDocument
  }

  isNodeList(nodes) {
    return NodeList.prototype.isPrototypeOf(nodes);
  }

  getInstance() {
    return this.instance;
  }

  createButtonInstance({ size, url, account }) {
    if (!templates[size]) throw new Error('Unsupported size');
    var button = document.createElement('button');
    button.innerHTML = templates[size];
    button.className = `superhero-button-container superhero-button-${size}`;
    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
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
    
    var link = button.querySelector("#superhero-tip-link");
    link.href = deeplink;

    // add data-account atribute for claiming
    if (account) link.setAttribute("data-account", account);
    // add data-url atribute to be detected by wallet extension
    link.setAttribute("data-url", url);

    fetch('https://raendom-backend.z52da5wt.xyz/cache/stats')
    .then(res => res.json())
    .then(res => {
      const tips = res.by_url.find(u => u.url === url);
      var tipsEl = button.querySelector("#tips");
      if (tipsEl) tipsEl.innerHTML = tips ? tips.total_amount : 0;
    });

    return button;
  }

  insertStyles({ importCss }) {
    let css;
    if (importCss) {
      css = document.createElement('style');
      const content = document.createTextNode('');
      css.appendChild(content);
    } 

    css = document.createElement( "link" );
    css.href = "https://superhero.com/buttons/style.css";
    css.type = "text/css";
    css.rel = "stylesheet";
    
    
    const head = document.getElementsByTagName('head')[0];         
    head.insertBefore(css, head.childNodes[2]);
  }
}


const superheroButton = function(element, options) {
  return new SuperheroButton(element, options).getInstance();
};

if (typeof window !== 'undefined') {
  window.superheroButton = superheroButton;
}

module.exports = superheroButton;
