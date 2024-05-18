var Button32 = document.getElementsByClassName("openButton")[31];

var dataAttributes32 = {
    element: "Germanium",
    image: "32.webp",
    text: "Germanium."
};

function openPopupWindow32() {
  var image = dataAttributes32.image;
  var text = dataAttributes32.text;
  var element = dataAttributes32.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent32 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent32);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button32.addEventListener("click", openPopupWindow32);