$(document).ready(function () {
  const momentDate = moment().format("(M/D/YYYY)"); // current day

  $(".searchBtn").on("click", function () {
    var cityInput = $("#city").val(); // getting

    makeRow(cityInput);

    getCoordinates(cityInput);

    $("#city").val(""); // clearing searchbar text
  });

  function makeRow(text) {
    var li = $("<a>").addClass("collection-item history").text(text);
    $(".collection").prepend(li);
  }

  $(".history").on("click", "li", function () {
    getCoordinates($(this).text());
    console.log("click");
  });

  // Function to get Coordinates
  function getCoordinates(cityInput) {
    const queryURL =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      cityInput +
      "&apikey=955452fde6d16eea4b0e62b34551cd90&units=imperial";

    $.get(queryURL).then(function (response) {
      if (history.indexOf(cityInput) === -1) {
        history.push(cityInput);
        window.localStorage.setItem("history", JSON.stringify(history));
      }
      const lat = response.coord.lat; // latitude
      const lon = response.coord.lon; // longitude

      $("h3.city-title").text(response.name); // displaying city name
      $("h5.date").text(momentDate); // displaying date

      // setting icon on title page
      $(".title-icon").attr("src", [
        "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
      ]).attr("alt", response.weather[0].description);

      getWeather(lat, lon);
    });
  }

  function getWeather(lat, lon) {
    var queryUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&apikey=955452fde6d16eea4b0e62b34551cd90&units=imperial";

    $.get(queryUrl).then(function (response) {
      var tempEl = $("<h6>")
        .addClass("city-temp")
        .text("Temperature: " + response.current.temp + "° F"); // temp
      var humEl = $("<h6>")
        .addClass("city-hum")
        .text("Humidity: " + response.current.humidity + "%"); // humidity
      var windEl = $("<h6>")
        .addClass("city-wind")
        .text("Wind Speed: " + response.current.wind_speed + "MPH"); // wind speed
      var uviData = response.current.uvi; // UVI data
      var uviTitle = $("<h6>").addClass("city-uviTitle").text("UV Index:  "); // UVI label
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

      // appending current elements to title card
      $(".location-specs")
        .append(tempEl, humEl, windEl)
        .append(uviTitle.append(uviBtn));

      // looping through the 5 day forecast
      for (var i = 1; i < 6; i++) {
        var time = moment.unix(response.daily[i].dt).format("ddd"); // getting date from API and setting format

        var card = $("<div>").addClass("card"); // creating card
        var cardTitle = $("<h7>").addClass("card-title").text(time); // setting title

        // getting & setting icon code
        var cardIcon = $("<img>").attr("src", [
          "http://openweathermap.org/img/w/" +
            response.daily[i].weather[0].icon +
            ".png",
        ]).attr("alt", response.daily[i].weather.description);

        // card temp
        var cardTemp = $("<p>")
          .addClass("card-temp")
          .text("Temp: " + response.daily[i].temp.day + "° F");

        // card humidity
        var cardHum = $("<p>")
          .addClass("card-temp")
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

  // making buttons for each recent search
  var history = JSON.parse(window.localStorage.getItem("history")) || [];
  for (var i = 0; i < history.length; i++) {
    makeRow(history[i]);
  }

  // recent search button links
  $("a.history").on("click", function () {
    $("#forecast").empty(); // clearing previous forecast cards
    $(".location-specs").empty(); // clearing previous title card
    getCoordinates($(this).text()); // displaying new forecast & title card
  });

  getCoordinates('04070');
});
