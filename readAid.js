// Injecting a box into the browser
const init = function() {
    const newElement = document.createElement('div');
    newElement.className = 'pHOpenBtn';
    document.body.appendChild(newElement);
}
init();


const movingBox = document.querySelector('.pHOpenBtn');
let show = false;
let currentWidth = 300;
let currentHeight = 40;

document.body.addEventListener('mousemove', e => {
    movingBox.style.top = e.clientY + window.scrollY - currentHeight + 'px';
    movingBox.style.left = e.clientX - currentWidth + 'px';
});

document.addEventListener('keydown', e => {
    console.log(e.code);

    switch(e.code) {
        case 'Slash':
            show = !show;
            if (show) movingBox.style.display = 'block';
            else movingBox.style.display = 'none';
            break;
        case 'BracketRight':
            currentWidth = currentWidth + 20;
            movingBox.style.width = currentWidth + 'px';
            console.log(currentWidth);
            break;
        case 'BracketLeft':
            currentWidth = currentWidth - 20;
            movingBox.style.width = currentWidth + 'px';
            break;
        case 'Minus':
            currentHeight = currentHeight - 10;
            movingBox.style.height = currentHeight + 'px';
            break;
        case 'Equal':
            currentHeight = currentHeight + 10;
            movingBox.style.height = currentHeight + 'px';
            break;
    }
});