var prefix = "https://cors-anywhere.herokuapp.com/";
var url = 'http://api.icndb.com/jokes/random';
// url = 'https://www.google.com/costam';
var paragraph = document.getElementById('joke');
document.getElementById('get-joke').addEventListener('click', getJoke);
document.addEventListener('HTMLContentLoaded', getJoke());

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', prefix + url);
    xhr.addEventListener('load', function () {
        try {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.response);
                paragraph.innerHTML = response.value.joke;
            } else {
                throw 'Oops! Something went wrong, I could not get joke!'
            }
        } catch (error) {
            alert(error);
        }
    });

    xhr.send();
} 
