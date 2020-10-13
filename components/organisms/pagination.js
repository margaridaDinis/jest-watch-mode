import pages from '../pages/index.js';
import { keyUpNav } from '../../assets/scripts/listeners.js';
import navigationItem from '../../assets/scripts/navigationItem.js';
import nav from '../molecules/nav.js';

class Pagination extends HTMLElement {
  constructor() {
    super();

    const navItems = pages.map((_, i) => navigationItem(i));

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(nav.content.cloneNode(true));
    this.shadowRoot.querySelector('.pagination').innerHTML = navItems.join('');
  }

  connectedCallback() {
    keyUpNav();
  }
}

customElements.define('app-pagination', Pagination);
