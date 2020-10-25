# JustWatch API
Unofficial API wrapper for Justwatch.com  
  
![image](https://user-images.githubusercontent.com/17960677/97101621-013bd980-16c5-11eb-8758-3a7b28fe9829.png)

## How to use
The Following code snippet will help you understand how it works  
```js
var jw = require("justwatch");
var movies = await jw.search("query");
// returns a list of movies

var persons = await jw.search("query",person(boolean));
// returns a list of people

var movie = await jw.get("movie_id");
// returns details about the movie
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios

## Credits

* [Justwatch](https://justwatch.com) For making an excellent tool

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information


