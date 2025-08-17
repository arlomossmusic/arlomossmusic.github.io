// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.opacity = "100%";
  } else {
    document.getElementById("navbar").style.opacity = "0%";
  }
}