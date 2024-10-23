class ToujouDialogToggle extends HTMLButtonElement {
    private dialog: HTMLDialogElement | null = null;
    private isOpen: boolean = false;

    constructor() {
        super();
    }

    connectedCallback() {
        const dialogId = this.getAttribute('dialog-id');
        if (!dialogId) {
            console.warn(`dialog-id attribute missing!`);
            return;
        }

        this.dialog = document.getElementById(dialogId) as HTMLDialogElement;
        if (!dialogId) {
            console.warn(`Dialog element with ID "${dialogId}" not found.`);
            return;
        }

        // Initialize ARIA attributes for accessibility
        this.setAttribute('aria-controls', dialogId);

        this.addEventListener('click', this.toggleDialog);
        this.dialog.addEventListener('close', this.updateButtonState.bind(this));

        this.updateButtonState();
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.toggleDialog.bind(this));

        // Clean up the dialog close event listener
        if (this.dialog) {
            this.dialog.removeEventListener('close', this.updateButtonState.bind(this));
        }
    }

    private toggleDialog = () => {
        if (!this.dialog) return;

        this.isOpen
            ? this.dialog.close()
            : this.dialog.show(); // using showModal prevent click on topbar elements

        this.isOpen = !this.isOpen;
    }

    // Update button state based on the dialog's state
    private updateButtonState() {
        this.setAttribute('aria-expanded', String(this.isOpen));
        this.setAttribute('aria-pressed', String(this.isOpen));
    }
}

// Register the custom element
customElements.define('toujou-dialog-toggle', ToujouDialogToggle, { extends: 'button' });
