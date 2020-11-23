import galleryItems from "./gallery-items.js";

const galleryUl = document.querySelector('.gallery');
const galleryLi = galleryUl.insertAdjacentHTML('afterbegin', galleryItems.map(({ preview, description, original}) => `<li class ="gallery__item"> <a class= "gallery__link" target = "_blank" href="${original}"><img data-source = ${original} class = "gallery__image" src = ${preview} alt = ${description}></a></li>`));
const lightBox = document.querySelector('.lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const galleryCloserButton = document.querySelector('.lightbox__button');

galleryUl.addEventListener('click', galleryOpener);

function galleryOpener(e) {
    
    if (e.target.nodeName === 'IMG') {
        lightBox.classList.add('is-open');
        console.dir(e.target)
        lightBoxImage.src = e.target.dataset.source;
        lightBoxImage.alt = e.target.alt;
    }
}
galleryCloserButton.addEventListener('click', galleryCloser)
function galleryCloser(e) {
    lightBox.classList.remove('is-open');
    lightBoxImage.src = '';
}