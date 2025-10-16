const m = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20viewBox='0%200%2029%2023'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3efavicon%3c/title%3e%3cg%20id='Page-5'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%20stroke-linejoin='round'%3e%3cg%20id='favicon'%20transform='translate(-32.000000,%201.000000)'%20fill='%231161FE'%20fill-rule='nonzero'%20stroke='%231161FE'%20stroke-width='0.3'%3e%3cpath%20d='M39.5547031,4.70734562e-14%20L52.971793,0.0044510617%20L60.5265191,7.06633581%20L55.7336274,11.7613926%20L55.6638476,11.8805256%20L55.6128245,11.8799444%20L46.3057414,21%20L32,7.06123024%20L39.5547031,4.70734562e-14%20Z%20M40.4110376,2.16863973%20L35.1405915,7.09482056%20L46.3004765,17.9684317%20L53.2928101,11.1168608%20L44.512471,2.16994879%20L40.4110376,2.16863973%20Z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
async function c(t) {
  const e = await fetch(t);
  if (!e.ok) throw new Error("Failed to fetch JSON");
  return e.json();
}
const l = (t, e, s) => {
  const i = typeof t == "number", n = new URL("https://wallet.superhero.com/account");
  n.searchParams.set("payload", i ? `TIP_POST:${t}` : "TIP_PROFILE"), n.searchParams.set("account", i ? e : t);
  const o = "https://superhero.com/";
  return n.searchParams.set("x-success", o), n.searchParams.set("x-cancel", o), Object.entries(s).filter(([, a]) => ![void 0, null].includes(a)).forEach(([a, r]) => n.searchParams.set(a, r)), n;
}, g = async (t) => {
  try {
    if (typeof t == "number")
      return +(await c(`https://api.superhero.com/api/tips/posts/${t}_v3/summary`)).totalTips;
    const e = t.endsWith(".chain") ? (await c(`https://mainnet.aeternity.io/v3/names/${t}`)).pointers.find(
      ({ key: s }) => s === "account_pubkey"
    )?.id : t;
    return +(await c(`https://api.superhero.com/api/tips/accounts/${e}/summary`)).totalTipsReceived;
  } catch {
    return 0;
  }
};
class f extends HTMLElement {
  static get observedAttributes() {
    return ["target", "size"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  getParsedTarget() {
    const e = this.getAttribute("target");
    if (e == null) return;
    const s = Number(e);
    return Number.isInteger(s) ? s : e;
  }
  getSize() {
    return this.getAttribute("size") || "icon";
  }
  getOptionsFromAttributes() {
    const e = {};
    for (const s of this.getAttributeNames())
      s === "target" || s === "size" || (e[s] = this.getAttribute(s));
    return e;
  }
  render() {
    const e = this.getParsedTarget(), s = this.getSize(), i = this.getOptionsFromAttributes(), n = (r = "") => `
      <a href="${l(e, void 0, i)}">
        <img alt="Superhero Icon" src="${m}" />
        ${r && `<span>${r}</span>`}
      </a>`, o = `
      <div class="tips-amount">
        <span class="tips">0</span>
        <span class="ae">AE</span>
      </div>`, a = {
      icon: n(),
      small: n("Donate") + o,
      medium: n("Donate Now") + o,
      large: o + n("Donate Now")
    };
    if (!a[s]) throw new Error("Unsupported size");
    this.className = `superhero-utils-button ${s}`, this.innerHTML = a[s], (async () => {
      if (typeof e != "number") return;
      const { sender_address: r } = await c(
        `https://api.superhero.com/api/posts/${e}_v3`
      );
      this.querySelector("a")?.setAttribute(
        "href",
        l(e, r, i)
      );
    })(), (async () => {
      const r = this.querySelector(".tips");
      r && e != null && (r.innerHTML = String(await g(e)));
    })();
  }
}
customElements.get("superhero-button") || customElements.define("superhero-button", f);
const u = "superhero-paywall-paid-targets", p = "superhero-paywall-tip-result", d = "success", h = () => localStorage[u] ? JSON.parse(localStorage[u]) : [], w = (t) => {
  const e = h();
  e.includes(t) || (e.push(t), localStorage[u] = JSON.stringify(e));
}, b = async (t) => {
  if (new URL(window.location).searchParams.get(p) === d && w(t), h().includes(t)) return;
  const e = document.createElement("div");
  e.className = "superhero-utils-paywall";
  const s = new URL(window.location.href);
  s.searchParams.set(p, d), e.innerHTML = `
    <div class="modal">
      You need to leave a tip to continue
      <br />
      <superhero-button target="${t}" size="small" x-success="${s}"></superhero-button>
    </div>
  `, document.body.style.overflow = "hidden", document.body.appendChild(e);
};
export {
  f as Button,
  b as ensurePaid
};
