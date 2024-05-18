var Button33 = document.getElementsByClassName("openButton")[32];

var dataAttributes33 = {
    element: "Arsenic",
    image: "33.webp",
    text: "Arsenic."
};

function openPopupWindow33() {
  var image = dataAttributes33.image;
  var text = dataAttributes33.text;
  var element = dataAttributes33.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent33 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent33);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button33.addEventListener("click", openPopupWindow33);