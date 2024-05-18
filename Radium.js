var Button73 = document.getElementsByClassName("openButton")[72];

var dataAttributes73 = {
    element: "Radium",
    image: "88.webp",
    text: "Radium."
};

function openPopupWindow73() {
  var image = dataAttributes73.image;
  var text = dataAttributes73.text;
  var element = dataAttributes73.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent73 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent73);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button73.addEventListener("click", openPopupWindow73);