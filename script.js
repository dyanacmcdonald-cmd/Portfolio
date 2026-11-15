/* No framework or build step. All uploaded videos have their audio removed. */
'use strict';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const opening = document.getElementById('opening-film');
const toggles = [...document.querySelectorAll('[data-controls]')];

function updateToggle(video) {
  const button = toggles.find(item => item.dataset.controls === video.id);
  if (!button) return;
  const action = video.paused ? 'Play' : 'Pause';
  button.innerHTML = `${action} video <span aria-hidden="true">${video.paused ? '▶' : 'Ⅱ'}</span>`;
  button.setAttribute('aria-label', `${action} ${video.id === 'opening-film' ? 'opening' : 'Peru'} video`);
}

toggles.forEach(button => {
  const video = document.getElementById(button.dataset.controls);
  video.muted = true;
  video.addEventListener('play', () => updateToggle(video));
  video.addEventListener('pause', () => updateToggle(video));
  button.addEventListener('click', () => {
    if (video.paused) video.play().catch(() => updateToggle(video));
    else video.pause();
  });
  updateToggle(video);
});

if (opening) {
  if (reducedMotion.matches) {
    opening.autoplay = false;
    opening.pause();
  }
  reducedMotion.addEventListener('change', event => {
    if (event.matches) opening.pause();
  });
}

const peruFilm = document.getElementById('peru-film');
document.querySelectorAll('.gallery-choice').forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.gallery-choice').forEach(choice => {
      choice.classList.remove('is-active');
      choice.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('is-active');
    button.setAttribute('aria-pressed', 'true');
    peruFilm.pause();
    peruFilm.poster = button.dataset.poster;
    peruFilm.src = button.dataset.video;
    peruFilm.setAttribute('aria-label', button.dataset.description);
    peruFilm.muted = true;
    const label = button.getAttribute('aria-label').replace('Play silent clip: ', '');
    document.querySelector('.gallery-status').textContent = `${String(index + 1).padStart(2, '0')} / ${label}`;
    peruFilm.load();
    if (!reducedMotion.matches) peruFilm.play().catch(() => updateToggle(peruFilm));
    updateToggle(peruFilm);
  });
});

const loadDocumentary = document.getElementById('load-documentary');
if (loadDocumentary) loadDocumentary.addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/c5mxEEuOQnI?autoplay=1&mute=1&playsinline=1&rel=0&cc_load_policy=1';
  iframe.title = 'Behind the Scenes at OMNIMAX | Interview with James Burns';
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  document.getElementById('documentary-player').replaceChildren(iframe);
  iframe.focus();
});

const clipDialog = document.getElementById('clip-dialog');
const dialogFilm = document.getElementById('dialog-film');
if (clipDialog) {
  document.querySelectorAll('[data-clip]').forEach(button => {
    button.addEventListener('click', () => {
      document.getElementById('clip-title').textContent = button.dataset.label;
      dialogFilm.poster = button.dataset.poster;
      dialogFilm.src = button.dataset.clip;
      dialogFilm.muted = true;
      dialogFilm.setAttribute('aria-label', `Silent b-roll: ${button.dataset.label}`);
      clipDialog.showModal();
      document.body.classList.add('dialog-open');
      if (!reducedMotion.matches) dialogFilm.play().catch(() => {});
    });
  });
  document.getElementById('close-dialog').addEventListener('click', () => clipDialog.close());
  clipDialog.addEventListener('click', event => {
    if (event.target === clipDialog) {
      const bounds = clipDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) clipDialog.close();
    }
  });
  clipDialog.addEventListener('close', () => {
    dialogFilm.pause();
    dialogFilm.removeAttribute('src');
    dialogFilm.load();
    document.body.classList.remove('dialog-open');
  });
}

// Stop video when the tab is hidden or footage scrolls out of sight.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) entry.target.pause();
    });
  }, {threshold: 0.05});
  document.querySelectorAll('main video').forEach(video => observer.observe(video));
}
