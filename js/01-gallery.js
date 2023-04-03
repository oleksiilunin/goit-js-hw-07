import { galleryItems } from './gallery-items.js';
// Change code below this line

const markupGallery = document.querySelector('.gallery');

(function () {
	const markup = galleryItems.map(({ preview, original, description }) => `
	<li class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</li>
	`).join('');
	markupGallery.insertAdjacentHTML('beforeend', markup)	
})()

markupGallery.addEventListener('click', onClick);

function onClick(evt) {
	evt.preventDefault();

	if (!evt.target.classList.contains('gallery__image')) {
		return;
	}

	const { source } = evt.target.dataset;
	console.log(source);


	console.log(evt.target);
}
	
console.log(galleryItems);



