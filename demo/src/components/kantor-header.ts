import { CSSResultGroup, LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

const cssClass: CSSResultGroup = css`
  :host {
    .kantor-header-main {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      padding-left: var(--kantor-header-padding-horizontal, 3rem);
      padding-right: var(--kantor-header-padding-horizontal, 3rem);
      padding-top: var(--kantor-header-padding-vertical, 1.2rem);
      padding-bottom: var(--kantor-header-padding-vertical, 1.2rem);
      background-color: var(
        --kantor-header-background-main,
        --kantor-background-primary
      );
    }

    slot::slotted(*) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    slot[name="left-component-slot"]::slotted(*) {
      justify-content: start;
      color: var(
        --kantor-header-text-color-left-slot,
        --kantor-text-color-primary
      );
      background-color: var(
        --kantor-header-background-left-slot,
        --kantor-background-color-primary
      );
    }

    slot[name="right-component-slot"]::slotted(*) {
      justify-content: end;
      color: var(
        --kantor-header-text-color-right-slot,
        --kantor-text-color-primary
      );
      background-color: var(
        --kantor-header-background-right-slot,
        --kantor-background-color-primary
      );
    }
  }
`;

@customElement("kantor-header")
export class KantorHeader extends LitElement {
  static styles = cssClass;

  @state()
  private _isButtonSlotFilled = false;

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
    const setLeftSideComponent = (slotFilled: boolean) => {
      if (!slotFilled)
        return html` <slot
          name="left-component-slot"
          part="left-component-slot"
        ></slot>`;
      return html`<div part="left-slot">
        <slot name="button-slot" part="button-slot"></slot>
        <slot name="left-component-slot" part="left-component-slot"></slot>
      </div>`;
    };

    return html`
      <header class="kantor-header-main" part="main-container">
        ${setLeftSideComponent(this._isButtonSlotFilled)}
        <slot name="right-component-slot" part="right-component-slot"></slot>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kantor-header": KantorHeader;
  }
}
