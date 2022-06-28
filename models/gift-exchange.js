// module.exports = GiftExchange;
const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static pairs(names) {
    if (names.length % 2 != 0) {
      throw new BadRequestError();
    }
    var acc = [];
    var size = names.length;
    for (let i = 0; i < size; i++) {
      while (true) {
        var temp = Math.floor(Math.random() * size);
        if (acc.includes(temp)) {
          continue;
        } else {
          acc.push(temp);
          break;
        }
      }
    }

    var res = [];
    for (let i = 0; i < acc.length; i++) {
      var currName = names[acc[i]];
      var next = i + 1;
      var nextName = names[acc[next]];
      var tuple = [currName, nextName];
      res.push(tuple);
      i++;
    }
    return res;
  }

  static traditional(names) {
    var acc = [];
    var size = names.length;
    for (let i = 0; i < size; i++) {
      while (true) {
        var temp = Math.floor(Math.random() * size);
        if (acc.includes(names[temp])) {
          continue;
        } else {
          acc.push(names[temp]);
          break;
        }
      }
    }

    var res = [];
    for (let i = 0; i < acc.length - 1; i++) {
      var temp = acc[i] + " is giving a gift to " + acc[i + 1];
      res.push(temp);
    }

    var first = acc[0];
    var last = acc[acc.length - 1];
    var finalGift = last + " is giving a gift to " + first;
    res.push(finalGift);
    return res;
  }
}

module.exports = GiftExchange;
