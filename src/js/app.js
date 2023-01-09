import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import MagneticButton from './functions/magnetic-button';

MagneticButton();

gsap.registerPlugin(ScrollTrigger);
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
})


scroller.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});

// gsap.from(".pizza_heading", {
//     scrollTrigger: {
//         trigger: ".pizza_section",
//         scroller: "body",
//         scrub: true,
//         pin: true,
//         start: "top top",
//         end: "+=100%"
//     },
//     scaleX: 0,
//     transformOrigin: "left center",
//     ease: "none"
// });





ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();