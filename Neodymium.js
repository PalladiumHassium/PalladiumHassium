var Button92 = document.getElementsByClassName("openButton")[91];

var dataAttributes92 = {
    element: "Neodymium",
    image: "60.webp",
    text: "Neodymium."
};

function openPopupWindow92() {
  var image = dataAttributes92.image;
  var text = dataAttributes92.text;
  var element = dataAttributes92.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent92 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent92);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button92.addEventListener("click", openPopupWindow92);