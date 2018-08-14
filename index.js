function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedtarget(selector, targetName) {
  let current = targetName
  let next = []
  while (current) {
    if (selector(current)) {
      return current
    }