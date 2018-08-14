function getFirstSelector(selector) {
  var selectorName = document.querySelector(selector);
  return selectorName;
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
   for (let i = 0; i < upRank.length; i++){
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
}}

function deepestChild() {
  return document.getElementById('nested').querySelectorAll('div.grand-node')
}