//This Javascript is supposed to make the accordions collapse and expand
//The active attribute makes the +/- symbols (according to the css)
//The show attribute displays the panel (hidden text)

//Currently, it does not work with on the extension
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    };
}
