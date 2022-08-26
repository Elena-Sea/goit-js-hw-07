import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = creatGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend',galleryMarkup);

function creatGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
     }).join('');
};

let gallery = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250
    });
    
gallery.on('show.simplelightbox', function () {
	// do something…    
});