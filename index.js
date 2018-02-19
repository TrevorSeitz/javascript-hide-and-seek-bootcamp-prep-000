function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
  // ALSO return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
//   const rankList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
//   for (var i = 0; i < rankList.length; i++) {
//     rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n;
//   }

  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }

}

function deepestChild() {
  // //  similar to nestedTarget - go into the ID 'grand-node' and lookthrough all of the 'div's
  // var deep = document.getElementById('grand-node').querySelectorAll('div');
  // // return whatever is in the last div
  // return deep[deep.length-1];
  function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

}
