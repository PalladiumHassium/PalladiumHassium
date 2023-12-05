var Button52 = document.getElementsByClassName("openButton")[51];

var dataAttributes52 = {
    element: "Tellurium",
    image: "52.webp",
    text: "Tellurium."
};

function openPopupWindow52() {
  var image = dataAttributes52.image;
  var text = dataAttributes52.text;
  var element = dataAttributes52.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent52 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent52);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button52.addEventListener("click", openPopupWindow52);