var fetch = require('node-fetch');
// document.getElementById('U.S.').addEventListener("click", getData);

// $(document).ready(function () {
//     getData()

//     $(".nav-button").click(function () {
//         getData();
//     });
// });



var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=15430381f4634aa69e23e74c9597996e';
var req = new Request(url);
fetch(req)
    .then(function (response) {
        console.log(response.json());
    })


// var url = 'newsapi.org/v2/top-headlines?country=us&apiKey=15430381f4634aa69e23e74c9597996e';
// fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         // populate(data);
//     })
//     .catch(err => console.log(err));


function populate(data) {

    for (let i = 0; i < 10; i++) {
        let source = data.articles[i].source.name;
        let title = data.articles[i].title;
        let image = data.articles[i].urlToImage;
        document.getElementsByClassName('link')[i].innerHTML = title;
        console.log(source + '\n', title + '\n', image + '\n');
    }

}
