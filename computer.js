module.exports = {
  // TODO: Create our computer function here
  add: function (a, b) {
    if (arguments.length < 2) {
      throw "Arguments missing.";
    }

    if (a === null) {
      throw '"null" is not a valid number [arg 0].';
    }

    if (b === null) {
      throw '"null" is not a valid number [arg 1].';
    }

    if (a === undefined) {
      throw '"undefined" is not a valid number [arg 0].';
    }

    if (b === undefined) {
      throw '"undefined" is not a valid number [arg 1].';
    }

    if (typeof a === "string") {
      throw "a String is not a valid number [arg 0].";
    }

    if (typeof b === "string") {
      throw "a String is not a valid number [arg 1].";
    }

    return a + b;
  },
};
