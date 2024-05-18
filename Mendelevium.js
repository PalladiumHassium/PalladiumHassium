var Button116 = document.getElementsByClassName("openButton")[115];

var dataAttributes116 = {
    element: "Mendelevium",
    image: "101.webp",
    text: "Mendelevium."
};

function openPopupWindow116() {
  var image = dataAttributes116.image;
  var text = dataAttributes116.text;
  var element = dataAttributes116.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent116 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent116);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button116.addEventListener("click", openPopupWindow116);