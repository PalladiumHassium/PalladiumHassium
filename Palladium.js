var Button46 = document.getElementsByClassName("openButton")[45];

var dataAttributes46 = {
    element: "Palladium",
    image: "46.webp",
    text: "Palladium."
};

function openPopupWindow46() {
  var image = dataAttributes46.image;
  var text = dataAttributes46.text;
  var element = dataAttributes46.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent46 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent46);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button46.addEventListener("click", openPopupWindow46);