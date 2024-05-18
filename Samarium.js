var Button94 = document.getElementsByClassName("openButton")[93];

var dataAttributes94 = {
    element: "Samarium",
    image: "62.webp",
    text: "Samarium."
};

function openPopupWindow94() {
  var image = dataAttributes94.image;
  var text = dataAttributes94.text;
  var element = dataAttributes94.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent94 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent94);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button94.addEventListener("click", openPopupWindow94);