# 06 Server-Side APIs: Weather Dashboard

### [My Weather Dashboard](https://a-thread.github.io/Weather-API-Aiden/)

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
For our first project we were asked to use a CSS framework other than Bootstrap so I decided to use Materialize for this assignment as well to get in some extra practice. This is made me REALLY appreciate Bootstrap's documentation as Materialize is much smaller and has far more limited capabilities. 

### Styling & Responsiveness
Originally I made the site look more similar to the example:

![Original Site](assets/images/site1.gif)

Since I had some extra time this week, I thought I would develop it a bit further and make an app that I would want to use outside of this class. I added a custom logo, put the search bar in the nav and consolodated the recent searches into a drop down to save space. In this exercise I realized how helpful flexbox is. Trying to make this mobile-first but still look polished on a larger screen proved to be a bit more complicated for me than our previous activities. 

*If you have any questions email [aiden.threadgoode@gmail.com](mailto:aiden.threadgoode@gmail.com).*