var words = ['Hello!', 'Ciao!', '你好! ', 'こんにちは!' ];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1500);
function update_carousel_words(){
  word.innerHTML = words[counter];
  counter++;
  if(counter >= words.length){
    counter = 0;
  }
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var message = document.getElementById("message");
message.Value = "";
var name = document.getElementById("name");
name.Value = "";

 /*$(document).ready(function(){
 $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});*/


function sendEmail() {
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  window.open('mailto:rinotesta@live.it?subject=Contatto da '+ subject.Value +'&body='+ message.Value);
  return false;
}
