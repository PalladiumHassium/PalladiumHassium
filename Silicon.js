var Button14 = document.getElementsByClassName("openButton")[13];

var dataAttributes14 = {
    element: "Silicon",
    image: "14.jpg",
    text: "Silicon (<b>symbol: Si</b>) is a hard yet breakable crystalline solid – it is considered to be a very brittle element. It has a bluish-gray metallic structure, and <b>is a natural semiconductor</b> in its purest form. Silicon could also highly increase the intensity of the semiconductor if a small amount of impurity is added. Silicon's chemical behavoir is very similar to metals, and is extremely reactive at higher temperature, but inactive – which happens mostly – at normal (room) temperature. Silicon also has the ability to form alloys if it is at <b>molten state</b> – meaning <b>liquification due to heat, or melted</b>."
};

function openPopupWindow14() {
  var image = dataAttributes14.image;
  var text = dataAttributes14.text;
  var element = dataAttributes14.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent14 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>In 1789, a proposal made by the French chemist Antoine Lavoisier suggested that a new element could be found in quartz (a mineral), in which he was absolutely correct – because silicon takes up 28% of the weight of the Earth's crust. In 1808, Humphry Davy in England had possibly performed an initial isolation of partial pure silicon, and he may not have realized it.</p>"
                   + "<p>3 years later, Joseph L. Gay-Lussac and Louis Jacques Thénard reacted silicon tetrafluoride (SiF<sub>4</sub>) with potassium which produced a reddish-brown solid precipitate, and the precipitate was possibly <b>amorphorus silicon</b> – this event also indiated that these two scientists may have also made impure silicon; however, they did not attempt to purify this new substance.</p>"
                   + "<p>In 1824, Swedish chemist Jacob Berzelius reacted potassium fluorosilicate (K<sub>2</sub>SiF<sub>6</sub>) with potassium which produced a sample of amorphous silicon (a brown solid). He then purified the product by repeatedly washing the product, and he named this new element <b><i>silicium</i></b>, after the <b><i>silicis – flint</i></b>.</p>"
                   + "<p>Note: since the concept of of semiconductor was not known at that point of time, Berzelius believed that silicon was a metal, while Humphry Davy believed that it was a non-metal; the issue with this element is that new element's conductivity of electricity was better than non-metals, but not as good as metals.</p>"
                   + "<p>In 1831, the name <b><i>silicon</i></b> was given by Scottish chemist Thomas Thomson. The reason that he changed the ending of this name – from -ium to -on – is because this element's properties are more similar to non-metals, such as boron and carbon, than metals, such as magnesium and calcium – hence the name.</p>"
                   + "<p>In 1854, the crystalline was the first time produced by Henri Deville. This was done through the electrolysis of impure melt of sodium aluminum chloride which produces aluminum silicide; silicon crystals were left through removing aluminum and water.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Silicon is an excellent example of the <b><i>semiconductors</i></b>, hence it is used for making transistor and in computer chips and solar cells. Silicon is also a major part of ceramics and bricks, and widely used in production of fire bricks, molding compounds and mold-releasing agents.</p>"
                   + "<p>Silicon is also used as a component of ferrosilicon – which is an alloy used in steel industry. Some waterproofing systems also use silicones as a component of them.</p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent14);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button14.addEventListener("click", openPopupWindow14);