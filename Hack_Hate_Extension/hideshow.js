//This JQuery File is supposed to initiate an event when items of the 'hideshow' id
//Are clicked. The event that is initiated is displaying the block with the
//'content' class.

//This did not work but if you wanted to work on making it work you'd have to
//change the classes and ids on the html file and include this link:
//"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" in the
//permissions section of the manifest file. That imports jquery library.

$(document).ready(function(){
  $('#hideshow').on('click', function(event) {
    $('.content').toggle('show');
  });
});
