var Button55 = document.getElementsByClassName("openButton")[54];

var dataAttributes55 = {
    element: "Cesium",
    image: "55.webp",
    text: "Cesium."
};

function openPopupWindow55() {
  var image = dataAttributes55.image;
  var text = dataAttributes55.text;
  var element = dataAttributes55.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent55 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent55);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button55.addEventListener("click", openPopupWindow55);