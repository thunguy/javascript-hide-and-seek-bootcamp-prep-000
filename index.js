function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var nest = document.querySelector('#nested')
  var target = nest.querySelector('.target')
  
  return target
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for(let i = 0; i < rankedLists.length; i++) {
    const rankedList = rankedLists[i].querySelectorAll('li');

    for(let j = 0; j < rankedList.length; j++) {
      let li = rankedList[j];
      li.innerHTML = parseInt(li.innerHTML) + n;
    }
  }
}

function deepestChild() {
  let currentNode = document.getElementById('grand-node');
  let childNode = currentNode.querySelector('div');
  
  while (childNode) {
    currentNode = childNode;
    childNode = currentNode.querySelector('div');
  } 
  return currentNode
}

