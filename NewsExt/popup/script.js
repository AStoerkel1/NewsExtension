var sec = "U.S.";
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
function getData(sec) {
  $.getJSON(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${sec.toLowerCase()}.json?api-key=ajba3SMj5gAAjiZG7WjOXdJ3htyjVE1h`,
    function (data) {
      console.log(data);
      populate(data, sec);
    }
  );
}

/**
 * populates the page with the information
 * from the API
 */
function populate(data, sec) {
  for (var i = 0; i <= 9; i++) {
    var title = data.results[i].title;
    var link = data.results[i].url;
    var photo = data.results[i].multimedia != null ? data.results[i].multimedia[0].url : "LogoMakr_5kNAVC.png";
    var cap = data.results[i].multimedia != null ? data.results[i].multimedia[0].caption : "No Image";
    $("#link" + i).attr("href", link);
    $("#title" + i).text(title);
    $("#image" + i).attr("src", photo).attr("alt", cap);
    $("h1").text(sec);
  }
}
