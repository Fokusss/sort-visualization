import './pages/index.css'
import {addStory, clearContainer, createStory, disabledButtons, nonDisabledButtons, openPopUp, renderStart} from './components/render.js'
import {slider, outputSlider, container, buttonStart, buttonRandom, config, screen, buttonSelect, buttonPopUpClose, popUp} from './components/data.js'
import { bubleSort, combSort, shackeSort, speed,} from './components/sort';


outputSlider.textContent = slider.value;

slider.addEventListener('mousemove', () => {
  let percent = (slider.value / config[2]);
  outputSlider.textContent = slider.value;
  let color = `background: linear-gradient(90deg, rgb(257, 127, 80) ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  slider.setAttribute('style', color);
})

slider.addEventListener('mouseup', () => {
  const countBlock = container.querySelectorAll('.container__block')
  clearContainer(countBlock);
  renderStart(slider.value);
})

slider.addEventListener('touchmove', (evt) => {
  let percent = (slider.value / config[2]);
  outputSlider.textContent = slider.value;
  let color = `background: linear-gradient(90deg, rgb(257, 127, 80) ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  slider.setAttribute('style', color);
})


slider.addEventListener('touchend', ()=> {
  let percent = (slider.value / config[2]);
  outputSlider.textContent = slider.value;
  let color = `background: linear-gradient(90deg, rgb(257, 127, 80) ${percent}%, rgb(255, 255, 255) ${percent}%);`;
  slider.setAttribute('style', color);
  const countBlock = container.querySelectorAll('.container__block')
  clearContainer(countBlock);
  renderStart(slider.value);
})


screen();


renderStart(100)


buttonPopUpClose.addEventListener('click', () => {
  popUp.classList.remove('pop-up_active')
})


buttonRandom.addEventListener('click', () => {
  const countBlock = container.querySelectorAll('.container__block')
  clearContainer(countBlock)
  renderStart(slider.value)
})

buttonStart.addEventListener('click', () => {
  if (buttonSelect.value == 1){
    const start = (new Date()).getTime()
    disabledButtons()
    const time = speed()
    const sort = bubleSort()
    const buble = setInterval(() => {
      sort.next()
      if (sort.next().done){
        clearInterval(buble)
        nonDisabledButtons()
        const stop = (new Date()).getTime()
        const rilTime = stop - start;
        addStory(createStory(rilTime / 1000, 'Пузырьком'))
        openPopUp();
      }
    }, time)
  } else if (buttonSelect.value == 2){
    const start = (new Date()).getTime()
    disabledButtons()
    const time = speed()
    const sort = shackeSort()
    const shake = setInterval(() => {
      sort.next()
      if (sort.next().done){
        clearInterval(shake)
        nonDisabledButtons()
        const stop = (new Date()).getTime()
        const rilTime = stop - start;
        addStory(createStory(rilTime / 1000, 'Шейкером'))
        openPopUp();
      }
    }, time)
  } else if (buttonSelect.value == 3){
    const start = (new Date()).getTime()
    disabledButtons()
    const time = speed()
    const sort = combSort()
    const shake = setInterval(() => {
      sort.next()
      if (sort.next().done){
        clearInterval(shake)
        nonDisabledButtons()
        const stop = (new Date()).getTime()
        const rilTime = stop - start;
        addStory(createStory(rilTime / 1000, 'Расческой'))
        openPopUp();
      }
    }, time)
  }
})





