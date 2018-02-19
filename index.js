function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
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
  // // get the element 'grand-node' - this will include all of it's children
  //
  // var deep = document.querySelector('#grand-node');
  // // var deep = document.getElementById('grand-node');
  // // .querySelectorAll("div");
  // // the deepest revealed child is set to layer 1 within 'grand-node'
  // var deepest = deep.children[0];
  //
  // // while there are children
  // while (deepest) {
  //   // the working layer becomes the next deeper layer - it's own child
  //   deep = deepest;
  //   // the inner layer is pushed one layer deeper - the previous deepest's child
  //   deepest = deep.children[0];
  // }
  // return deepest;

  var deep = document.getElementById('grand-node').querySelectorAll('div');
return deep[deep.length-1];
}
// 
// function nestedTarget() {
//   return document.getElementById('nested').querySelector('.target');
// }
