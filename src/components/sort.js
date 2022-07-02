import { container, slider } from "./data";
import { changeBlock } from "./render";

export function speed() {
  if (slider.value < 30){
    return 100
  } else {
    return 1
  }
}

export function translate(element) {
  element = element.getAttribute('style').split(';');
  element = parseInt(element[0].match(/\d+/));
  return element
}

export function* bubleSort() {
  let countBlock = container.querySelectorAll('.container__block')
  for (let i = 0; i < countBlock.length; i++){
    if (breks === countBlock.length - 1){
      return
    }
    const breks = 0;
    for (let k = 0; k < countBlock.length; k++){
      countBlock = container.querySelectorAll('.container__block');
      if (k === countBlock.length - 1){
        continue
      } else {
        countBlock[k].classList.add('container__block_active');
        countBlock[k+1].classList.add('container__block_active');
      }
      if (translate(countBlock[k]) > translate(countBlock[k+1])){
        changeBlock(countBlock[k], countBlock[k+1])
      } else {
        breks++
      }
      yield
      countBlock[k].classList.remove('container__block_active');
      countBlock[k+1].classList.remove('container__block_active');
    }
  }
}

