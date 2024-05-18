var Button57 = document.getElementsByClassName("openButton")[56];

var dataAttributes57 = {
    element: "Hafnium",
    image: "72.webp",
    text: "Hafnium."
};

function openPopupWindow57() {
  var image = dataAttributes57.image;
  var text = dataAttributes57.text;
  var element = dataAttributes57.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent57 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent57);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button57.addEventListener("click", openPopupWindow57);