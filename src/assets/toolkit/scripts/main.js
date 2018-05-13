import { initScrollEventHandler } from './utils/scroll-handler.js';
import * as ParallaxImages from './ui-components/parallax-img.js';

document.addEventListener("DOMContentLoaded", (event) => {

    // fluidVids.init({
    //     selector: ['iframe'], // runs querySelectorAll()
    //     players: ['www.youtube.com'] // players to support
    // });

    ParallaxImages.init();

    // imageGracefulLoad();
    // fadeBackgroundImages();
    // animateElementsWhenScrolledInView();
    initScrollEventHandler();
    // initMastheadAnimation();
    // pageRouting();

    // document.getElementsByTagName('html')[0].classList.toggle('is-not-ie-10-11', !isIE11or10());
    // window.addEventListener('resize', _.throttle(() => fadeBackgroundImages(), 400), false);
});
