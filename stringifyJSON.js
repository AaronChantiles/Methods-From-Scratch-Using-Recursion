// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primitive types
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return "" + obj;
  }

  //undefined and functions
  if (obj === undefined || obj.constructor === Function) { 
  	return; 
  }

  //strings
  if (obj.constructor === String) {
    return '"' + obj + '"';
  }

  //arrays
  if (obj.constructor === Array) {
    if (obj.length) {
      var arrayJSON = [];

      for (var i = 0; i < obj.length; i++) {
        arrayJSON.push(stringifyJSON(obj[i]));
      }

      return '[' + arrayJSON.join(",") + ']';
    } else {
      return '[]';
    }
  }

  //objects
  if (obj.constructor === Object) {
    var keys = Object.keys(obj);
    if (keys.length) {
      var objectJSON = '';

      for (var n = 0; n < keys.length; n++) {
        var key = keys[n];

        if (!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {

        } else if (n === keys.length - 1) {
            objectJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          } else {
            objectJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
          }
      }
      return '{' + objectJSON + '}';
    } else {
      return '{}';
    }
  }

};

var object = {key1: "value1", key2: "value2", key3: function(){}, key4: undefined, key5: [1,2,3]};

console.log(stringifyJSON(object));