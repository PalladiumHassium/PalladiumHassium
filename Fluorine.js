var Button9 = document.getElementsByClassName("openButton")[8];

var dataAttributes9 = {
    element: "Fluorine",
    image: "9.jpg",
    video1: "FluorineCharcoalReaction.mp4",
    text: "Fluorine (<b>element symbol: F</b>) is <b>the fourth diatomic element existing in nature by atomic number</b> (there are in total of <b>seven diatomic elements existing in nature</b>). It is a <b>poisonous and chemically the most reactive gas</b> – it also forms compounds with <b>many elements, including noble gases – which are usually unreactive – such as krypton, xenon and radon</b>. Fluorine's powerful reaction can even <b>make glass, water, metals and other substances burn with a bright flame!</b> It looks pale yellow and has an irritating odor at room temperature, and becomes yellow liquid upon cooling. Fluorine also has a relatively low boiling point and melting point, and can be found as a gas – just not as its natural state due to it is a highly reactive element – in nature."
};

function openPopupWindow9() {
  var image = dataAttributes9.image;
  var videoF = dataAttributes9.video1;
  var text = dataAttributes9.text;
  var element = dataAttributes9.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  var videoSize = "width: 500px; height: auto;";

  var popupContent9 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Reaction Time!</u></h2>"
                   + "<p>Due to fluorine's high electronegativity, it has more power to gain electron <b> and is more reactive</b>. Here is a video showing how aggressive fluorine reacts with charcoal:</p>"
                   + "<video src='" + videoF + "' style='" + videoSize + "'controls></video>"
                   + "<p>Video Reference: <a href = https://www.youtube.com/watch?v=TLOFaWdPxB0> Reacting Fluorine with Caesium - First Time on Camera by The Royal Institution</a></p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>In 1529, a fluorine-containing mineral – fluorspar (fluorite) – was initially described by German physician and mineralogist Georgius Agricola. It was first used for etching glasses in 1670."
                   + "<p>Later on, in the year of 1720, the first crude hydrofluoric acid appeared to be prepared by an unknown glassworker. About half a century later (1771), Swedish chemist Carl Wilhelm Scheele burned fluorspar and concentrated sulfuric acid all together in a glass retort and heated the mixture – and the retort was significantly corroded by the mixture!</p>"
                   + "<p>Chemists were eager to find out what such mysterious material for etching glasses; then in 1869, George Gore successfully isolated a small amount of fluorine via electrolytic process! To Gore, though, fluorine gas was such an explosive material to combine with hydrogen – because what happened was that the fluorine gas which formed the electrode combined forcefully with the hydrogen which also formed the other electrode.</p>"
                   + "<p>Finally, in 1886, French chemist Henri Moissan defied the chief mystery in the field of inorganic chemistry – isolating fluorine gas. He did it through electrolysis of potassium fluoride in hydrogen fluoride, and he won a Nobel Prize for this significant achievement in inorganic chemistry in 1906.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Three types of chemical compounds – NaF, SnF<sub>2</sub> and Na<sub>2</sub>PO<sub>3</sub>F – are the fluorine-containing compounds being added to toothpaste to prevent our teeth from tooth decay. Additionally, hydrogen fluoride (HF) is commonly used to etch the glasses such as light bulbs.</p>"
                   + "<p>Historically speaking, however, no one wanted to produce fluorine commercially due to its lack of acceptance prior to WWII; however, the fluorine production had been growing exponentially during the war – thanks to scientists that time, who discovered that uranium hexafluoride (UF<sub>6</sub>) possesses nuclear properties which was able to be used as a source of energy.</p>"
                   + "<p>Other applications of fluorine include calcium fluoride, fluorspar (same as the one mentioned above), used in making lenses to focus on infared light; hydrogen fluoride, HF, commonly used in etching the glasses such as light bulbs.</p>"
                   + "<p>Another application include dichlorodifluoromethane (CF<sub>2</sub>Cl<sub>2</sub>), used in conditioning, refrigeration systems, and in aerosol spray cans. However, this application had been phased out due to the damaging it was causing to the ozone layer of the earth.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Fluorine (F) - Chemical properties, Health and Environmental effects.” <i>Lenntech Water Treatment & Purification</i>, <a href = www.lenntech.com/periodic/elements/f.htm>www.lenntech.com/periodic/elements/f.htm.</a></p>"
                   + "<p>“Fluorine.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 16 May 2024, <a href = www.britannica.com/science/fluorine>www.britannica.com/science/fluorine.</a></p>"
                   + "<p>“Fluorine.” <i>National Center for Biotechnology Information. PubChem Compound Database</i>, U.S. National Library of Medicine, <a href = pubchem.ncbi.nlm.nih.gov/element/Fluorine>pubchem.ncbi.nlm.nih.gov/element/Fluorine.</a></p>"
                   + "<p>“Chemical Properties of Fluorine.” <i>Unacademy</i>, 19 Apr. 2022, <a href = unacademy.com/content/neet-ug/study-material/chemistry/chemical-properties-of-fluorine/>unacademy.com/content/neet-ug/study-material/chemistry/chemical-properties-of-fluorine/.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent9);
  }
}

Button9.addEventListener("click", openPopupWindow9);