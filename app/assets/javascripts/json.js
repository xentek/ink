$(document).ready(function() {
  console.log(treeIDs)

  var treeID
  var root = {id:origin, children:[]};
  splitTree(root);
  
  $('#tree-json').html(JSON.stringify(root))

  function splitTree(root) {
    for (var i=1; i<treeIDs.length; i++) {
      treeID = treeIDs[i].id.split(',');
      children = root.children;

      for (var j=0; j<treeID.length; j++) {
        children = addChild(children, treeID[j]);      
      }
    }
  }

  function addChild(children, name) {
    for (var i=0; i<children.length; i++) {
      if (children[i].name == name) {
        return children[i].children;        
      }
    }
    children.push({'id': name, 'children':[]});
    return children[children.length - 1].children;
  }

})
  