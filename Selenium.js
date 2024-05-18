var Button34 = document.getElementsByClassName("openButton")[33];

var dataAttributes34 = {
    element: "Selenium",
    image: "34.webp",
    text: "Selenium."
};

function openPopupWindow34() {
  var image = dataAttributes34.image;
  var text = dataAttributes34.text;
  var element = dataAttributes34.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent34 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent34);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button34.addEventListener("click", openPopupWindow34);