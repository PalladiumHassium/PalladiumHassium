var Button35 = document.getElementsByClassName("openButton")[34];

var dataAttributes35 = {
    element: "Bromine",
    image: "35.webp",
    text: "Bromine."
};

function openPopupWindow35() {
  var image = dataAttributes35.image;
  var text = dataAttributes35.text;
  var element = dataAttributes35.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent35 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent35);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button35.addEventListener("click", openPopupWindow35);