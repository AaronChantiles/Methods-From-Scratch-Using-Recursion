// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  
  function test(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    };
    
    node.childNodes.forEach(function(child) {
      test(child);
    });
  };

  test(document.body);
  return results;
}
