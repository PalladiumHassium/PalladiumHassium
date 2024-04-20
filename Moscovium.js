var Button85 = document.getElementsByClassName("openButton")[84];

var dataAttributes85 = {
    element: "Moscovium",
    image: "115.webp",
    text: "Moscovium."
};

function openPopupWindow85() {
  var image = dataAttributes85.image;
  var text = dataAttributes85.text;
  var element = dataAttributes85.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent85 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent85);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button85.addEventListener("click", openPopupWindow85);