import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);

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
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
        // e.preventDefault();

    loadLargeImage(e.target.dataset.sourse) ;
}

function loadLargeImage(largeImageSrc) {
    const largeImageModal = basicLightbox.create(`<img src="${largeImageSrc}" width="1200" min-height="600"/>`);
    largeImageModal.show();
}

// function onKeyboardEscape(e) {
//     switch (e?.code) {
//         case "Escape":
//             closeModal();
//             return;
//     }
// }

// ,
//         {
//             onClose: () => { window.removeEventListener("keydown", onKeyboardEscape)}
//         }