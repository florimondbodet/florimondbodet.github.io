(function() {
    const carThumb = document.querySelector('.car-thumb');
    const trackProgress = document.querySelector('.car-track-progress');

    if (!carThumb) return;

    function updateCarPosition() {
        const scrollTop  = window.scrollY;
        const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;

        const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

        // Track goes from 10px to (innerHeight - 10px - carHeight)
        const carH       = carThumb.offsetHeight || 80;
        const trackStart = 10;
        const trackEnd   = window.innerHeight - 10 - carH;
        const carY       = trackStart + progress * (trackEnd - trackStart);

        carThumb.style.transform = `translateX(-50%) translateY(${carY}px)`;

        // Progress bar height
        if (trackProgress) {
            const totalTrack = window.innerHeight - 20;
            trackProgress.style.height = (progress * totalTrack) + 'px';
        }
    }

    window.addEventListener('scroll', updateCarPosition, { passive: true });
    window.addEventListener('resize', updateCarPosition, { passive: true });
    updateCarPosition();
})();
