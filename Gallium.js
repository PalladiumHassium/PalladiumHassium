var Button31 = document.getElementsByClassName("openButton")[30];

var dataAttributes31 = {
    element: "Gallium",
    image: "31.webp",
    text: "Gallium."
};

function openPopupWindow31() {
  var image = dataAttributes31.image;
  var text = dataAttributes31.text;
  var element = dataAttributes31.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent31 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent31);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button31.addEventListener("click", openPopupWindow31);