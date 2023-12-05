var Button25 = document.getElementsByClassName("openButton")[24];

var dataAttributes25 = {
    element: "Manganese",
    image: "25.webp",
    text: "Manganese."
};

function openPopupWindow25() {
  var image = dataAttributes25.image;
  var text = dataAttributes25.text;
  var element = dataAttributes25.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent25 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent25);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button25.addEventListener("click", openPopupWindow25);