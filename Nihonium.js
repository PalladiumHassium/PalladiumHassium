var Button83 = document.getElementsByClassName("openButton")[82];

var dataAttributes83 = {
    element: "Nihonium",
    image: "113.webp",
    text: "Nihonium."
};

function openPopupWindow83() {
  var image = dataAttributes83.image;
  var text = dataAttributes83.text;
  var element = dataAttributes83.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent83 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent83);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button83.addEventListener("click", openPopupWindow83);