

var animals = ["Dog", "Zebra", "Donkey", "King Cobra"];
console.log(animals);


function displayAnimalGif() {

    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4hGsJk08UsSjH397jHmLZYjUbRYRTcKX&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var animalDiv = $("<div class='animal'>");
        var results = response.data;
        console.log(response);

        for (var i = 0; i < results.length; i++) {

            var rating = results[i].rating;
            console.log(rating);

            var pOne = $("<p>").text("Rating: " + rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
           // animalImage.attr("data-still", results[i].images.fixed_height_still.url);
           // animalImage.attr("data-animate", results[i].images.fixed_height.url);
           // animalImage.attr("data-state", "still");
           // animalImage.attr("class", "gif");

            animalDiv.append(animalImage);
            animalDiv.append(pOne);

            $("#animal-view").prepend(animalDiv);

          //  function changeState(){
          //      var state = $(this).attr("data-state");
           //     var animateImage = $(this).attr("data-animate");
          //      var stillImage = $(this).attr("data-still");
            
          //      if (state == "still") {
          //          $(this).attr("src", animateImage);
         //           $(this).attr("data-state", "animate");
         //       }
            
          //      else if (state == "animate") {
          //          $(this).attr("src", stillImage);
           //         $(this).attr("data-state", "still");
           //     }
          //  }
           // $(document).on("click", ".gif", changeState);

        }
    });

}


function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < animals.length; i++) {

        var a = $("<button>");
        a.attr("type","button");
        // Adding a class to our button
        a.addClass("animal-btn");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the initial button text
        a.text(animals[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

function clear() {
    $("#animal-view").empty();
}


$("#add-animal").on("click", function (event) {
    event.preventDefault();

    var animal = $("#animal-input").val().trim();
    animals.push(animal);

    renderButtons();
});


$(document).on("click", ".animal-btn", displayAnimalGif);
$(document).on("click", ".animal-btn", clear);

renderButtons();





