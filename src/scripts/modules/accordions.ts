const CLASS_OPEN = '_open';

class Accordions {
  private accordionList: Element[] = [];
  private openerList: Element[] = [];
  private nameOfOpenList: string[] = [];

  constructor() {
    this.accordionList = [...document.querySelectorAll('[data-accordion]')];
    this.openerList = [...document.querySelectorAll('[data-accordion-opener]')];

    this.openerList.forEach((opener) =>
      opener.addEventListener('click', (event) =>
        this.openerClickListener({ event, opener }),
      ),
    );
  }

  private openerClickListener({
    event,
    opener,
  }: {
    event: Event;
    opener: Element;
  }) {
    event.preventDefault();

    const name = opener.getAttribute('data-accordion-opener');
    const accordion = this.accordionList.find(
      (el) => el.getAttribute('data-accordion') === name,
    );

    if (!name || !accordion) {
      return;
    }

    const isOpen = this.nameOfOpenList.includes(name);

    if (isOpen) {
      this.close(name);
    } else {
      this.open(name);
    }
  }

  private open(name: string) {
    const accordion = this.accordionList.find(
      (el) => el.getAttribute('data-accordion') === name,
    );
    const isOpen = this.nameOfOpenList.includes(name);

    if (!accordion || isOpen) {
      return;
    }

    this.nameOfOpenList.push(name);
    accordion.classList.add(CLASS_OPEN);
  }

  private close(name: string) {
    const accordion = this.accordionList.find(
      (el) => el.getAttribute('data-accordion') === name,
    );
    const index = this.nameOfOpenList.indexOf(name);

    if (!accordion || index === -1) {
      return;
    }

    this.nameOfOpenList.splice(index, 1);
    accordion.classList.remove(CLASS_OPEN);
  }

  public closeAll() {
    this.accordionList.forEach((accordion) => {
      const name = accordion.getAttribute('data-accordion');
      name && this.close(name);
    });
  }
}

export default new Accordions();
