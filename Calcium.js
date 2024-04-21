var Button20 = document.getElementsByClassName("openButton")[19];

var dataAttributes20 = {
    element: "Calcium",
    image: "20.jpg",
    text: "Calcium."
};

function openPopupWindow20() {
  var image = dataAttributes20.image;
  var text = dataAttributes20.text;
  var element = dataAttributes20.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent20 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent20);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button20.addEventListener("click", openPopupWindow20);