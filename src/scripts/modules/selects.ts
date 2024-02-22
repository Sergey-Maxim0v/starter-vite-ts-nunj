const CLASSNAME_OPEN = '_open';

class Select {
  private readonly selectElement: Element;
  private readonly openerElement: Element | null;
  private readonly titleElement: Element | null;
  private readonly inputElementList: NodeListOf<Element>;
  private readonly placeholder: string;
  private value: string;

  private readonly beforeOpening: VoidFunction;
  isOpen = false;

  constructor(element: Element, beforeOpening: VoidFunction) {
    this.selectElement = element;
    this.openerElement = element.querySelector('[data-select-opener]');
    this.titleElement = element.querySelector('[data-select-title]');
    this.inputElementList = element.querySelectorAll('[data-select-input]');

    this.beforeOpening = beforeOpening;
    this.isOpen = this.selectElement.classList.contains(CLASSNAME_OPEN);

    if (this.openerElement) {
      this.openerElement.addEventListener('click', () => this.toggle());
    }

    this.inputElementList.forEach((input) =>
      input.addEventListener('change', () => {
        this.value = input.getAttribute('data-select-input') ?? '';
        this.writeTitle();
        this.close();
      }),
    );

    this.placeholder = this.titleElement?.innerHTML.trim() ?? '';
    this.value = this.getDefaultValue();
    this.writeTitle();
  }

  public open() {
    this.beforeOpening?.();
    this.selectElement.classList.add(CLASSNAME_OPEN);
    this.isOpen = true;
  }

  public close() {
    this.selectElement.classList.remove(CLASSNAME_OPEN);
    this.isOpen = false;
  }

  public toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  private getDefaultValue(): string {
    const checkedInput = Array.from(this.inputElementList).find((input) =>
      input.hasAttribute('checked'),
    );

    return checkedInput?.getAttribute('data-select-input') ?? '';
  }

  private writeTitle() {
    const content = this.value || this.placeholder;

    if (this.titleElement) {
      this.titleElement.innerHTML = content;
    }
  }
}

class Selects {
  private selectNodeList: NodeListOf<Element>;
  public selects: Select[] = [];

  constructor() {
    this.selectNodeList = document.querySelectorAll('[data-select]');

    this.selectNodeList.forEach((element) =>
      this.selects.push(new Select(element, () => this.closeAll())),
    );
  }

  public closeAll() {
    this.selects.forEach((select: Select) => select.close());
  }
}

export default new Selects();
