// const { BadRequestError } = require("../utils/errors");

// class GiftExchange {
//   static pairs(names) {
//     if (names.length % 2 != 0) {
//       throw new BadRequestError();
//     }

//     var newNames = [];
//     for (let i = 0; i < names.length; i++) {
//       while (true) {
//         var name = Math.floor(Math.random() * names.length);
//         if (newNames.includes(name)) {
//           continue;
//         } else {
//           newNames.includes(name);
//           break;
//         }
//       }
//     }

//     var final = [];
//     for (let i = 0; i < newNames.length; i++) {
//       var current = names[newNames[i]];
//       var nextOne = i + 1;
//       var nextName = names[newNames[nextOne]];
//       var tuple = [current, nextName];
//       final.push(tuple);
//       i++;
//     }
//     return final;
//   }

//   static traditional(names) {
//     var NewNames = [];
//     for (let i = 0; i < names.length; i++) {
//       while (true) {
//         var name = Math.floor(Math.random() * names.length);
//         if (NewNames.includes(names[name])) {
//           continue;
//         } else {
//           NewNames.push(names[name]);
//           break;
//         }
//       }
//     }

//     var final = [];
//     for (let i = 0; i < NewNames.length - 1; i++) {
//       var stringOutput =
//         NewNames[i] + " is giving a gift to " + NewNames[i + 1];
//       final.push(stringOutput);
//     }
//     var one = NewNames[0];
//     var last = NewNames[NewNames.length - 1];
//     var finalStr = last + "is giving a gift to " + one;
//     final.push(finalStr);
//     return final;
//   }
// }

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
