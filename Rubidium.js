var Button37 = document.getElementsByClassName("openButton")[36];

var dataAttributes37 = {
    element: "Rubidium",
    image: "37.webp",
    text: "Rubidium."
};

function openPopupWindow37() {
  var image = dataAttributes37.image;
  var text = dataAttributes37.text;
  var element = dataAttributes37.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent37 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent37);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button37.addEventListener("click", openPopupWindow37);