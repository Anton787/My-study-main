// Открытие текста далее
const buttons = document.querySelectorAll('.interact-info button');
const paragraphs = document.querySelectorAll('.information');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for (j = 0; j < paragraphs[i].children.length; j++){
            paragraphs[i].children[j].style.display = 'block'
        }
        buttons[i].style.display = 'none';
    });
}


// Галерея 

const current_img = document.querySelector('.filling');
const mainPhoto = document.getElementById('main-photo');
const allPhotos = document.querySelectorAll('.all-photo li img');

for (let i = 0; i < allPhotos.length; i++) {
    allPhotos[i].addEventListener('click', () => {
        mainPhoto.src = allPhotos[i].src;
        current_img.style.left = i*200 + 'px'
    });
}
