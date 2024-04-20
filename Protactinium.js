var Button106 = document.getElementsByClassName("openButton")[105];

var dataAttributes106 = {
    element: "Protactinium",
    image: "91.webp",
    text: "Protactinium."
};

function openPopupWindow106() {
  var image = dataAttributes106.image;
  var text = dataAttributes106.text;
  var element = dataAttributes106.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent106 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent106);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button106.addEventListener("click", openPopupWindow106);