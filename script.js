const scrollContent = document.getElementById('scroll-content');
const fakeHeight = document.getElementById('fake-height');
const arts = document.getElementsByClassName('art');
const glitch = document.getElementById('glitch');
const arrow = document.getElementById('arrow');
const innerWidth = window.innerWidth;

window.onload = () => {
  const scrollWidth = scrollContent.getBoundingClientRect().width;
  const scrollHeight = scrollContent.getBoundingClientRect().height;

  console.log('scrollWidth :' + scrollWidth);

  console.log('scrollHeight : ' + scrollHeight);

  if (scrollWidth / scrollHeight > 8) {
    fakeHeight.style.height = `${scrollWidth + scrollHeight}px`;
  }

  if (scrollWidth / scrollHeight > 0.5 && scrollWidth / scrollHeight < 2) {
    fakeHeight.style.height = `${scrollWidth}px`;
  }
  if (scrollWidth / scrollHeight > 2 && scrollWidth / scrollHeight < 5) {
    fakeHeight.style.height = `${scrollWidth + scrollHeight - 100}px`;
    console.log('hello');
  }
  if (scrollWidth / scrollHeight >= 5 && scrollWidth / scrollHeight <= 8) {
    fakeHeight.style.height = `${scrollWidth - 300}px`;
  }

  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset < 7400) {
      translate(window.pageYOffset);
      console.log('translated pixels: ' + window.pageYOffset);
    }
  });

  function translate(pixels) {
    scrollContent.style.transform = `translateX(${-pixels}px)`;
    if (pixels > 50) {
      arrow.style.transform = `rotate(${0}deg) `;
    }
  }
};

function toggleGlitch() {
  console.log(arts);
  Array.from(arts).forEach((ele) => {
    ele.classList.toggle('hidden-glitch');
  });
  if (glitch.classList.value === 'glitch') {
    glitch.classList.replace('glitch', 'no-glitch');
  } else if (glitch.classList.value === 'no-glitch') {
    glitch.classList.replace('no-glitch', 'glitch');
  }
}

arrow.addEventListener('click', () => {
  arrow.style.transform = `rotate(${90}deg) `;
});
