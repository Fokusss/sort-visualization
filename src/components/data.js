export const slider = document.querySelector('.config__range');
export const outputSlider = document.querySelector('.range-span');
export const container = document.querySelector('.container');
export const buttonStart = document.querySelector('.config__start');
export const buttonRandom = document.querySelector('.config__random');
export const select = document.querySelector('.config__select');
export const config = []
export const buttonSelect = document.querySelector('.config__select');
export const popUpHistory = document.querySelector('.pop-up__list');
export const popUp = document.querySelector('.pop-up');
export const buttonPopUpClose = document.querySelector('.pop-up__close');

export function screen() {
  if (window.innerWidth < 800){
    config.push(200)
    config.push(400)
    config.push(2)
    slider.setAttribute('max', 200);
    slider.setAttribute('value', 100);
  } else {
    config.push(400)
    config.push(800)
    config.push(3)
  }
}
