// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  title = document.getElementById("bg-text");
  bgimg = document.getElementById("bgimg");
  if (!elementsOverlap(title, bgimg)){
      console.log("in")
      title.style = "visibility:hidden"
  }
    else{
        title.style = "visibility:visible"
    }
}

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom
  );
}
