import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>   
    `
    }).join('');
}
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
    // e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    loadLargeImage(e.target.dataset.sourse) ;
}

function loadLargeImage(largeImageSrc) {
    const largeImageModal = basicLightbox.create(`<img src="${largeImageSrc}" alt="${description}" width="1200" min-height="600"/>`,
        {
            onClose: () => { window.removeEventListener("keydown", onKeyboardEscape)}
        });
    largeImageModal.show();
}

// function onKeyboardEscape(e) {
//     switch (e?.code) {
//         case "Escape":
//             closeModal();
//             return;
//     }
// }