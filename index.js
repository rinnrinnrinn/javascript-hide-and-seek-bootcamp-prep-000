function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document
  .getElementById("ranked-list")
  .querySelectorAll("ul.ranked-list li");
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString();
}
}