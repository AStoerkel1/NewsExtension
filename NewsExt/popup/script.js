let sec = "U.S.";
let data = {};
/* wait until the document is ready */
$(document).ready(function () {
  /* then get data from the API */
  getData(sec);
  /**
   * when a button is clicked,
   * get the class name and put that into the API URL
   */
  $(".nav-button").click(function () {
    $(this).attr("id", function (n, id) {
      getData(id);
    });
  });
});

/**
 * function to fetch the data from the API,
 * log it on the console and
 * send that data to the page
 */
function getData(section) {

  fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${section.toLowerCase()}.json?api-key=ajba3SMj5gAAjiZG7WjOXdJ3htyjVE1h`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      populate(data, section);
    });
}

/**
 * populates the page with the information
 * from the API
 */
function populate(data, sec) {
  for (let i = 0; i <= 9; i++) {
    let title = data.results[i].title;
    let link = data.results[i].url;
    let photo = data.results[i].multimedia != null ? data.results[i].multimedia[0].url : "LogoMakr_5kNAVC.png";
    let cap = data.results[i].multimedia != null ? data.results[i].multimedia[0].caption : "No Image";
    $("#link" + i).attr("href", link);
    $("#title" + i).text(title);
    $("#image" + i).attr("src", photo).attr("alt", cap);
    $("h1").text(sec);
  }
}
