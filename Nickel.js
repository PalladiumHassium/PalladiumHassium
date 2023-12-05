var Button28 = document.getElementsByClassName("openButton")[27];

var dataAttributes28 = {
    element: "Nickel",
    image: "28.webp",
    text: "Nickel."
};

function openPopupWindow28() {
  var image = dataAttributes28.image;
  var text = dataAttributes28.text;
  var element = dataAttributes28.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent28 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent28);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button28.addEventListener("click", openPopupWindow28);