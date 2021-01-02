import Masonry from 'masonry-layout';

window.onload = () => {
    const galleryGrid = document.querySelector('.imageGallery__container');
    const masonry = new Masonry(galleryGrid, {
        itemSelector: '.imageGallery__imageContainer',
    });
}