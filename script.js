var url = 'http://api.icndb.com/jokes/random';
document.getElementById('get-joke').addEventListener('click', function(){
    getJoke();
});
document.addEventListener('HTMLContentLoaded', getJoke());
var paragraph = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    })
    xhr.send();
}