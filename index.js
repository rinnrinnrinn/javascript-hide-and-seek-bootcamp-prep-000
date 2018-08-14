function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedtarget(div, targetName) {
  let current = targetName
  let next = []
  while (current) {
    if ((current)) {
      return current
    }