var Button102 = document.getElementsByClassName("openButton")[101];

var dataAttributes102 = {
    element: "Ytterbium",
    image: "70.webp",
    text: "Ytterbium."
};

function openPopupWindow102() {
  var image = dataAttributes102.image;
  var text = dataAttributes102.text;
  var element = dataAttributes102.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent102 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent102);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button102.addEventListener("click", openPopupWindow102);