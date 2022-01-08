'use strict';

//GALLERY SCRIPT START //

const allPortraitImgs = document.querySelectorAll('.gallery-container img');
const portraitGalleryContainer = document.getElementById(
  'portraits-gallery-container'
);
const portraitOverlay = document.querySelector('.portrait-overlay');
const portraitsBody = document.querySelector('body');
const portraitCloseBtn = document.querySelector('.portrait-close-btn');

console.log(portraitsBody.clientHeight);

allPortraitImgs.forEach(img => {
  img.addEventListener('click', () => {
    const bodyHeight = portraitsBody.clientHeight;
    img.classList.add('show');
    portraitOverlay.classList.remove('hidden');
    portraitOverlay.style.top = `${bodyHeight}`;
    portraitOverlay.style.left = 0;
    // portraitsBody.style.overflow = 'hidden';
    portraitCloseBtn.addEventListener('click', () => {
      img.classList.remove('show');
      portraitOverlay.classList.add('hidden');
      //   portraitsBody.style.overflow = 'scroll';
    });
  });
});

//GALLERY SCRIPT END //
