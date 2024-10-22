import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

enum ViewportType {
    MOBILE ='mobile',
    DESKTOP = 'desktop'
}

@customElement('t-nav-group')
export class TNavGroup extends LitElement {
    @property({ type: String, attribute: 'nav-group-breakpoint' })
    breakpoint = 840

    @property({ type: String, reflect: true, attribute: 'viewport-type' })
    viewportType: ViewportType = ViewportType.MOBILE;

    render() {
        return html`
            <slot name="topbar">
                <slot name="topbar-logo"></slot>
                <slot name="topbar-actions"></slot>
                <slot name="topbar-burger-button"></slot>
                <slot name="topbar-mobile-navs">
                    <slot name="topbar-language-picker"></slot>
                    <slot name="topbar-main-nav"></slot>
                    <slot name="topbar-service-nav"></slot>
                </slot>
            </slot>
        `
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

    updateViewportType() {
        const mediaQuery = window.matchMedia(`(min-width: ${this.breakpoint}px)`);
        this.viewportType = mediaQuery.matches ? ViewportType.DESKTOP : ViewportType.MOBILE;
    }
}
