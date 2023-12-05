var Button44 = document.getElementsByClassName("openButton")[43];

var dataAttributes44 = {
    element: "Ruthenium",
    image: "44.webp",
    text: "Ruthenium."
};

function openPopupWindow44() {
  var image = dataAttributes44.image;
  var text = dataAttributes44.text;
  var element = dataAttributes44.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent44 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent44);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button44.addEventListener("click", openPopupWindow44);