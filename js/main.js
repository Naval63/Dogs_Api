// import '../scss/style.scss';

class Dogs {
    constructor() {
        this.apiUrl = 'https://dog.ceo/api/'
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
}

