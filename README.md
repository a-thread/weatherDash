# 06 Server-Side APIs: Weather Dashboard
![license](https://img.shields.io/github/license/a-thread/Weather-API-Aiden)

### [My weatherDash Site](https://a-thread.github.io/Weather-API-Aiden/)

### Description
**weatherDash** is a weather dashboard that displays current weather data as well as a five day forecast for a chosen city via user input. The user is able to input their city by zip code to return current and upcoming weather data including: temperature, humidity, wind speed, and UV index. 

![demo of site](/assets/images/demo-nl.gif)

### Technologies Used
- OpenWeather APIs:
  >1. Current Weather API
  >2. One Call API
- Moment.js
- Materialize
- Javascript
- jQuery
- Flexbox
- Canva

### API Usage
Since the One Call API only uses lat and lon inputs, I used the Current Weather API to get the lat and lon of the search input to feed into the One Call. It is through One Call that I was able to show the current and future weather including the UVI of each day. 

Reading the documentation of each API before diving in was extremely helpful. Because of that, I was able to include **units: imperial** in my api calls to avoid to converting the results from Kelvin.

### Materialize
For our first project we were asked to use a CSS framework other than Bootstrap so I decided to use Materialize for this assignment as well to get in some extra practice. This is made me REALLY appreciate Bootstrap's documentation as Materialize is much smaller and has far more limited capabilities. 

### Styling & Responsiveness
Originally I made the site look more similar to the example given to us. Since I had some extra time, I decided to develop my original site to make an app that I would want to use outside of this class. I added a custom logo, put the search bar in the nav and consolodated the recent searches into a drop down to save space. See the original below.

![Original Site](assets/images/site1.gif)

*If you have any questions email [aiden.threadgoode@gmail.com](mailto:aiden.threadgoode@gmail.com).*
