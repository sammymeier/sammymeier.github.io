const displayedImage = document.querySelector('.displayed-img');
const thumBar = document.querySelector('thum-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
    'pic1.jpg' : 'Description',
    'pic2.jpg' : 'Description',
    'pic3.jpg' : 'Description',
    'pic4.jpg' : 'Description',
    'pic5.jpg' : 'Description'
}

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/${image}');
    newImage.setAttribute('alt', alts[image]);
    thumBar.appendChild(newImage);
    newImage.addEventListener('click', e=> {
        displayedImage.src = e.target.src;
        displayedImage.addEventListener;t = e.target.alt;
    });
}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.getElementsByClassName.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
            btn.setAttribute('class','dark');
            btn.textContent = 'Darken';
            overlay.getElementsByClassName.backgroundColor = 'rgba(0,0,0,0)';
        }
})
