var Button2 = document.getElementsByClassName("openButton")[1];

var dataAttributes2 = {
    element: "Helium",
    image: "2.jpg",
    text: "Helium is the first noble gas element by atomic number."
};

function openPopupWindow2() {
  var image = dataAttributes2.image;
  var text = dataAttributes2.text;
  var element = dataAttributes2.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent2 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent2);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button2.addEventListener("click", openPopupWindow2);