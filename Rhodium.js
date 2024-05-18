var Button45 = document.getElementsByClassName("openButton")[44];

var dataAttributes45 = {
    element: "Rhodium",
    image: "45.webp",
    text: "Rhodium."
};

function openPopupWindow45() {
  var image = dataAttributes45.image;
  var text = dataAttributes45.text;
  var element = dataAttributes45.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent45 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent45);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button45.addEventListener("click", openPopupWindow45);