import './pages/index.css'

let slider = document.querySelector('.config__range');
let outputSlider = document.querySelector('.range-span');

outputSlider.textContent = slider.value;

slider.addEventListener('mousemove', () => {
  let percent = (slider.value / 3);
  outputSlider.textContent = slider.value;
  let color = `background: linear-gradient(90deg, rgb(257, 127, 80) ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  slider.setAttribute('style', color);
})

