var Button43 = document.getElementsByClassName("openButton")[42];

var dataAttributes43 = {
    element: "Technetium",
    image: "43.webp",
    text: "Technetium."
};

function openPopupWindow43() {
  var image = dataAttributes43.image;
  var text = dataAttributes43.text;
  var element = dataAttributes43.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent43 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent43);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button43.addEventListener("click", openPopupWindow43);