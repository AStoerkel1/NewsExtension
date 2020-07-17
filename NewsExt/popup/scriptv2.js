// var fetch = require('node-fetch');
// document.getElementById('U.S.').addEventListener("click", getData);

$(document).ready(function () {
    getData()

    $(".nav-button").click(function () {
        getData();
    });
});

function getData() {
    var myHeader = new Headers();
    var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=15430381f4634aa69e23e74c9597996e';
    fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: myHeader,
        cache: 'default',
    })
        .then(res => res.text())
        .then((data) => {
            data ? JSON.parse(data) : {};
        }).then(json => {
            console.log(json);
            populate(json);
        })
        .catch(e => console.log(e));
}


function populate(data) {

    for (let i = 0; i < 10; i++) {
        let source = data.articles[i].source.name;
        let title = data.articles[i].title;
        let image = data.articles[i].urlToImage;
        document.getElementsByClassName('link')[i].innerHTML = title;
        console.log(source + '\n', title + '\n', image + '\n');
    }

}
