function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedTarget() {
  return document.getElementByID('nested').querySelector('div.target')
}

