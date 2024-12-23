import { CSSResultGroup, LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

const cssClass: CSSResultGroup = css`
  :host {
    .kantor-header-main {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      padding-left: var(--kantor-header-main-padding-horizontal, 3rem);
      padding-right: var(--kantor-header-main-padding-horizontal, 3rem);
      padding-top: var(--kantor-header-main-padding-vertical, 1.2rem);
      padding-bottom: var(--kantor-header-main-padding-vertical, 1.2rem);
      background-color: var(--kantor-background-primary, oklch(0.99 0 0));
    }
  }
`;

@customElement("kantor-header")
export class KantorHeader extends LitElement {
  static styles = cssClass;

  render() {
    return html`
      <header class="kantor-header-main" part="main">
        <slot name="left" part="left"></slot>
        <slot name="right" part="right"></slot>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kantor-header": KantorHeader;
  }
}
