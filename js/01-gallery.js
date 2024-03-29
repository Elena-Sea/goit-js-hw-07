import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('div.gallery');

const galleryMarkup = creatGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend',galleryMarkup);

function creatGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
     }).join('');
};

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
    e.preventDefault();
    openModalWithImage(e.target.dataset.source);
};


function openModalWithImage(content) {
    const instance = basicLightbox.create(`<img src="${content}" alt="hurra"/>`);

    instance.show();
};
