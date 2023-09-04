        
const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader')


//we usw let because the value is going to change every time we make a request 
let photosArray = [];

// Unsplash 
const count = 30;
const apiKey = 'WZ2mTpYiYfrwIrdzH2XEgCTDMZc_3PEMA7ct-xbfvaQ';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Create elements for our links and phtos ,add to dom 
function displayPhotos() {
   //Run function for our each objects in photosArrsy  
   //pass variabel photos so that each object is going to assigned photo varibale as we run foreach 
    photosArray.forEach((photo) => {
    //Create <a>  to link unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html)
        //to open in new window
        item.setAttribute('target', '_blank')


    //Create <img> for photo
        const img = document.createElement('img')
        //to load the image
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)
 
//Put <img> inside <a> ,then put both inside imageContainer Element
        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}

 

 
//Get phtos from unspalsh api
async function getPhotos() {
    try {
        //going to fetch ffrom our api  
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    } catch (error) {

    }
}


getPhotos();