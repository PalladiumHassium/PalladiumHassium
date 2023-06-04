var Button7 = document.getElementsByClassName("openButton")[6];

var dataAttributes7 = {
    element: "Nitrogen",
    image: "7.jpg",
    text: "Nitrogen is the second gaseous diatomic element by atomic number."
};

function openPopupWindow7() {
  var image = dataAttributes7.image;
  var text = dataAttributes7.text;
  var element = dataAttributes7.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent7 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent7);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button7.addEventListener("click", openPopupWindow7);