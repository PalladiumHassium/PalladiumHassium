var Button75 = document.getElementsByClassName("openButton")[74];

var dataAttributes75 = {
    element: "Dubnium",
    image: "105.webp",
    text: "Dubnium."
};

function openPopupWindow75() {
  var image = dataAttributes75.image;
  var text = dataAttributes75.text;
  var element = dataAttributes75.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent75 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent75);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button75.addEventListener("click", openPopupWindow75);