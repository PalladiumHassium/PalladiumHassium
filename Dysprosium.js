var Button98 = document.getElementsByClassName("openButton")[97];

var dataAttributes98 = {
    element: "Dysprosium",
    image: "66.webp",
    text: "Dysprosium."
};

function openPopupWindow98() {
  var image = dataAttributes98.image;
  var text = dataAttributes98.text;
  var element = dataAttributes98.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent98 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent98);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button98.addEventListener("click", openPopupWindow98);