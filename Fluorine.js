var Button9 = document.getElementsByClassName("openButton")[8];

var dataAttributes9 = {
    element: "Fluorine",
    image: "9.png",
    text: "Fluorine."
};

function openPopupWindow9() {
  var image = dataAttributes9.image;
  var text = dataAttributes9.text;
  var element = dataAttributes9.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent9 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent9);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button9.addEventListener("click", openPopupWindow9);