var Button12 = document.getElementsByClassName("openButton")[11];

var dataAttributes12 = {
    element: "Magnesium",
    image: "12.webp",
    text: "Magnesium."
};

function openPopupWindow12() {
  var image = dataAttributes12.image;
  var text = dataAttributes12.text;
  var element = dataAttributes12.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent12 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent12);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button12.addEventListener("click", openPopupWindow12);