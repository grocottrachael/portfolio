import { registerHandler } from '../utils/scroll-handler.js';

class ParallaxImg {

    constructor (elem) {
        this.element = elem;
        this.imageElement = elem.querySelector('img');

        this.setup();
        registerHandler(this.scrollHandler.bind(this));
        window.addEventListener('resize', () => this.constrictView() , false);
    }

    setup () {
        this.imageElement.style.transition = 'transition: .2s';
        this.constrictView();
    }

    constrictView () {
        const originalHeight = this.imageElement.clientHeight;
        this.elementHeight = originalHeight * .9;
        this.translateDistance = originalHeight * .1;
        this.element.style.height = `${this.elementHeight}px`;
        this.element.style.overflow = 'hidden';

        this.totalScrollDistance = this.elementHeight + window.innerHeight;
    }

    setTranslate () {
        const elemTop = this.element.getBoundingClientRect().top;
        const windowScrollDistance = window.innerHeight - elemTop;

        if (windowScrollDistance < 0 || windowScrollDistance > this.totalScrollDistance) {
            return;
        } else {
            const translatePercentage = (windowScrollDistance / this.totalScrollDistance) * 100;
            this.imageElement.style.transform = `translateY(-${((this.translateDistance / 100) * translatePercentage).toFixed(3)}px)`;
        }
    }

    scrollHandler () {
        this.setTranslate();
    }

}

export function init() {
    const elems = document.querySelectorAll('[data-parallax-img-wrapper]') || [];
    Array.prototype.map.call(elems, e => new ParallaxImg(e));
}