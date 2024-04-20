var Button66 = document.getElementsByClassName("openButton")[65];

var dataAttributes66 = {
    element: "Thallium",
    image: "81.webp",
    text: "Thallium."
};

function openPopupWindow66() {
  var image = dataAttributes66.image;
  var text = dataAttributes66.text;
  var element = dataAttributes66.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent66 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent66);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button66.addEventListener("click", openPopupWindow66);