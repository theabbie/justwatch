var axios = require("axios");

class Justwatch {
  constructor() {}

  static async search(q,isPerson) {
    var type = isPerson?"person":"movie";
    var data = await axios('https://apis.justwatch.com/content/titles/en_US/popular?body={"page_size":5,"page":1,"query":"'+q.split(" ").join("+")+'","content_types":["'+type+'"]}');
    return data.data;
  }

  static async get(id) {
    var data = await axios("https://apis.justwatch.com/content/titles/movie/"+id+"/locale/en_IN");
    return data.data;
  }
}
