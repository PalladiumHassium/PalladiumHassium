var Button51 = document.getElementsByClassName("openButton")[50];

var dataAttributes51 = {
    element: "Antimony",
    image: "51.webp",
    text: "Antimony."
};

function openPopupWindow51() {
  var image = dataAttributes51.image;
  var text = dataAttributes51.text;
  var element = dataAttributes51.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent51 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent51);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button51.addEventListener("click", openPopupWindow51);