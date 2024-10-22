import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Possible viewport types
 * @enum {string}
 */
enum ViewportType {
    MOBILE ='mobile',
    DESKTOP = 'desktop'
}

/**
 * A custom navigation group element that switches between mobile and desktop layouts
 * based on the defined viewport
 *
 * @class
 * @extends {LitElement}
 */
@customElement('t-nav-group')
export class TNavGroup extends LitElement {
    /**
     * The breakpoint at which the navigation switches from mobile to desktop (value in px)
     * @type {number}
     * @default 840
     */
    @property({ type: String, attribute: 'nav-group-breakpoint' })
    breakpoint: number = 840

    /**
     * The current viewport type, either 'mobile' or 'desktop'.
     * This property reflects the current viewport type in the element's attribute.
     * @type {ViewportType}
     * @default {ViewportType.MOBILE}
     */
    @property({ type: String, reflect: true, attribute: 'viewport-type' })
    viewportType: ViewportType = ViewportType.MOBILE;

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', () => this.updateViewportType());

        this.updateViewportType();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', () => this.updateViewportType());
    }

    /**
     * Update the viewport type based on the current window size and the defined breakpoint.
     */
    updateViewportType() {
        const mediaQuery = window.matchMedia(`(min-width: ${this.breakpoint}px)`);
        this.viewportType = mediaQuery.matches ? ViewportType.DESKTOP : ViewportType.MOBILE;
    }
}
