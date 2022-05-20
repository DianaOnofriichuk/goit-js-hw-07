import { galleryItems } from './gallery-items.js'

const galleryEl = document.querySelector(`.gallery`)
const markup = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description} />
    </a>`,
  )
  .join('')
galleryEl.insertAdjacentHTML('beforeend', markup)
galleryEl.addEventListener(`click`, onImageClick)

function onImageClick(event) {
  event.preventDefault()
  if (!event.target.classList.contains(`gallery__image`)) {
    return
  }

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  })
  gallery.refresh()
}
