import {buttonRandom, buttonStart, container, select, slider, config} from './data.js'

export function clearContainer(blocks) {
  const mas = Array.from(blocks);
  mas.forEach((item) => item.remove())
}

const block = (col) => {
  let newBlock = document.createElement('div');
  let height = Math.floor(Math.random() * (config[0]) + 1);
  let width = Math.floor((config[1] - col) / col);
  let style = `height: ${height}px; width: ${width}px;`
  newBlock.classList.add('container__block');
  newBlock.setAttribute('style', style);
  return newBlock
}

export function renderStart(col) {
  for (let i = 0; i < col; i++){
    container.append(block(col));
  }
}

export function changeBlock(block1, block2) {
  block2.after(block1);
}

export function disabledButtons () {
  const percent = (slider.value / config[2])
  const color = `background: linear-gradient(90deg, black ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  buttonStart.setAttribute('disabled', '');
  buttonStart.classList.add('disabled');
  buttonRandom.setAttribute('disabled', '');
  buttonRandom.classList.add('disabled');
  slider.setAttribute('disabled', '');
  slider.classList.add('config__range_disabled');
  slider.setAttribute('style', color);
  select.setAttribute('disabled', '');
  select.classList.add('disabled');
}

export function nonDisabledButtons() {
  const percent = (slider.value / config[2]);
  const color = `background: linear-gradient(90deg, rgb(257, 127, 80) ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  buttonStart.removeAttribute('disabled', '');
  buttonStart.classList.remove('disabled');
  buttonRandom.removeAttribute('disabled', '');
  buttonRandom.classList.remove('disabled');
  slider.removeAttribute('disabled', '');
  slider.classList.remove('config__range_disabled');
  slider.setAttribute('style', color);
  select.removeAttribute('disabled', '');
  select.classList.remove('disabled');``
}
