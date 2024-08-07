var Button61 = document.getElementsByClassName("openButton")[60];

var dataAttributes61 = {
    element: "Osmium",
    image: "76.webp",
    text: "Osmium."
};

function openPopupWindow61() {
  var image = dataAttributes61.image;
  var text = dataAttributes61.text;
  var element = dataAttributes61.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent61 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent61);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button61.addEventListener("click", openPopupWindow61);