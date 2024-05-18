var Button96 = document.getElementsByClassName("openButton")[95];

var dataAttributes96 = {
    element: "Gadolinium",
    image: "64.webp",
    text: "Gadolinium."
};

function openPopupWindow96() {
  var image = dataAttributes96.image;
  var text = dataAttributes96.text;
  var element = dataAttributes96.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent96 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent96);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button96.addEventListener("click", openPopupWindow96);