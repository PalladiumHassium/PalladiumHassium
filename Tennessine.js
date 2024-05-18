var Button87 = document.getElementsByClassName("openButton")[86];

var dataAttributes87 = {
    element: "Tennessine",
    image: "117.webp",
    text: "Tennessine."
};

function openPopupWindow87() {
  var image = dataAttributes87.image;
  var text = dataAttributes87.text;
  var element = dataAttributes87.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent87 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent87);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button87.addEventListener("click", openPopupWindow87);