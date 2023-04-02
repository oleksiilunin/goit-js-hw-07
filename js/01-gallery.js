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
	
console.log(galleryItems);



