var Button60 = document.getElementsByClassName("openButton")[59];

var dataAttributes60 = {
    element: "Tungsten",
    image: "74.webp",
    text: "Tungsten."
};

function openPopupWindow60() {
  var image = dataAttributes60.image;
  var text = dataAttributes60.text;
  var element = dataAttributes60.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent60 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent60);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button60.addEventListener("click", openPopupWindow60);