$("button").on("click", function() {
    //var topics = $(this).attr("data-person");
    var topics = ["Tacos", "Pizza", "Kebab", "Sushi", "Chicken Wings", "Ribs"]
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topics + "G3eD28XxfarV6iJve352wprTRCJcM4fm&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var topicsImage = $("<img>");
          topicsImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });