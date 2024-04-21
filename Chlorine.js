var Button17 = document.getElementsByClassName("openButton")[16];

var dataAttributes17 = {
    element: "Chlorine",
    image: "17.jpg",
    text: "Chlorine."
};

function openPopupWindow17() {
  var image = dataAttributes17.image;
  var text = dataAttributes17.text;
  var element = dataAttributes17.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent17 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent17);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button17.addEventListener("click", openPopupWindow17);