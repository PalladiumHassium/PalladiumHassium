var Button2 = document.getElementsByClassName("openButton")[1];

var dataAttributes2 = {
    element: "Helium",
    image: "2.jpg",
    text: "Helium is the first noble gas element by atomic number. Here's the equation for this equation:",
};

function openPopupWindow2() {
  var image = dataAttributes2.image;
  var text = dataAttributes2.text;
  var element = dataAttributes2.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize1 = "width: 200; height: auto;";
  var imageSize2 = "width: 400; height: auto;";

  var popupContent2 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize1 + "'>"
                   + "<p>" + text + "</p>"
                   + "<img src='HydrogenFusionEquation.png' style='" + imageSize2 + "'>" //credit to Willard's note
                   + "<p>This equation represents how hydrogen-2 and hydrogen-3 fuses together. </p>"
                   + "</div>";
                   

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent2);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button2.addEventListener("click", openPopupWindow2);