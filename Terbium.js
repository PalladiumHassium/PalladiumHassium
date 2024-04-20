var Button97 = document.getElementsByClassName("openButton")[96];

var dataAttributes97 = {
    element: "Terbium",
    image: "65.webp",
    text: "Terbium."
};

function openPopupWindow97() {
  var image = dataAttributes97.image;
  var text = dataAttributes97.text;
  var element = dataAttributes97.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent97 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent97);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button97.addEventListener("click", openPopupWindow97);