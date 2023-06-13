//all the Javascript portion is written by ChatGPT, so I would write down the line of the codes to demonstrate what I understand by commenting them out. Explanation would only be on this document.
var HydrogenButton = document.getElementsByClassName("openButton")[0]; // setting up all the variable "HydrogenButton" for the entire page

var HydrogenDataAttributes = {
  element: "Hydrogen",
  image: "1.jpg",
  text: "Hydrogen is the first element by atomic number. (do some research on Hindenburg Blimp and make connection to hydrogen)"
}; // line 4-8: write out the variable "HydrogenDataAttributes" that contains the definition of 3 elements on the page: element, image, and text based on the html code.

function openHydrogenPopupWindow() {
  var image = HydrogenDataAttributes.image;
  var text = HydrogenDataAttributes.text;
  var element = HydrogenDataAttributes.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  // line 10-16: declare the function "openHydrogenPopupWindow" that controls how the popup window would look like after clicking the hydrogen.png button and defines the size of the image.

  var popupContent1 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";
// line 19-23: declare the variable "popupContent1" that defines all three elements for the pop-up window page, the function also controls how the content would look like on the popup window.

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent1);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}
// line 26-32: declare the variable "popupWindow" that creates the new window based on line 19-23; and if the popup window was blocked due to the popup blocker, the alert function comes out to say "hey, please do allow the popup window for this website."

HydrogenButton.addEventListener("click", openHydrogenPopupWindow);