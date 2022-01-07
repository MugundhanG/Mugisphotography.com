'use strict';

// MAIN SCRIPT START //
const navBar = document.querySelector('.header-nav');
const header = document.getElementById('header');
const servicesSection = document.querySelector('.services-section');
const navList = document.querySelectorAll('li');
const moreBtn = document.querySelectorAll('.more-btn');
const services = document.querySelectorAll('.service');
const gallerySection = document.getElementById('gallery-section');
const eventList = document.querySelectorAll('.event');
const viewPriceBtns = document.querySelectorAll('.view-price-btn');
const eventPrices = document.querySelectorAll('.event-prices');
const closePriceBtns = document.querySelectorAll('.close-price-btn');
const mainLetter = document.querySelector('.main-heading a span');
const mainHeading = document.querySelector('.main-heading');
const feedbacks = document.querySelectorAll('.feedback');
const feedbackRightBtn = document.querySelector('.feedback-right-btn');
const feedbackLeftBtn = document.querySelector('.feedback-left-btn');

console.log(feedbacks);

window.addEventListener('scroll', fixedNav);

function fixedNav() {
  if (window.scrollY > 600) {
    navBar.classList.add('resize');
    navList[0].className = '';
    navList[1].classList.add('active');
  } else if (window.scrollY < 600) {
    navBar.classList.remove('resize');
    navList.forEach(nav => {
      nav.className = '';
    });
    navList[0].classList.add('active');
  }

  if (window.scrollY > 1500) {
    navList[1].className = '';
    navList[2].classList.add('active');
  } else if (window.scrollY < 1500 && window.scrollY > 600) {
    navList[1].classList.add('active');
    navList[2].className = '';
  }

  if (window.scrollY > 2400) {
    navList[2].className = '';
    navList[3].classList.add('active');
  } else if (window.scrollY < 2400 && window.scrollY > 1500) {
    navList[2].classList.add('active');
    navList[3].className = '';
  }

  if (window.scrollY > 3400) {
    navList[3].className = '';
    navList[4].classList.add('active');
  } else if (window.scrollY < 3400 && window.scrollY > 2400) {
    navList[3].classList.add('active');
    navList[4].className = '';
  }

  if (window.scrollY > 4400) {
    navList[4].className = '';
    navList[5].classList.add('active');
  } else if (window.scrollY < 4400 && window.scrollY > 3400) {
    navList[4].classList.add('active');
    navList[5].className = '';
  }

  if (window.scrollY > 5100) {
    navList[5].className = '';
    navList[6].classList.add('active');
  } else if (window.scrollY < 5100 && window.scrollY > 4400) {
    navList[5].classList.add('active');
    navList[6].className = '';
  }

  if (window.scrollY > 6200) {
    navList[6].className = '';
    navList[7].classList.add('active');
  } else if (window.scrollY < 6200 && window.scrollY > 5100) {
    navList[6].classList.add('active');
    navList[7].className = '';
  }
}

moreBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const nextParentEl = btn.parentElement.nextElementSibling;
    nextParentEl.classList.add('show');
    const closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        const parentEl = closeBtn.parentElement;
        parentEl.classList.remove('show');
      });
    });
  });
});

viewPriceBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    eventPrices[idx].classList.add('show');
  });
});

closePriceBtns.forEach((closeBtn, idx) => {
  closeBtn.addEventListener('click', () => {
    eventPrices[idx].classList.remove('show');
    eventPrices[idx].classList.add('close');
  });
});

console.log(feedbacks.length);

let activeFeedback = 0;

function showFeedback() {
  if (feedbacks[activeFeedback].classList.contains('show')) {
    feedbacks[activeFeedback].classList.remove('show');
    activeFeedback++;
    if (activeFeedback === feedbacks.length) {
      activeFeedback = 0;
    }
    feedbacks[activeFeedback].classList.add('show');
  }
}

function showFeedbackReverse() {
  if (feedbacks[activeFeedback].classList.contains('show')) {
    feedbacks[activeFeedback].classList.remove('show');

    if (activeFeedback === 0) {
      activeFeedback = feedbacks.length;
    }
    activeFeedback--;
    feedbacks[activeFeedback].classList.add('show');
  }
}

feedbackRightBtn.addEventListener('click', showFeedback);

feedbackLeftBtn.addEventListener('click', showFeedbackReverse);

setInterval(showFeedback, 5000);

// MAIN SCRIPT END //

// MOBILE DESIGN SCRIPT START //
const menuBtn = document.querySelector('.menu-btn');
const navTools = document.querySelector('.nav-tools');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuTools = document.querySelector('.mobile-menu .nav-tools');

menuBtn.addEventListener('click', () => {
  if (mobileMenuTools.classList.contains('active')) {
    menuBtn.innerHTML = `<i class="fas fa-bars fa-2x">`;
  } else {
    menuBtn.innerHTML = `<i class="fas fa-times fa-2x"></i>`;
  }
  mobileMenuTools.classList.toggle('active');
});

const mobileMenuLinks = document.querySelectorAll(
  '.mobile-menu .nav-tools li a'
);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuTools.classList.remove('active');
  });
});

// MOBILE DESIGN SCRIPT END //
