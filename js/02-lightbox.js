import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Creation gallery
const gallery = document.querySelector(".gallery");
const imageGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", imageGallery);

function createGallery(markup) {
  return markup
    .map((elem) => {
      const { preview, original, description } = elem;
      return `
     <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}/>
     </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});