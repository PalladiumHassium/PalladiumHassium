var Button105 = document.getElementsByClassName("openButton")[104];

var dataAttributes105 = {
    element: "Thorium",
    image: "90.webp",
    text: "Thorium."
};

function openPopupWindow105() {
  var image = dataAttributes105.image;
  var text = dataAttributes105.text;
  var element = dataAttributes105.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent105 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent105);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button105.addEventListener("click", openPopupWindow105);