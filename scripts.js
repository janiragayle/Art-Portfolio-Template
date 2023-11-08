// scripts.js

function enlargeImage(element) {
    const enlargedImageContainer = document.getElementById('enlarged-image-container');
    const enlargedImage = document.getElementById('enlarged-image');
    const enlargedImageDescription = document.getElementById('enlarged-image-description');

    const image = element.querySelector('img');

    enlargedImage.src = image.src;

    // Toggle visibility of the description
    if (image.alt.trim() !== "") {
        enlargedImageDescription.textContent = image.alt;
        enlargedImageDescription.style.display = 'block';
    } else {
        enlargedImageDescription.style.display = 'none';
    }

    enlargedImageContainer.style.display = 'flex';
}

function shrinkImage() {
    const enlargedImageContainer = document.getElementById('enlarged-image-container');
    enlargedImageContainer.style.display = 'none';
}







