var Button117 = document.getElementsByClassName("openButton")[116];

var dataAttributes117 = {
    element: "Nobelium",
    image: "102.webp",
    text: "Nobelium."
};

function openPopupWindow117() {
  var image = dataAttributes117.image;
  var text = dataAttributes117.text;
  var element = dataAttributes117.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent117 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent117);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button117.addEventListener("click", openPopupWindow117);