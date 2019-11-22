// import { Object } from './triangle.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework

let request = new XMLHttpRequest();
// const url = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.API_KEY}&s=SEARCH_QUERY`;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const response = JSON.parse(this.responseText);
    getElements(response);
  }
}

request.open("GET", url, true);
request.send();

const getElements = function(response) {
  // $('#gif').attr("src", response.data.images.original.url);
}
