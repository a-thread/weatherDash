$(document).ready(function () {
  // sidebar
  const momentDate = moment().format("(M/D/YYYY)"); // current day
  const inputEl = $("#city"); // search input field

  // maine content
  const titleEl = $("h3.city-title"); // title of main content
  const dateEl = $("h5.date");
  const titleTemp = $("p.title-temp");
  const titleHum = $("p.title-hum");
  const titleWind = $("p.title-wind");
  const titleUv = $("p.title-uv");

  // forecast cards

  // Function to get
  function getCoordinates() {
    const inputName = inputEl.val();
    const queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputName +
      "&apikey=955452fde6d16eea4b0e62b34551cd90";

    $.get(queryURL).then(function (response) {
      const lat = response.coord.lat;
      const lon = response.coord.lon;

      console.log(lat);
      console.log(lon);

      // creating button below search bar
      var newLocationDiv = $("<a>").addClass("collection-item").text(inputName);
      $(".collection").prepend(newLocationDiv);

      titleEl.text(inputName); // displaying city name
      dateEl.text(momentDate); // displaying date
    });
  }

  let savedCities = [];

  $(".searchBtn").on("click", function () {
    var cityInput = inputEl.val();

    localStorage.setItem("savedCities", JSON.stringify(cityInput));

    savedCities.push(cityInput);

    getCoordinates();

    console.log(savedCities);

    inputEl.val(""); // clearing searchbar text

  });
  
  function recentSearches() {
    $.each(storedCities, function (i) {
      // creating button below search bar
      var newLocationDiv = $("<a>").addClass("collection-item").text(storedCities[i]);
      $(".collection").prepend(newLocationDiv);
    });
    
  }
});

//   // setting icon on title page
//   var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
//   $(".title-icon").attr("src", iconUrl);

// localStorage.push(inputName, momentDate); // setting the date of our search
// console.log("location:", inputName);
// console.log("date: ", momentDate);

// // Parse the serialized data back into an aray of objects
// citysArr = JSON.parse(localStorage.getItem("window")) || [];
// // Push the new data (whether it be an object or anything else) onto the array
// citysArr.push(inputName);
// // Re-serialize the array back into a string and store it in localStorage
// localStorage.setItem("window", JSON.stringify(citysArr));
