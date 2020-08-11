$(document).ready(function () {
  const momentDate = moment().format("(M/D/YYYY)"); // current day

  // Getting Coordinates from current day api
  function getCoordinates(zipInput) {
    const queryURL =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      zipInput +
      "&apikey=955452fde6d16eea4b0e62b34551cd90&units=imperial";

    $.get(queryURL).then(function (response) {
      const lat = response.coord.lat; // latitude
      const lon = response.coord.lon; // longitude

      $("h2.city-title").text(response.name); // displaying city name
      $("h5.date").text(momentDate); // displaying date

      // setting icon on title page
      $(".title-icon")
        .attr("src", [
          "http://openweathermap.org/img/w/" +
            response.weather[0].icon +
            ".png",
        ]) // with descriptions
        .attr("alt", response.weather[0].description);

      getWeather(lat, lon);
    });
  }

  // getting current and future weather data via LAT & LON
  function getWeather(lat, lon) {
    var queryUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&apikey=955452fde6d16eea4b0e62b34551cd90&units=imperial";

    $.get(queryUrl).then(function (response) {
      var tempEl = $("<td>") // current temp
        .addClass("city-temp collection-item")
        .text("Temperature: " + response.current.temp + "° F")
        .prepend($("<i class='fas fa-thermometer-three-quarters'></i>"));
      var feelsLike = $("<td>") // feel temp
        .addClass("feels-like collection-item")
        .text("Feels Like: " + response.current.feels_like + "° F")
        .prepend($("<i class='fas fa-thermometer'></i>"));;
      var humEl = $("<td>") // current humidity
        .addClass("city-hum collection-item")
        .text("Humidity: " + response.current.humidity + "%")
        .prepend($("<i class='fas fa-hand-holding-water'></i>"));
      var windEl = $("<td>") // current wind speed
        .addClass("city-wind collection-item")
        .text("Wind Speed:   " + response.current.wind_speed + " MPH")
        .prepend($("<i class='fas fa-wind'></i>"));
      var uviData = response.current.uvi; // current UVI data
      var uviTitle = $("<td>").addClass("city-uviTitle").text("UV Index:  ").prepend($("<i class='fas fa-sun'></i>"));; // UVI label
      var uviBtn = $("<a>").addClass("btn-small").text(uviData); // UVI button
      // setting color of UVI btn according to sun safety guidelines
      if (uviData > 0 && uviData < 2) {
        // favorable
        uviBtn.addClass("green");
      } else if (uviData > 3 && uviData < 7) {
        // moderate
        uviBtn.addClass("yellow");
      } else {
        // severe
        uviBtn.addClass("red");
      }

      // appending current weather data elements to title card
      $(".location-specs")
        .append(tempEl, feelsLike, humEl, windEl)
        .append(uviTitle.append(uviBtn));

      // looping through the 5 day forecast
      for (var i = 1; i < 6; i++) {
        var time = moment.unix(response.daily[i].dt).format("dddd"); // getting date from API and setting format

        var card = $("<div>").addClass("card"); // creating card
        var cardTitle = $("<h4>").addClass("card-title header").text(time); // setting title

        // getting & setting icon code
        var cardIcon = $("<img>")
          .addClass("card-icon row")
          .attr("src", [
            "http://openweathermap.org/img/w/" +
              response.daily[i].weather[0].icon +
              ".png",
          ]) // with descriptions
          .attr("alt", response.daily[i].weather[0].description);

        // card temp
        var cardTemp = $("<h6>")
          .addClass("card-temp row")
          .text("Temp: " + response.daily[i].temp.day + "° F");

        // card humidity
        var cardHum = $("<h6>")
          .addClass("card-hum row")
          .text("Humidity: " + response.daily[i].humidity + "%");

        // appending card w/ elements
        $("#forecast").append(
          card
            .addClass("card-content forecast-content")
            .append(cardTitle)
            .append(cardIcon)
            .append(cardTemp)
            .append(cardHum)
        );
      }
    });
  }

  // function to make buttons beneath searchbar
  function makeRow(text) {
    var a = $("<a>").addClass("history").attr("role", "link").text(text);
    var li = $("<li>").append(a);
    $("ul.dropdown-content").prepend(li);
  }

  // preventing anything other than numbers to be allowed in the textbox
  $(".numbersOnly").keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, "");
  });

  // making buttons for each recent search input
  var history = JSON.parse(window.localStorage.getItem("history")) || ["04101"];
  for (var i = [history.length - 5]; i < history.length; i++) {
    // limiting the buttons to 5
    makeRow(history[i]);
  }

  // search button listener
  $("button.searchBtn").on("click", function () {
    var zipInput = $("#search").val(); // getting search input

    if (zipInput === "") {
      alert("must enter a zip code");
      reload();
    } else history.push(zipInput); // adding new input to history array
    window.localStorage.setItem("history", JSON.stringify(history)); // setting to local storage
    makeRow(zipInput);

    $("#forecast").empty(); // clearing forecast cards
    $(".location-specs").empty(); // clearing title card

    getCoordinates(zipInput); // getting lat & lon from zipcode

    $("#search").val(""); // clearing input text
  });

  // recent search links
  $(document).on("click", "a.history", function (event) {
    $("#forecast").empty(); // clearing previous forecast cards
    $(".location-specs").empty(); // clearing previous title card
    getCoordinates($(this).text()); // displaying new forecast & title card
  });

  // recent search drop down
  $(".dropdown-trigger").dropdown();

  // displaying last searched city
  getCoordinates(history[history.length - 1]);
});
