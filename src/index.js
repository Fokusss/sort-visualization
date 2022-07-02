import './pages/index.css'
import {clearContainer, disabledButtons, nonDisabledButtons, renderStart} from './components/render.js'
import {slider, outputSlider, container, buttonStart, buttonRandom,} from './components/data.js'
import { bubleSort, speed,} from './components/sort';


outputSlider.textContent = slider.value;

slider.addEventListener('mousemove', () => {
  let percent = (slider.value / 3);
  outputSlider.textContent = slider.value;
  let color = `background: linear-gradient(90deg, rgb(257, 127, 80) ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  slider.setAttribute('style', color);
})

slider.addEventListener('mouseup', () => {
  const countBlock = container.querySelectorAll('.container__block')
  clearContainer(countBlock);
  renderStart(slider.value);
})


renderStart(100);



buttonRandom.addEventListener('click', () => {
  const countBlock = container.querySelectorAll('.container__block')
  clearContainer(countBlock)
  renderStart(slider.value)
})

buttonStart.addEventListener('click', () => {
  disabledButtons()
  const time = speed()
  const sort = bubleSort()
  const buble = setInterval(() => {
    sort.next()
    if (sort.next().done){
      clearInterval(buble)
      nonDisabledButtons()
    }
  }, time)
})





