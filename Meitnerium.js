var Button79 = document.getElementsByClassName("openButton")[78];

var dataAttributes79 = {
    element: "Meitnerium",
    image: "109.webp",
    text: "Meitnerium."
};

function openPopupWindow79() {
  var image = dataAttributes79.image;
  var text = dataAttributes79.text;
  var element = dataAttributes79.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent79 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent79);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button79.addEventListener("click", openPopupWindow79);