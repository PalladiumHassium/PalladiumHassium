var Button107 = document.getElementsByClassName("openButton")[106];

var dataAttributes107 = {
    element: "Uranium",
    image: "92.webp",
    text: "Uranium."
};

function openPopupWindow107() {
  var image = dataAttributes107.image;
  var text = dataAttributes107.text;
  var element = dataAttributes107.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent107 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent107);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button107.addEventListener("click", openPopupWindow107);