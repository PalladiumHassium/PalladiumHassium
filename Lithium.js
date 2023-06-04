var Button3 = document.getElementsByClassName("openButton")[2];

var dataAttributes3 = {
  element: "Lithium",
  image: "3.jpg",
  text: "Lithium is the first metal element."
};

function openPopupWindow3() {
  var image = dataAttributes3.image;
  var text = dataAttributes3.text;
  var element = dataAttributes3.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent3 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent3);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button3.addEventListener("click", openPopupWindow3);