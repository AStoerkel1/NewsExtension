$(document).ready(getData("U.S."));

function getData(sec){
  $.getJSON("https://api.nytimes.com/svc/news/v3/content/nyt/" + sec.toLowerCase() + ".json?api-key=ajba3SMj5gAAjiZG7WjOXdJ3htyjVE1h",
  function(data) {
    console.log(data);
    for(var i =0; i <= 9; i++){
      var title= data.results[i].title;
      var link= data.results[i].url;
      var photo = (data.results[i].multimedia != null) ? data.results[i].multimedia[0].url : "";
      $("#link" + i).attr("href", link);
      $("#title" + i).text(title);
      $("#image" + i).attr("src", photo);
      $("h1").text(sec);
    }

  });
}
