var Button112 = document.getElementsByClassName("openButton")[111];

var dataAttributes112 = {
    element: "Berkelium",
    image: "97.webp",
    text: "Berkelium."
};

function openPopupWindow112() {
  var image = dataAttributes112.image;
  var text = dataAttributes112.text;
  var element = dataAttributes112.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent112 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent112);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button112.addEventListener("click", openPopupWindow112);