var Button80 = document.getElementsByClassName("openButton")[79];

var dataAttributes80 = {
    element: "Darmstadtium",
    image: "110.webp",
    text: "Darmstadtium."
};

function openPopupWindow80() {
  var image = dataAttributes80.image;
  var text = dataAttributes80.text;
  var element = dataAttributes80.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent80 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent80);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button80.addEventListener("click", openPopupWindow80);