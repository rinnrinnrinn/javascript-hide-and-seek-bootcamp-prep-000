function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedTarget(element, criteriaFn) {
  for (let i = 0; i < element.length; i++) {
    if (criteriaFn(element[i])) {
      return element[i]
    }
  }
}