/**
 * Represents a list item that can contain a popover sub-navigation.
 *
 * Create and add correct anchor-name and position-anchor css rules to the list item and the child subnav elements
 *
 * @class TMainNavLiWithPopoverSubnav
 * @extends {HTMLLIElement}
 */
class TMainNavLiWithPopoverSubnav extends HTMLLIElement {
    private childSubnav: HTMLUListElement | null = null;

    private readonly SELECTORS = {
        CHILD_POPOVER_SUBNAV: '.main-nav__list[popover]',
    };

    constructor() {
        super();

        this.childSubnav = this.querySelector(this.SELECTORS.CHILD_POPOVER_SUBNAV);
        if (!this.childSubnav) return;

        this._init();
    }

    _init = () => {
        const anchorName = `--anchorName-${this.id}`;
        this.style.setProperty('anchor-name', anchorName);
        this.childSubnav?.style.setProperty('position-anchor', anchorName);
    }
}

customElements.define('t-main-nav-li-with-popover-subnav', TMainNavLiWithPopoverSubnav, { extends: 'li' });
