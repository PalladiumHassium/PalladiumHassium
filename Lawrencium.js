var Button118 = document.getElementsByClassName("openButton")[117];

var dataAttributes118 = {
    element: "Lawrencium",
    image: "103.webp",
    text: "Lawrencium."
};

function openPopupWindow118() {
  var image = dataAttributes118.image;
  var text = dataAttributes118.text;
  var element = dataAttributes118.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent118 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent118);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button118.addEventListener("click", openPopupWindow118);