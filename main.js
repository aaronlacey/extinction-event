// Step 1
const list = document.querySelector('ol');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.textDecoration = 'line-through';
    });
    }
);

// Step 2
const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', () => {
        image.style.opacity = '0';
    });
}
);


// Step 3
const destroyButton = document.querySelector('#destroy-all');

destroyButton.addEventListener('click', () => {
    listItems.forEach(item => {
        item.style.textDecoration = 'line-through';
    });
    images.forEach(image => {
        image.style.opacity = '0';
    });
}
);
