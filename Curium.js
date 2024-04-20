var Button111 = document.getElementsByClassName("openButton")[110];

var dataAttributes111 = {
    element: "Curium",
    image: "96.webp",
    text: "Curium."
};

function openPopupWindow111() {
  var image = dataAttributes111.image;
  var text = dataAttributes111.text;
  var element = dataAttributes111.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent111 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent111);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button111.addEventListener("click", openPopupWindow111);