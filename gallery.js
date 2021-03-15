import galleryItems from "./gallery-items.js";
const refs = {
    container: document.querySelector('.gallery'),
    modal: document.querySelector('.lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    closeButt: document.querySelector('[data-action="close-lightbox"]'),
    currentId: '',
}
refs.container.insertAdjacentHTML('afterbegin', galleryItems.map(({ preview, description, original }) => `<li><a href="${original}"><img src ='${preview}' alt ='${description}' data-source='${original}'></a></li>`).join(''));
refs.container.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.localName === 'img') {
           refs.modal.classList.add('is-open');
        refs.modalImage.src = e.target.dataset.source;
        refs.currentId = e.target.src;
    }else{
        return;
    }
});
function modalCloser() {
           refs.modal.classList.remove('is-open');
    refs.modalImage.src = '';
 
}
refs.modal.addEventListener('click', (e) => {
       if (e.target.classList.contains('lightbox__overlay') || e.target.hasAttribute('data-action')){
           modalCloser();
    } else {
        return
    }
})
        const images = document.querySelectorAll('[data-source]');

window.addEventListener('keydown', _.throttle((e) => {

    if (e.code === 'Escape') {
        modalCloser();
    } else if (e.code === 'ArrowRight') {

        images.forEach((element, index, array) => {
            if (element.src === refs.currentId && index < 8) {
                            
                refs.modalImage.src = array[index + 1].dataset.source;
                    refs.currentId = refs.modalImage.src;
            } else {
                return
            }
            
        })   
    }else if (e.code === 'ArrowLeft') {

        images.forEach((element, index, array) => {
            if (element.src === refs.currentId && index > 0) {
                            
                refs.modalImage.src = array[index - 1].dataset.source;
                    refs.currentId = refs.modalImage.src;
            } else {
                return
            }
            
        })   
    }
}, 1000));
