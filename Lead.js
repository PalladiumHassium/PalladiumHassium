var Button67 = document.getElementsByClassName("openButton")[66];

var dataAttributes67 = {
    element: "Lead",
    image: "82.webp",
    text: "Lead."
};

function openPopupWindow67() {
  var image = dataAttributes67.image;
  var text = dataAttributes67.text;
  var element = dataAttributes67.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent67 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent67);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button67.addEventListener("click", openPopupWindow67);