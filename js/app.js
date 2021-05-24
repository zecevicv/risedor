/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const dropdown = document.querySelector('.header .dropdown');

// Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
});

if (window.scrollY > 50) {
  header.classList.add('header-white');
} else {
  header.classList.remove('header-white');
}

// Menu
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

// Dropdown
dropdown.addEventListener('click', (e) => {
  if (e.target.closest('.dropdown-toggler')) {
    dropdown.classList.toggle('show');
  }

  if (e.target.closest('.dropdown-close')) {
    dropdown.classList.remove('show');
  }
});

/* #Hero
  ======================================================= */
// Slider
new Swiper(".hero .swiper-container", {
  slidesPerView: 1,
  effect: 'fade',
  pagination: {
    el: ".hero .swiper-pagination",
  }
});

// Progress line animation
gsap.from('.progress-line', { width: 0, delay: 2, duration: 2.5 })

// Number animation
const boxNumbers = document.querySelectorAll('.hero .percentage .value');

boxNumbers.forEach((num) => {
  gsap.from(num, {
    delay: 2, 
    duration: 2.5,
    innerHTML: 0,
    snap:{
      innerHTML: 1
    }
  });
});

/* #Map (image compare viewer)
  ======================================================= */
const imageCompareEl = document.getElementById("image-compare");
const options = {
  startingPoint: 65,
  smoothingAmount: 50
}

const viewer = new ImageCompare(imageCompareEl, options).mount();

/* #Image Gallery
  ======================================================= */
if (window.innerWidth > 1024) {
  gsap.to(".img-gallery .img-1", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
} else {
  gsap.to(".img-gallery .img-1", {
    yPercent: 125,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

if (window.innerWidth > 1024) {
  gsap.to(".img-gallery .img-2", {
    yPercent: 200,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

if (window.innerWidth < 1024) {
  gsap.to(".img-gallery .img-3", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

if (window.innerWidth > 1024) {
  gsap.to(".img-gallery .img-4", {
    yPercent: 150,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
} else {
  gsap.to(".img-gallery .img-4", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

gsap.to(".img-gallery .img-6", {
  yPercent: -250,
  ease: "none",
  scrollTrigger: {
    trigger: ".img-gallery ",
    scrub: true
  },
});

gsap.to(".img-gallery .img-7", {
  yPercent: -500,
  ease: "none",
  scrollTrigger: {
    trigger: ".img-gallery ",
    scrub: true
  },
});

if (window.innerWidth > 1024) {
  gsap.to(".img-gallery .img-8", {
    yPercent: 150,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
} else {
  gsap.to(".img-gallery .img-8", {
    yPercent: 250,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

if (window.innerWidth > 1024) {
  gsap.to(".img-gallery .img-9", {
    yPercent: -150,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
} else {
  gsap.to(".img-gallery .img-9", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

if (window.innerWidth > 1024) {
  gsap.to(".img-gallery .img-10", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".img-gallery ",
      scrub: true
    },
  });
}

/* #Stages
  ======================================================= */
// Find which slides should be initial (for mobiles)
const stagesSlides = document.querySelectorAll('.stages .swiper-slide');
let startingIndex = 0;

if (window.innerWidth < 1024) {
  stagesSlides.forEach((slide, index) => {
    if (slide.querySelector('.previous')) {
      startingIndex = index;
    }
  });
}

new Swiper(".stages .swiper-container", {
  slidesPerView: 2,
  initialSlide: startingIndex,
  breakpoints: {
    0: {
      allowTouchMove: true
    },
    1024: {
      allowTouchMove: false
    }
  }
});

/* #Management
  ======================================================= */
if (window.innerWidth > 1024) {
  gsap.to(".management .img-1", {
    yPercent: -125,
    ease: "none",
    scrollTrigger: {
      trigger: ".management ",
      scrub: true
    },
  });
} else {
  gsap.to(".management .img-1", {
    yPercent: -75,
    ease: "none",
    scrollTrigger: {
      trigger: ".management ",
      scrub: true
    },
  });
}

if (window.innerWidth < 1024) {
  gsap.to(".management .img-2", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".management ",
      scrub: true
    },
  });
}

if (window.innerWidth > 1024) {
  gsap.to(".management .img-3", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".management ",
      scrub: true
    },
  });
} else {
  gsap.to(".management .img-3", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".management ",
      scrub: true
    },
  });
}

if (window.innerWidth < 1024) {
  gsap.to(".management .img-4", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".management ",
      scrub: true
    },
  });
}

/* #Technical Information Accordion
  ======================================================= */
const accordion = document.querySelector('.accordion');
const collapsibles = document.querySelectorAll('.collapsible');

accordion.addEventListener('click', (e) => {
  if (e.target.closest('.collapse-toggler')) {
    e.preventDefault();

    const collapsible = e.target.closest('.collapsible');
    const collapse = collapsible.querySelector('.collapse');

    collapsibles.forEach((coll) => {
      if (coll.classList.contains('show') && coll != collapsible) {
        collCollapse = coll.querySelector('.collapse');

        coll.classList.remove('show');
        gsap.to(collCollapse, {
          height: '0'
        });
      }
    });

    collapsible.classList.toggle('show');

    if (collapsible.classList.contains('show')) {
      gsap.to(collapse, {
        height: 'auto',
        duration: .4,
        ease: 'power1.inOut'
      });
    } else {
      gsap.to(collapse, {
        height: '0'
      });
    }
  }
});

/* #Gallery Slider
  ======================================================= */
new Swiper(".gallery .swiper-container", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".gallery .swiper-button-next",
    prevEl: ".gallery .swiper-button-prev",
  },
  pagination: {
    el: ".gallery .swiper-pagination",
  }
});

/* #Projects Slider
  ======================================================= */
new Swiper(".projects .swiper-container", {
  navigation: {
    nextEl: ".projects .swiper-button-next",
    prevEl: ".projects .swiper-button-prev",
  },
  pagination: {
    el: ".projects .swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      allowTouchMove: true
    },
    1024: {
      slidesPerView: 4,
      allowTouchMove: false
    }
  }
});

/* #Blog Posts Slider
  ======================================================= */
new Swiper(".blog-posts .swiper-container", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".blog-posts .swiper-pagination",
  },
  breakpoints: {
    0: {
      spaceBetween: 15
    },
    1024: {
      spaceBetween: 0
    }
  }
});

/* #Documents Slider
  ======================================================= */
new Swiper(".documents .swiper-container", {
  loop: true,
  pagination: {
    el: ".documents .swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    }
  }
});

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300
});