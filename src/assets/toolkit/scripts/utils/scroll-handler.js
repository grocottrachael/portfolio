let scrollHandlers = [];

export function registerHandler(handler) {
    scrollHandlers.push(handler);
};

function handleScrollEvent() {
    scrollHandlers.length && scrollHandlers.map(f => f());
    window.requestAnimationFrame(handleScrollEvent);
}

export function initScrollEventHandler() {
    // initial render
    handleScrollEvent();

    if (!window.requestAnimationFrame) {
        jQuery(window).on('scroll', _.throttle(handleScrollEvent, 50));
        return;
    }

    window.requestAnimationFrame(handleScrollEvent);
}