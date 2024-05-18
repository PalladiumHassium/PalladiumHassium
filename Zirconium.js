var Button40 = document.getElementsByClassName("openButton")[39];

var dataAttributes40 = {
    element: "Zirconium",
    image: "40.webp",
    text: "Zirconium."
};

function openPopupWindow40() {
  var image = dataAttributes40.image;
  var text = dataAttributes40.text;
  var element = dataAttributes40.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent40 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent40);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button40.addEventListener("click", openPopupWindow40);