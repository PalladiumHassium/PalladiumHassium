var Button99 = document.getElementsByClassName("openButton")[98];

var dataAttributes99 = {
    element: "Holmium",
    image: "67.webp",
    text: "Holmium."
};

function openPopupWindow99() {
  var image = dataAttributes99.image;
  var text = dataAttributes99.text;
  var element = dataAttributes99.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent99 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent99);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button99.addEventListener("click", openPopupWindow99);