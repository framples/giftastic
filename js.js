

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

            // Appending the image
            animalDiv.append(animalImage);
            animalDiv.append(pOne);

            $("#animal-view").prepend(animalDiv);


        }
    });

}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
   
    for (var i = 0; i < animals.length; i++) {

        var a = $("<button>");
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

// This function handles events where a movie button is clicked
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#animal-input").val().trim();

    // Adding movie from the textbox to our array
    animals.push(animal);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".animal-btn", displayAnimalGif);
$(document).on("click", ".animal-btn", clear);

// Calling the renderButtons function to display the intial buttons
renderButtons();


$(".animalImage").on("click", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    var dataState = "still";
    var dataAnimate = results[i].images.fixed_height.url;
    var dataStill = results[i].images.fixed_height_still.url;

    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === dataStill) {
        $(this).attr("src", $(this).attr(dataAnimate));
        $(this).attr(dataState, "animate");
    } else {
        $(this).attr("src", $(this).attr(dataStill));
        $(this).attr(dataState, "still");
    }
});

