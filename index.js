var axios = require("axios");

module.exports = class Justwatch {
  constructor() {}

  static async search(q,isPerson,n) {
    var type = isPerson?"person":"movie";
    n = +n || 15;
    var data = await axios('https://apis.justwatch.com/content/titles/en_US/popular?body={"page_size":'+n+',"page":1,"query":"'+q.split(" ").join("+")+'","content_types":["'+type+'"]}');
    return data.data;
  }

  static async get(id) {
    var data = await axios("https://apis.justwatch.com/content/titles/movie/"+id+"/locale/en_IN");
    return data.data;
  }
}
