// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

createGaleryMarkup(galleryItems);

function createGaleryMarkup (galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        `;
    }
).join("");
    galleryRef.insertAdjacentHTML("beforeend", markup);
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
})