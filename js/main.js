'use strict';


{
  function inviewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }
  const toTop = document.getElementById('to-top');
  const header = document.querySelector('header');
  const inviewObserver = new IntersectionObserver(inviewCallback, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate').forEach(el => {
    inviewObserver.observe(el);
  });
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const options = document.querySelector('.options');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
  options.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
}