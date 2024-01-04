function locomotiveXscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveXscroll();

function cursorMovingAnimation() {
  var page1Content = document.querySelector("#page-1-content");
  var mouseMover = document.querySelector("#mouseMover");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(mouseMover, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function (dets) {
    gsap.to(mouseMover, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function (dets) {
    gsap.to(mouseMover, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorMovingAnimation();

function page_2_p_animation() {
  gsap.from(" #head3 p", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: "#main",
      start: "top 69%",
      end: "top 70%",
      // markers :true,
      scrub: 2,
    },
  });
}
page_2_p_animation();

function page_2_secP_animation() {
  gsap.from(" #head3 secP", {
    y: 120,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: "#main",
      start: "top 69%",
      end: "top 70%",
      // markers :true,
      scrub: 2,
    },
  });
}
page_2_secP_animation();

function page_2_p_1_animation() {
  gsap.from(" #fdesc p", {
    y: 120,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: "#main",
      start: "top 59%",
      end: "top 60%",
      // markers :true,
      scrub: 2,
    },
  });
}
page_2_p_1_animation();

// function agencyModelSec1_animation() {
//   gsap.from(" #agencyModelSec agencyModelSec1",{
//     y:120,
//     stagger:0.25,
//     duration:1,
//     scrollTrigger:{
//         trigger: "#page-2",
//         scroller: "#main",
//         start: "top 69%",
//         end: "top 70%",
//         markers :true,
//         scrub:2
//       }
//     }
//   )
// }
// agencyModelSec1_animation();

// function agencyModelSec2_animation() {
//   gsap.from(" #agencyModelSec agencyModelSec2",{
//     y:120,
//     stagger:0.5,
//     duration:1,
//     scrollTrigger:{
//         trigger: "#page-2",
//         scroller: "#main",
//         start: "top 69%",
//         end: "top 70%",
//         markers :true,
//         scrub:2
//       }
//     }
//   )
// }
// agencyModelSec2_animation();

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
sliderAnimation();

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -20,
    stagger: 0.1,
    duration: 1,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.from("#page-1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: -0.5,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loaderAnimation()