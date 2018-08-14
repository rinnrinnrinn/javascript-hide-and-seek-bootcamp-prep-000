function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var parsed = parseInt(n);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}