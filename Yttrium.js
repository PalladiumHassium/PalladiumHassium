var Button39 = document.getElementsByClassName("openButton")[38];

var dataAttributes39 = {
    element: "Yttrium",
    image: "39.webp",
    text: "Yttrium."
};

function openPopupWindow39() {
  var image = dataAttributes39.image;
  var text = dataAttributes39.text;
  var element = dataAttributes39.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent39 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent39);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button39.addEventListener("click", openPopupWindow39);