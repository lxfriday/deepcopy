module.exports = function deepCopy() {
  if (!arguments.length) return {};
  if (arguments.length === 1) {
    return deepCopy({}, arguments[0]);
  }
  var target = arguments[0];
  var i = 1;
  for (; i < arguments.length; i++) {
    var currentObj = arguments[i];
    for (var j in currentObj) {
      if (currentObj.hasOwnProperty(j)) {
        var currentValue = currentObj[j];
        if (typeof currentValue === 'object') {
          target[j] = deepCopy({}, currentValue);
        } else {
          target[j] = currentObj[j];
        }
      }
    }
  }
  return target;
};
