import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Creation gallery
const gallery = document.querySelector(".gallery");
const imageGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML("afterbegin", imageGallery);
gallery.addEventListener("click", onClickImage);

function createGallery(markup) {
  return markup
    .map((elem) => {
      const { preview, original, description } = elem;
      return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}/>
     </a>
        </div>`;
    })
    .join("");
}

//Click on image handler
function onClickImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}", width = "800", height = "600"></div>`
  );
  instance.show();

    gallery.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
}
