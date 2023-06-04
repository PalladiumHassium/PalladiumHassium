var Button5 = document.getElementsByClassName("openButton")[4];

var dataAttributes5 = {
    element: "Boron",
    image: "5.jpg",
    text: "Boron."
};

function openPopupWindow5() {
  var image = dataAttributes5.image;
  var text = dataAttributes5.text;
  var element = dataAttributes5.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  
  var popupContent5 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent5);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button5.addEventListener("click", openPopupWindow5);