var Button103 = document.getElementsByClassName("openButton")[102];

var dataAttributes103 = {
    element: "Lutetium",
    image: "71.webp",
    text: "Lutetium."
};

function openPopupWindow103() {
  var image = dataAttributes103.image;
  var text = dataAttributes103.text;
  var element = dataAttributes103.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent103 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent103);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button103.addEventListener("click", openPopupWindow103);