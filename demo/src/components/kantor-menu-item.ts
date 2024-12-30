import { CSSResultGroup, LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const cssClass: CSSResultGroup = css`
  :host {
    .kantor-menu-item {
      display: flex;
      justify-content: space-between;
      gap: var(--kantor-menu-item-gap, 2rem);
      flex-direction: row;
      align-items: center;
      padding-left: var(--kantor-menu-item-padding-horizontal, 3rem);
      padding-right: var(--kantor-menu-item-padding-horizontal, 3rem);
      padding-top: var(--kantor-menu-item-padding-vertical, 1.2rem);
      padding-bottom: var(--kantor-menu-item-padding-vertical, 1.2rem);
      background-color: var(
        --kantor-menu-item-background-main,
        --kantor-background-primary
      );
    }
  }

  :host([isMinimized]) {
    .kantor-menu-item-label {
      display: none;
    }
  }
`;

@customElement("kantor-menu-item")
export class KantorMenuItem extends LitElement {
  static styles = cssClass;

  @property({ type: String })
  label = "";

  @property({ type: Boolean, reflect: true })
  isMinimized = false;

  render() {
    return html`
      <li class="kantor-menu-item" part="main-container">
        <slot name="icon-slot" part="icon-slot"></slot>
        <span class="kantor-menu-item-label" part="label-slot">
          ${this.label}
        </span>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kantor-menu-item": KantorMenuItem;
  }
}
