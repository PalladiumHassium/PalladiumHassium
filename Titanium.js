var Button22 = document.getElementsByClassName("openButton")[21];

var dataAttributes22 = {
    element: "Titanium",
    image: "22.webp",
    text: "Titanium."
};

function openPopupWindow22() {
  var image = dataAttributes22.image;
  var text = dataAttributes22.text;
  var element = dataAttributes22.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent22 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent22);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button22.addEventListener("click", openPopupWindow22);