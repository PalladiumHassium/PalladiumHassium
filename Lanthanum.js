var Button89 = document.getElementsByClassName("openButton")[88];

var dataAttributes89 = {
    element: "Lanthanum",
    image: "57.webp",
    text: "Lanthanum."
};

function openPopupWindow89() {
  var image = dataAttributes89.image;
  var text = dataAttributes89.text;
  var element = dataAttributes89.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent89 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent89);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button89.addEventListener("click", openPopupWindow89);