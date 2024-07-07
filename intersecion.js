document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomImage = document.getElementById('zoomImage');

    images.forEach(image => {
        image.addEventListener('click', () => {
            zoomImage.src = image.src;
            zoomOverlay.classList.add('show');
        });
    });

    zoomOverlay.addEventListener('click', () => {
        zoomOverlay.classList.remove('show');
    });
});
