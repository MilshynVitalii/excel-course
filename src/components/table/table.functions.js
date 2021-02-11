import {range} from '@core/utils';

export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.id;
}

export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);
  const colls = range(current.col, target.col);
  const rows = range(current.row, target.row);
  return colls.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc;
  }, []);
}

export function nextSelector(key, {col, row}) {
  const [lastRow, lastCol] = document.querySelector('.excel__table')
      .lastElementChild
      .lastElementChild
      .lastElementChild
      .dataset
      .id
      .split(':');
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row = row < lastRow ? row + 1 : row;
      break;
    case 'Tab':
    case 'ArrowRight':
      col = col < lastCol ? col + 1 : col;
      break;
    case 'ArrowLeft':
      col = col === 0 ? col : col - 1;
      break;
    case 'ArrowUp':
      row = row === 1 ? row : row - 1;
      break;
  }

  return `[data-id="${row}:${col}"]`;
}
