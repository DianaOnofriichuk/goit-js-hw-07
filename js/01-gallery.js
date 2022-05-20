import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector(`.gallery`)
const markup = galleryItems
  .map(
    (item) =>
      `<a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>`,
  )
  .join('')
gallery.insertAdjacentHTML('beforeend', markup)
gallery.addEventListener(`click`, onImageClick)

function onImageClick(event) {
  event.preventDefault()
  if (!event.target.classList.contains(`gallery__image`)) {
    return
  }

  const url = event.target.dataset.source
  const instance = basicLightbox.create(`
  <img src=${url} width="800" height="600">
`)
  instance.show()

  const onKeyClose = (event) => {
    if (event.code === 'Escape') {
      instance.close()
      gallery.removeEventListener(onKeyClose)
    }
  }
  gallery.addEventListener('keydown', onKeyClose)
}
