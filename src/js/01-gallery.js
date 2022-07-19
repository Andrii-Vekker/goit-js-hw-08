// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", galleryHandler);

function galleryHandler(e) {
    e.preventDefault();
      if (e.target.nodeName !== "IMG") {
    return
  };
   const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
       captionPosition: "bottom",
       showCounter: true,
 enableKeyboard: true
});
};

function createMurkup(items) {
    return items.map(i => `<a class="gallery__item" href="${i.original}">
  <img class="gallery__image" src="${i.preview}" alt="${i.description}" />
</a>`).join("");
};
createMurkup(galleryItems)
function insertGalleryItems(string) {
    galleryRef.insertAdjacentHTML("beforeend", string);
}
insertGalleryItems(createMurkup(galleryItems));