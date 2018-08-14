function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedTarget() {
  let current = div
  let next = []
  while (current) {
    if (selector(current)) {
      return current
    }