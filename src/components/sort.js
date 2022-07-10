import { container, slider } from "./data";
import { changeBlock } from "./render";

export function speed() {
  if (slider.value < 30) {
    return 100;
  } else {
    return 1;
  }
}

export function translate(element) {
  element = element.getAttribute("style").split(";");
  element = parseInt(element[0].match(/\d+/));
  return element;
}

export function* bubleSort() {
  let countBlock = container.querySelectorAll(".container__block");
  for (let i = 0; i < countBlock.length; i++) {
    if (breks === countBlock.length - 1) {
      return;
    }
    const breks = 0;
    for (let k = 0; k < countBlock.length - i - 1; k++) {
      countBlock = container.querySelectorAll(".container__block");
      countBlock[k].classList.add("container__block_active");
      countBlock[k + 1].classList.add("container__block_active");
      if (translate(countBlock[k]) > translate(countBlock[k + 1])) {
        changeBlock(countBlock[k], countBlock[k + 1]);
      } else {
        breks++;
      }
      yield;
      countBlock[k].classList.remove("container__block_active");
      countBlock[k + 1].classList.remove("container__block_active");
    }
  }
}

export function* shackeSort() {
  let countBlock = Array.from(container.querySelectorAll(".container__block"));
  let q = 0;
  let i = 0;
  let breks = ["t"];
  for (let m = 0; m < countBlock.length; m++) {
    if (!breks.includes("t")) {
      return;
    }
    breks = [];
    if (m % 2 === 0) {
      for (let k = q; k < countBlock.length - i - 1; k++) {
        countBlock = container.querySelectorAll(".container__block");
        countBlock[k].classList.add("container__block_active");
        countBlock[k + 1].classList.add("container__block_active");
        if (translate(countBlock[k]) > translate(countBlock[k + 1])) {
          changeBlock(countBlock[k], countBlock[k + 1]);
          breks.push("t");
        } else {
          breks.push("f");
        }
        yield;
        countBlock[k].classList.remove("container__block_active");
        countBlock[k + 1].classList.remove("container__block_active");
      }
      i++;
      breks.reverse();
      let p = 0;
      while (breks[p] === "f") {
        p++;
        i++;
      }
    } else {
      for (let n = -1 - i; n > 0 - countBlock.length + q; n--) {
        let countBlock = Array.from(
          container.querySelectorAll(".container__block")
        );
        countBlock.at(n).classList.add("container__block_active");
        countBlock.at(n - 1).classList.add("container__block_active");
        if (translate(countBlock.at(n)) < translate(countBlock.at(n - 1))) {
          changeBlock(countBlock.at(n - 1), countBlock.at(n));
          breks.push("t");
        } else {
          breks.push("f");
        }
        yield;
        countBlock.at(n).classList.remove("container__block_active");
        countBlock.at(n - 1).classList.remove("container__block_active");
      }
      q++;
      breks.reverse();
      let p = 0;
      while (breks[p] === "f") {
        p++;
        q++;
      }
    }
  }
}



export function* combSort() {
  let countBlock = Array.from(container.querySelectorAll(".container__block"));
  const cof = 1.247;
  let step = countBlock.length - 1;
  while (step > 1) {
    for (let i = 0, j = step; j < countBlock.length; i++, j++) {
      countBlock = Array.from(container.querySelectorAll(".container__block"));
      countBlock[i].classList.add("container__block_active");
      countBlock[j].classList.add("container__block_active");
      if (translate(countBlock[i]) > translate(countBlock[j])) {
        changeBlock(countBlock[i], countBlock[j])
      }
      yield;
      countBlock[i].classList.remove("container__block_active");
      countBlock[j].classList.remove("container__block_active");
    }
    step = Math.floor(step / cof)
  }
  for (let k = 0; k < countBlock.length - 1; k++) {
    countBlock = container.querySelectorAll(".container__block");
    countBlock[k].classList.add("container__block_active");
    countBlock[k + 1].classList.add("container__block_active");
    if (translate(countBlock[k]) > translate(countBlock[k + 1])) {
      changeBlock(countBlock[k], countBlock[k + 1]);
    }
    yield
    countBlock[k].classList.remove("container__block_active");
    countBlock[k + 1].classList.remove("container__block_active");
  }
}
