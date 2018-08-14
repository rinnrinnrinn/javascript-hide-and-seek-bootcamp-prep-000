function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedtarget(document, criteriaFn) {
  for (let i = 0; i < document.length; i++) {
    if (criteriaFn(document[i])) {
      return document[i];
    }
  }}