function checkViewport() {
    return {
        mobile: window.matchMedia('(max-width: 768px)').matches,
        tablet: window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches,
        desktop: window.matchMedia('(min-width: 1025px)').matches,
    };
}
