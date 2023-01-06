import gsap, { Elastic, Power2, Power3, Power4 } from "gsap";
import $ from 'jquery'

const MagneticButton = () => {

    // Magnetic Buttons
    var magnets = document.querySelectorAll('.magnetic');
    var strength = 100;

    // START : If screen is bigger as 540 px do magnetic
    // Mouse Reset
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseleave', function(event) {
            gsap.to(event.currentTarget, 1.5, {
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
            gsap.to($(this).find("div"), 1.5, {
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
        });
    });




    // // // Mouse Enter
    $('.magnetic').on('mouseenter', function() {
        gsap.to($(this).find("div"), .3, {
            y: "0%",
            ease: Power2.easeInOut
        });
    });

    // Mouse move
    function moveMagnet(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        var magnetsStrength = magnetButton.getAttribute("data-strength") || 50;
        var magnetsStrengthText = magnetButton.getAttribute("data-strength-text") || 10;

        gsap.to(magnetButton, 1.5, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
            rotate: "0.001deg",
            ease: Power4.easeOut,
        });
        gsap.to($(this).find("div"), 1.5, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.15) * magnetsStrengthText,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.15) * magnetsStrengthText,
            rotate: "0.001deg",
            ease: Power4.easeOut,
        });
    }


}



export default MagneticButton;