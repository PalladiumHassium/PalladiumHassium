var Button76 = document.getElementsByClassName("openButton")[75];

var dataAttributes76 = {
    element: "Seaborgium",
    image: "106.webp",
    text: "Seaborgium."
};

function openPopupWindow76() {
  var image = dataAttributes76.image;
  var text = dataAttributes76.text;
  var element = dataAttributes76.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent76 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent76);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button76.addEventListener("click", openPopupWindow76);