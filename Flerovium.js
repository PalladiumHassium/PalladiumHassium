var Button84 = document.getElementsByClassName("openButton")[83];

var dataAttributes84 = {
    element: "Flerovium",
    image: "113.webp",
    text: "Flerovium."
};

function openPopupWindow84() {
  var image = dataAttributes84.image;
  var text = dataAttributes84.text;
  var element = dataAttributes84.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent84 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent84);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button84.addEventListener("click", openPopupWindow84);