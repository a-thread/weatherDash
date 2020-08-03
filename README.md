# 06 Server-Side APIs: Weather Dashboard

### My Weather Dashboard
[Aiden's Weather Dashboard](https://a-thread.github.io/Weather-API-Aiden/)

![demo of site](/assets/images/demo.gif)

### Assignment Criteria
The assignment was to create a weather dashboard using the OpenWeather API. The criteria:
- to search for a city via an input field and be shown the current weather conditions as well as a 5-day forecast
- the current weather conditions needed to include the cities name, the date, an icon representing the weather conditions, the temperature, the humidity, the wind speed, and the UV index with a color indicating whether conditions were favorable, moderate or severe
- the 5-day forecast needed to include: the date, an icon representation of weather conditions, the temperature, and the humidity
- the site also needed to include a search history with active links to present corresponding with current and future conditions for that city
- the site also needed to automatically load the last city searched

### API Experience
I used two APIs in this project, the Current Weather API and the One Call API. Since the One Call API only uses lat and lon inputs, I used the Current Weather API to get the lat and lon of the search input to feed into the One Call. It is through One Call that I was able to show the current and future weather including the UVI of each day. 

Something my tutor emphasized was reading the documentation of each API before diving in and that was extremely helpful. I think a great example of this was including **units: imperial** in my api calls so that I didn't have to convert the results from Kelvin afterwards.

### Materialize
For our first project we were asked to use a CSS framework other than Bootstrap so I decided to use Materialize for this assignment as well to get in some extra practice. This is made me REALLY appreciate Bootstrap's documentation as Materialize's documentation is much more limited. That being said, I think the site turned out really well and I enjoyed learning more about a different framework

### Local Storage
This really pushed my boundaries because before embarking on this assignment, I hadn't successfully saved anything to local storage. I still have a lot to learn but I feel like I have a better grasp on how local storage works and how to use it to power apps such as these. 

### jQuery
I really enjoyed this assignment as it pushed me to focus on organization as I traversed the DOM. I feel like I'm getting a better understanding of how to organize my js files so that.
