function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedtarget(div, target) {
  let current = div
  let next = []
  