var Button41 = document.getElementsByClassName("openButton")[40];

var dataAttributes41 = {
    element: "Niobium",
    image: "41.webp",
    text: "Niobium."
};

function openPopupWindow41() {
  var image = dataAttributes41.image;
  var text = dataAttributes41.text;
  var element = dataAttributes41.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent41 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent41);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button41.addEventListener("click", openPopupWindow41);