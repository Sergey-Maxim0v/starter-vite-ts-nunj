const DOCUMENT_CLASS_LIST = document.documentElement.classList;
const CLASS_OPEN_HTML = '_modal-open';
const CLASS_OPEN_MODAL = '_open';

class Modals {
  private modalList: Element[] = [];
  private openerList: Element[] = [];
  private closerList: Element[] = [];

  private keyboardListener(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      event.stopPropagation();
      this.close();
    }
  }

  constructor() {
    this.modalList = [...document.querySelectorAll('[data-modal]')];
    this.openerList = [...document.querySelectorAll('[data-modal-opener]')];
    this.closerList = [...document.querySelectorAll('[data-modal-closer]')];

    this.openerList.forEach((btn) =>
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const modalName = btn.getAttribute('data-modal-opener');
        this.open(modalName);
      }),
    );

    this.closerList.forEach((element) =>
      element.addEventListener('click', (event) => {
        event.preventDefault();
        this.close();
      }),
    );
  }

  open(name?: string | null) {
    const modal = this.modalList.find(
      (el) => el.getAttribute('data-modal') === name,
    );

    if (!modal || !name) {
      return;
    }

    DOCUMENT_CLASS_LIST.add(CLASS_OPEN_HTML);
    modal.classList.add(CLASS_OPEN_MODAL);

    window.addEventListener('keydown', (event) => this.keyboardListener(event));
  }

  close() {
    DOCUMENT_CLASS_LIST.remove(CLASS_OPEN_HTML);
    this.modalList.forEach((el) => el.classList.remove(CLASS_OPEN_MODAL));

    window.removeEventListener('keydown', (event) =>
      this.keyboardListener(event),
    );
  }
}

export default new Modals();
