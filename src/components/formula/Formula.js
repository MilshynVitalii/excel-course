import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      subscribe: ['currentText'],
      ...options
    });
  }

  init() {
    super.init();
    this.$input = this.$root.find('#input');

    this.$on('table:select', $cell => {
      this.$input.text($cell.data.value);
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="input" class="input" contenteditable spellcheck="false"></div>
    `;
  }

  storeChanged({currentText}) {
    this.$input.text(currentText);
  }

  onInput(event) {
    const text = event.target.textContent.trim();
    this.$emit('formula:input', text);
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit('formula:enter');
    }
  }
}
