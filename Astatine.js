var Button70 = document.getElementsByClassName("openButton")[69];

var dataAttributes70 = {
    element: "Astatine",
    image: "85.webp",
    text: "Astatine."
};

function openPopupWindow70() {
  var image = dataAttributes70.image;
  var text = dataAttributes70.text;
  var element = dataAttributes70.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent70 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent70);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button70.addEventListener("click", openPopupWindow70);