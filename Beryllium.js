var Button4 = document.getElementsByClassName("openButton")[3];

var dataAttributes4 = {
    element: "Beryllium",
    image: "4.jpg",
    text: "Beryllium (<b>element symbol: Be</b>) is a gray-colored metal; it is stronger than steel and lighter than aluminum. Beryllium has a high melting point, a great strength-to-weight and a terrific conductivity, reflectivity and transparency. However, <b>beryllium is hazardous to humans when being exposed to it through inhaling or contacting in air or on surfaces because of the immune response which turns an individual into being sensitized to the element – it would then develop a debilitating (or weakening) disease of the lungs, called chronic beryllium disease</b>."
};

function openPopupWindow4() {
  var image = dataAttributes4.image;
  var text = dataAttributes4.text;
  var element = dataAttributes4.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent4 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>Beryllium was initially discovered in 1798 by a French chemist Louis-Nicholas Veuquelin, who identified beryllium oxide in a beryl. It was initially named <b>glucinium</b> because it tasted like glucose – or <b>sugar</b>. 30 years later, the elemental form of beryllium was isolated by two scientists who worked independently: Antoine Bussy (French chemist) and Friedrich Wöhler (German chemist). The latter did not like the name <b>glucinium</b>, so he renamed it as <b>beryllium</b> which would mean <b>from the mineral beryl</b>.</p>"
                   + "<p>In 1920s, copper beryllium alloys were initially invented, and it was used as the components of telephone switchboard – conductive spring relays – produced in Germany. Later on during WWII, due to beryllium's terrific quality, it was a huge support during the event in marine diesel engines due to its corrosion resistance material, parachute buckles because of its strength and lightweight, as well as geing used in high precision aircraft for navigation purposes and in targeting instruments due to beryllium's non-magnetic property, stiffness, lightweight and dimensional stability over an extensive temperature.</p>"
                   + "<p>In postwar markets during the 50s – which was early in the Cold War – the demands for both beryllium and beryllium-containing materials were growing exponentially for the purposes of telecommunications, appliances, automotive components and plastic mold tolling. At the same time, the U.S. government demanded for pure beryllium to build up the strategic deterrent weapons while enhancing the space flight in the same era. All these demonstrated how crucial the role beryllium was playing.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications & Things to Be Aware</u></h2>"
                   + "<p>Beryllium is a very useful material to us as humans. Some more applications of beryllium-containing products – beryllium oxide in this case – include electronics and microwave oven components, military vehicle armours, laser structural components, electrical insulators, nuclear fuels and moderators.</p>"
                   + "<p>Despite beryllium's usefulness, <b>it is relatively toxic to the environment</b>. According to the government of Australia, the acute toxicity of beryllium may affect the death of animals such as birds or fish, as well as the low growth rates or death of the plants – making the water soft. Its toxicity is even more in soft water than in hard water – hence that <b>beryllium is highly harmful to aquatic lives</b> since soft water often lacks minerals. Furthermore, shortened lifespan, reproductive issues, reduced fertility and changes in appearance and behavior may all be the results of chronic toxic effects of beryllium. It is also notable to know that the fish actually <b>do not</b> hoard beryllium in their bodies from the surrounding water to any significant extent.</p>"
                   + "<p>In a short summary, depite that beryllium is a highly-favored material due to its excellence in both chemical and physical properties, it is an <b>eco-unfriendly material and harmful to human beings</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Beryllium - Overview.” <i>Occupational Safety and Health Administration</i>, <a href = www.osha.gov/beryllium>www.osha.gov/beryllium.</a></p>"
                   + "<p>“Elements for Kids.” <i>Ducksters</i>, <a href = www.ducksters.com/science/chemistry/beryllium.php>www.ducksters.com/science/chemistry/beryllium.php.</a></p>"
                   + "<p>“Historical Perspective.” <i>Historical Perspective of Beryllium Development</i>, <a href = beryllium.com/about-beryllium/historical-perspective>beryllium.com/about-beryllium/historical-perspective.</a></p>"
                   + "<p>“Beryllium and Compounds.” <i>DCCEEW</i>, <a href = www.dcceew.gov.au/environment/protection/npi/substances/fact-sheets/beryllium-and-compounds>www.dcceew.gov.au/environment/protection/npi/substances/fact-sheets/beryllium-and-compounds.</a></p>"
                   + "<p>“Basic Water Chemistry Part 1: Water Hardness.” <i>Live Aquaria: Quality Aquatic Life Direct To Your Door</i>, <a href = www.liveaquaria.com/article/60/?aid=60>www.liveaquaria.com/article/60/?aid=60.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent4);
  }
}

Button4.addEventListener("click", openPopupWindow4);