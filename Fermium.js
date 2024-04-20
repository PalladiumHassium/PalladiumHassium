var Button115 = document.getElementsByClassName("openButton")[114];

var dataAttributes115 = {
    element: "Fermium",
    image: "100.webp",
    text: "Fermium."
};

function openPopupWindow115() {
  var image = dataAttributes115.image;
  var text = dataAttributes115.text;
  var element = dataAttributes115.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent115 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent115);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button115.addEventListener("click", openPopupWindow115);