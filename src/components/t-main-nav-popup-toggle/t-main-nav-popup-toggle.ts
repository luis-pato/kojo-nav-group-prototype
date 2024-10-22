/**
 * Check if a button should be used to open a popover and set correct popoverTargetElement property
 *
 * @class TMainNavPopupToggle
 * @extends {HTMLButtonElement}
 */
class TMainNavPopupToggle extends HTMLButtonElement {
    private parentItem: HTMLLIElement | null = null;
    private siblingPopup: HTMLUListElement | null = null;

    private readonly SELECTORS = {
        PARENT_LIST_ITEM: '.main-nav__item',
        SIBLING_POPUP: '.main-nav__list[popover]'
    };

    constructor() {
        super();

        this.parentItem = this.closest(this.SELECTORS.PARENT_LIST_ITEM);
        if (!this.parentItem) return;

        this.siblingPopup = this.parentItem.querySelector(this.SELECTORS.SIBLING_POPUP);
        if (!this.siblingPopup) return;

        this.addEventListener('click', this._onClick);
    }

    _onClick = () => {
        this.popoverTargetElement = this.siblingPopup;
    }
}

customElements.define('t-main-nav-toggle', TMainNavPopupToggle, { extends: 'button' });
