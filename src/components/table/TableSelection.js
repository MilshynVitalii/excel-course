export class TableSelection {
  static className = 'selected';

  constructor() {
    this.groop = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    $el.focus().addClass(TableSelection.className);
    this.groop.push($el);
    this.current = $el;
  }

  get selectedIds() {
    return this.groop.map($el => $el.id());
  }

  clear() {
    this.groop.forEach($el => $el.removeClass(TableSelection.className));
    this.groop.length = 0;
  }

  selectGroup($groop = []) {
    this.clear();
    this.groop = $groop;
    this.groop.forEach($el => $el.addClass(TableSelection.className));
  }

  applyStyle(style) {
    this.groop.forEach($el => $el.css(style));
  }
}
