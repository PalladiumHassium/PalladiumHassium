var Button56 = document.getElementsByClassName("openButton")[55];

var dataAttributes56 = {
    element: "Barium",
    image: "56.webp",
    text: "Barium."
};

function openPopupWindow56() {
  var image = dataAttributes56.image;
  var text = dataAttributes56.text;
  var element = dataAttributes56.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent56 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent56);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button56.addEventListener("click", openPopupWindow56);