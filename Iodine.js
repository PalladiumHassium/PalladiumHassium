var Button53 = document.getElementsByClassName("openButton")[52];

var dataAttributes53 = {
    element: "Iodine",
    image: "53.webp",
    text: "Iodine."
};

function openPopupWindow53() {
  var image = dataAttributes53.image;
  var text = dataAttributes53.text;
  var element = dataAttributes53.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent53 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent53);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button53.addEventListener("click", openPopupWindow53);