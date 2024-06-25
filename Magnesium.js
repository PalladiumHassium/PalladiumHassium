var Button12 = document.getElementsByClassName("openButton")[11];

var dataAttributes12 = {
    element: "Magnesium",
    image: "12.jpg",
    video_a: "MgFlameRxn.mp4",
    text: "Magnesium (<b>symbol: Mg</b>) is a <b>silvery white color, flammablemetal</b>; it has a <b>has an excellent stiffness-to-weight and strength-to-weight ratios yet being the lightest structural metal</b>. It is also the eighth (8<sup>th</sup>) most abundant element found on earth, and its conductivity of electricity and heat are similar to aluminum. Some of the <b>compounds involving magnesium</b> are flame-resistant properties – which can, for example, be implemented to what firefighters wear when on task, or any other things to do where the interacting with flame is one of the concerns."
};

function openPopupWindow12() {
  var image = dataAttributes12.image;
  var text = dataAttributes12.text;
  var element = dataAttributes12.element;
  var videoMg = dataAttributes12.video_a;
  var videoSize = "width: 500px; height: auto;";
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1075,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent12 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>Magnesium, however, <b>has a poor corrosion resistance, low melting point, and can be easily broken – especially under low temperatures.</b> It is also <b>highly flammable, specifically in pure form such as powder and shaved strips.</b></p>"
                   + "<p></p>"
                   + "<h2><u>Reaction Time!</u></h2>"
                   + "<p>Magnesium reacts vigorously with flames. Here is a video demonstrating how aggressive when the two substances react:</p>"
                   + "<video src='" + videoMg + "' style='" + videoSize + "'controls></video>"
                   + "<p>Video Reference: <a href = https://www.youtube.com/watch?v=epDGHnwaVJY>Burning Of Magnesium Ribbon Experiment | Chemistry Demo | Grade 7-12 by Make Me Scientific</a></p>"
                   + "<p></p>"
                   + "<h2><u>Historical Events and Discovery</u></h2>"
                   + "<p>In 1755, Scottish chemist Joseph Black was the first person to recognize magnesium as an element. He distinguished the two compounds: magnesia (magnesium oxide, MgO) and lime (calcium oxide, CaO), of which both are heated by similar types of carbonate rocks – magnesites and limestones respectively.</p>"
                   + "<p>About half a century later (1808), Sir Humphry Davy, an English chemist, found this metallic element by isolating this element, through an electrolysis of the mixture containing magneium oxide (MgO) and mercury (II) oxide (HgO). After 23 years (in 1831), French scientist Antoine Alexandre Brutus Bussy reacted magnesium chloride with potassium in which he made a great amount of the Mg metal.</p>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Some high-quality suitcases use magnesium which would reduce the overall weight of the luggage – because Mg is a lightweight yet durable material; the applications of these properties are also used in camera and sport productions.</p>"
                   + "<p>Car seats in automobiles are also made with magnesium metal due to its favorable stiffness and lightweight so that the fuel can make the car run in a more efficient way.</p>"
                   + "<p>Also, due to the brightness that <b>magnesium metal (NOT MAGNESIUM COMPOUNDS!)</b> creates when in contact with the fire flame, <b>it is commonly used in fireworks – enhancing visual displays of them.</b></p>"
                   + "<p>Some more applications of magnesium alloys include aircraft, spacecraft, machinery, portable tools, laptop cases, power tool kits and household appliances.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Is It True That Magnesium Is a Good Conductor of Heat and Hence, It Is Difficult to Hold It with Bare Fingers?” <i>Infinity Learn by Sri Chaitanya</i>, <a href = infinitylearn.com/surge/question/chemistry/is-it-true-that-magnesium-is-a-good-conductor-of-heat-and-he/>infinitylearn.com/surge/question/chemistry/is-it-true-that-magnesium-is-a-good-conductor-of-heat-and-he/.</a></p>"
                   + "<p>“Electrical Conductors.” <i>Lunarpedia</i>, <a href = lunarpedia.org/w/Electrical_Conductors>lunarpedia.org/w/Electrical_Conductors.</a></p>"
                   + "<p>“Magnesium: Definition, Composition, Properties, and Applications.” <i>Xometrys RSS</i>, Xometry, 16 Sept. 2023, <a href = www.xometry.com/resources/materials/what-is-magnesium/>www.xometry.com/resources/materials/what-is-magnesium/.</a></p>"
                   + "<p>“Magnesium.” <i>National Center for Biotechnology Information. PubChem Compound Database</i>, U.S. National Library of Medicine, <a href = pubchem.ncbi.nlm.nih.gov/element/Magnesium>pubchem.ncbi.nlm.nih.gov/element/Magnesium.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent12);
  }
}

Button12.addEventListener("click", openPopupWindow12);