const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
    * {
      font-size: 100%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 3rem;
      height: 3rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
    }
  </style>
 
  <p>I did like Ben's book, but he kept going on about Scones. For example:</p>
  <blockquote>
  All this writing about scones in our sample page and there's of the beauties! I'm going to add in an image of a scone near the bottom of the page; a sort of 'hero' image to entice users to read the page.
  </blockquote> 
  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>

  `;

class MBblockquote extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('blockquote').onclick = () => this.inc();
    this.shadowRoot.querySelector('p').onclick = () => this.dec();
    this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById('count').innerHTML = count;
  }
}

customElements.define('mb-blockquote', MBblockquote);
export {MBblockquote};
