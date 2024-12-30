import { CSSResultGroup, LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

const cssClass: CSSResultGroup = css`
  :host {
    .kantor-menu-list-title {
      display: flex;
      justify-content: space-between;
      gap: var(--kantor-menu-item-gap, 2rem);
      flex-direction: row;
      align-items: center;
      padding-left: var(--kantor-menu-item-padding-horizontal, 3rem);
      padding-right: var(--kantor-menu-item-padding-horizontal, 3rem);
      padding-top: var(--kantor-menu-item-padding-vertical, 1.2rem);
      padding-bottom: var(--kantor-menu-item-padding-vertical, 1.2rem);
      background-color: var(--kantor-menu-item-background-main, transparent);
    }
  }

  :host([isMinimized]) {
    .kantor-menu-list-label {
      display: none;
    }
  }
`;

@customElement("kantor-sidebar")
export class KantorSidebar extends LitElement {
  static styles = cssClass;

  @state()
  private _isButtonSlotFilled = false;

  @property({ type: String })
  title = "";

  @property({ type: Boolean, reflect: true })
  isMinimized = false;

  private buttonSlot = this.shadowRoot?.querySelector<HTMLSlotElement>(
    'slot[name="button-slot"]'
  );

  firstUpdated() {
    this.buttonSlot?.addEventListener("slotchange", () =>
      this.updateButtonSlotState()
    );
    this.updateButtonSlotState(); // Initial check
  }

  private updateButtonSlotState() {
    this._isButtonSlotFilled = !!this.buttonSlot?.assignedNodes().length;
  }

  render() {
    const setHeaderComponent = (slotFilled: boolean) => {
      if (!slotFilled) return null;
      return html` <div class="kantor-menu-list-title">
        <div>
          <slot name="icon-slot" part="icon-slot"></slot>
          <span class="kantor-menu-list-label" part="label-slot">
            ${this.title}
          </span>
        </div>
        <slot name="button-slot"></slot>
      </div>`;
    };

    return html`
      <div class="kantor-menu-list" part="main-container">
        ${setHeaderComponent(this._isButtonSlotFilled)}
        <ul>
          <slot name="items-slot" part="items-slot"></slot>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kantor-sidebar": KantorSidebar;
  }
}
