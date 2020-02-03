// import '../scss/style.scss';

class Dogs {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api';
        this.imgEl = document.querySelector('.featured-dog img')

        this.init();
    }

listBreeds() {
   return fetch(`${this.apiUrl}/breeds/list/all`)
    .then(response => response.json())
    .then(data => data.message);
    }

getRandomImage() {
    return fetch(`${this.apiUrl}/breeds/image/random`)
     .then(response => response.json())
     .then(data => data.message);
    }

getRandomImageByBreed(breed) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
     .then(response => response.json())
     .then(data => data.message);
    }

    init() {
        this.getRandomImage()
            .then(src => this.imgEl.setAttribute('src', src));

        this.listBreeds()
            .then(breeds => console.log(breeds))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Dogs();
})
