var Button91 = document.getElementsByClassName("openButton")[90];

var dataAttributes91 = {
    element: "Praseodymium",
    image: "59.webp",
    text: "Praseodymium."
};

function openPopupWindow91() {
  var image = dataAttributes91.image;
  var text = dataAttributes91.text;
  var element = dataAttributes91.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent91 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent91);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button91.addEventListener("click", openPopupWindow91);