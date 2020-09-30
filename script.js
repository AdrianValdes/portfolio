const scrollContent = document.getElementById('scroll-content');
const fakeHeight = document.getElementById('fake-height');
const arts = document.getElementsByClassName('art');
const glitch = document.getElementById('glitch');
const arrow = document.getElementById('arrow');

window.onload = () => {
  const scrollHeight = scrollContent.getBoundingClientRect().width;
  console.log('scrollHeight: ' + scrollHeight);
  console.log('offsetHeight: ' + scrollContent.offsetWidth);
  fakeHeight.style.height = `${scrollHeight}px`;
  console.log(fakeHeight.style.height);
};

window.addEventListener('scroll', (e) => {
  translate(window.pageYOffset);
});

function translate(pixels) {
  scrollContent.style.transform = `translateX(${-pixels}px)`;
}

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
