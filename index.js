var axios = require("axios");

module.exports = class Justwatch {
  constructor(locale = "en_US") {
    this.locale = locale;
  }

  async search(q,isPerson,n) {
    var type = isPerson?"person":"movie";
    n = +n || 15;
    var data = await axios('https://apis.justwatch.com/content/titles/"+locale+"/popular?body={"page_size":'+n+',"page":1,"query":"'+q.split(" ").join("+")+'","content_types":["'+type+'"]}');
    return data.data;
  }

  async get(id) {
    var data = await axios("https://apis.justwatch.com/content/titles/movie/"+id+"/locale/"+locale);
    return data.data;
  }
}
