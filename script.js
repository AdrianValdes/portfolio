const scrollContent = document.getElementById('scroll-content');
const arrow = document.getElementById('arrow');
const arts = document.getElementsByClassName('art');
const glitch = document.getElementById('glitch');

window.addEventListener('scroll', (e) => {
  translate(window.pageYOffset);
});

function translate(pixels) {
  scrollContent.style.transform = `translateX(${-pixels}px)`;
  /*   if (pixels < 190) {
    arrow.style.transform = ``;
    arrow.style.transform = `rotate(${-pixels * 0.5}deg) scale(${
      pixels * 0.02
    })`;
  } */
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
