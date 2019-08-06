

    var animals = ["Dog", "Zebra", "Donkey", "King Cobra"];
    console.log(animals);

    // displayMovieInfo function re-renders the HTML to display the appropriate content
    function displayMovieInfo() {

        var animal = $(this).attr("data-name");
        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4hGsJk08UsSjH397jHmLZYjUbRYRTcKX&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            // Creating a div to hold the movie
            var animalDiv = $("<div class='animal'>");
            var results = response.data;
        
            console.log(response);

            for (var i = 0; i < results.length; i++) {
                

            
            

            // Storing the rating data
            var rating = results[i].rating;
            console.log(rating);

            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rating);

            // Displaying the rating
          


        

            // Creating an element to hold the image
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the image
            animalDiv.append(animalImage);
            animalDiv.append(pOne);

            $("#animal-view").prepend(animalDiv);

            // Putting the entire movie above the previous movies
           // $("#animals-view").prepend(animalDiv);
        }});

    }

    // Function for displaying movie data
    function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < animals.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of movie-btn to our button
            a.addClass("animal-btn");
            // Adding a data-attribute
            a.attr("data-name", animals[i]);
            // Providing the initial button text
            a.text(animals[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
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
    $(document).on("click", ".animal-btn", displayMovieInfo);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();


    $(".animalImage").on("click", function() {
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

