const scrollContent = document.getElementById('scroll-content');
const fakeHeight = document.getElementById('fake-height');
const arts = document.getElementsByClassName('art');
const glitch = document.getElementById('glitch');
const arrow = document.getElementById('arrow');
const innerWidth = window.innerWidth;

window.onload = () => {
  let scrollWidth = scrollContent.getBoundingClientRect().width;
  let scrollHeight = scrollContent.getBoundingClientRect().height;
  let vW = window.innerWidth;
  let vH = window.innerHeight;
  fakeHeight.style.height = `${scrollWidth - vW + vH}px`;

  window.addEventListener('resize', () => {
    let reScrollWidth = scrollContent.getBoundingClientRect().width;
    let reScrollHeight = scrollContent.getBoundingClientRect().height;
    let reVW = window.innerWidth;
    let reVH = window.innerHeight;
    fakeHeight.style.height = `${reScrollWidth - reVW + reVH}px`;
  });

  window.addEventListener('scroll', (e) => {
    translate(window.pageYOffset);
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
