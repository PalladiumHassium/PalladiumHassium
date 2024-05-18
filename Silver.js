var Button47 = document.getElementsByClassName("openButton")[46];

var dataAttributes47 = {
    element: "Silver",
    image: "47.webp",
    text: "Silver."
};

function openPopupWindow47() {
  var image = dataAttributes47.image;
  var text = dataAttributes47.text;
  var element = dataAttributes47.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent47 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent47);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button47.addEventListener("click", openPopupWindow47);