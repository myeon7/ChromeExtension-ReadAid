
// Injecting a box into the browser
const init = function() {
    const newElement = document.createElement('div');
    newElement.className = 'pHOpenBtn';
    document.body.appendChild(newElement);
}
init();



const movingBox = document.querySelector('.pHOpenBtn');
let show = true;


document.body.addEventListener('mousemove', e => {
    movingBox.style.top = e.clientY + window.scrollY - 30 + 'px';
    movingBox.style.left = e.clientX - 450 + 'px';
});

document.addEventListener('keydown', e => {
    console.log(e.code);

    switch(e.code) {
        case 'Slash':
            show = !show;
            if (show) movingBox.style.display = 'block';
            else movingBox.style.display = 'none';
            break;
    }
});
