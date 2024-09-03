const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else  {
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
  const animationElement = document.querySelector('.hidden');
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    // First-time visitor, play the animation
    localStorage.setItem('hasVisited', 'true');
  } else {
    // Not the first visit, disable the animation
    animationElement.classList.add('intro-animation-disabled');
  }
});