var Button36 = document.getElementsByClassName("openButton")[35];

var dataAttributes36 = {
    element: "Krypton",
    image: "36.webp",
    text: "Krypton."
};

function openPopupWindow36() {
  var image = dataAttributes36.image;
  var text = dataAttributes36.text;
  var element = dataAttributes36.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent36 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent36);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button36.addEventListener("click", openPopupWindow36);