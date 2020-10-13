import { getCurrentPage } from './assets/scripts/page.js';
import pages from './components/pages/index.js';

class Presentation extends HTMLElement {
  constructor() {
    super();
    const currentPage = getCurrentPage();
    const currentContent = pages[currentPage];

    // this.attachShadow({ mode: 'open' });
    // this.shadowRoot.appendChild(currentContent.content.cloneNode(true));

    this.appendChild(currentContent.content.cloneNode(true))
  }
}

customElements.define('watch-mode', Presentation);
