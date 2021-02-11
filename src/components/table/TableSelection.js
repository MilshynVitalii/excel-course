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

  clear() {
    this.groop.forEach($el => $el.removeClass(TableSelection.className));
    this.groop.length = 0;
  }

  selectGroup($groop = []) {
    this.clear();
    this.groop = $groop;
    this.groop.forEach($el => $el.addClass(TableSelection.className));
  }
}
