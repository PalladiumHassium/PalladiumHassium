var Button113 = document.getElementsByClassName("openButton")[112];

var dataAttributes113 = {
    element: "Californium",
    image: "98.webp",
    text: "Californium."
};

function openPopupWindow113() {
  var image = dataAttributes113.image;
  var text = dataAttributes113.text;
  var element = dataAttributes113.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent113 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent113);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button113.addEventListener("click", openPopupWindow113);