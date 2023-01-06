import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import MagneticButton from './functions/magnetic-button';

MagneticButton();

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1
})

gsap.registerPlugin(ScrollTrigger);
scroller.on('scroll', ScrollTrigger.update)
ScrollTrigger.addEventListener('refresh', () => scroller.update())
ScrollTrigger.refresh()