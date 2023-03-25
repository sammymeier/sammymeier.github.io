const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic6.jpg', `pic7.jpg`, `pic8.jpg`, `pic9.jpg`, `pic10.jpg`];
const alts = {
  'pic6.jpg' : 'Shoes and clothes',
  'pic7.jpg' : 'Disco ball',
  'pic8.jpg' : 'Clothes and flowers',
  'pic9.jpg' : 'Drinks',
  'pic10.jpg' : 'Me posing in front of a car'
}


    for (const image of images) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `images/${image}`);
        newImage.setAttribute('alt', alts[image]);
        thumbBar.appendChild(newImage);
        newImage.addEventListener('click', e => {
          displayedImage.src = e.target.src;
          displayedImage.alt = e.target.alt;
        });
      }

      btn.addEventListener('click', () => {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
          btn.setAttribute('class','light');
          btn.textContent = 'Lighten';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
          btn.setAttribute('class','dark');
          btn.textContent = 'Darken';
          overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
      });
