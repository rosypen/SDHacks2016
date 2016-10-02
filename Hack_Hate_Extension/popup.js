document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('select').addEventListener('click', response);
      function response() {
        console.log('clicked');
        if (window.getSelection) {
                  var range = window.getSelection ();
                  window.alert (range.toString ());
              });
            }
          }

    document.querySelector('a').addEventListener('click', twitter);

    function twitter() {
      async src="//platform.twitter.com/widgets.js" charset="utf-8";
    };

//  var range = selection.getRangeAt(0);
//  var allWithinRangeParent = range.commonAncestorContainer.getElementsByTagName("*");

//  var allSelected = [];
//  for (var i=0, el; el = allWithinRangeParent[i]; i++) {
  // The second parameter says to include the element
  // even if it's not fully selected
//    if (selection.containsNode(el, true) ) {
//      allSelected.push(el);
//    }
//  }
//}

//console.log('All selected =', allSelected);
