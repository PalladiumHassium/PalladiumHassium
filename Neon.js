var Button10 = document.getElementsByClassName("openButton")[9];

var dataAttributes10 = {
    element: "Neon",
    image: "10.png",
    text: "Neon (<b>symbol: Ne</b>) is a colorless, odorless, and tasteless gas; it <b>does not</b> react with other substances – and so it <b>does not</b> have a significant impact on the environment. Neon is a non-toxic gas; however, <b><u>if it is inhaled at an excessive concentration level, it would cause dizziness, nausea, vomiting, loss of consciousness and even death due to the lack of oxygen.</u></b> The ways leading to death due to suffocation include errors in judgement, confusion or loss of consciousness – which prevents one from self-rescuing. Unconsciousness and death are especially likely to occur instantaneously without any warning if one is situating in a low-xoygen environment."
};

function openPopupWindow10() {
  var image = dataAttributes10.image;
  var text = dataAttributes10.text;
  var element = dataAttributes10.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  
  var popupContent10 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>The only commercial source of neon on earth, though, is the atmospheres – it is merely 18 parts per million, equivalent to 0.018%, by volume within the atmospheres. Neon still remains one of the rarest gaseous elements existing on earth due to its lack of reactivity, as well as how easy it evaporates at normal temperatures; furthermore, it easily escapes from earth because it is lighter than the air.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>In 1898, Sir William Ramsay and Morris W. Travers – who are both British chemists – discovered neon as a component of fractions of liquified crude (simpeler version of) argon which was the easiest to evaporate. They immediately identified it as a new element as it emits a unique glow when simulated electrically.</p>"
                   + "<p>Ramsay initially cooled a sample of air off upon liquification. Then, he warmed the liquid, and he was capturing the gases as they boiled off. Prior to that point of discovery, three (3) elements – nitrogen, oxygen and argon – had already been discovered. The two chemists discovered krypton when they were still isolating the remaining gases after taking out those three elements. They then had a gas releasing a brilliant red light under spectroscopic discharge after the removal of krypton from that remaining gas. The name of the element was named after the word <b>new</b> in Greek.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>The characteristic of reddish-orange colored of this element are commonly used as the signs for advertisement – which became popularized during the 1920s – in some high-voltage testers, as well as gaseous and <b>fluorscent conduction lamps</b> (lamps that hvae the ability to emit visible lights after absorbing the radiations that are normally not visible. Other applications of this element include lightning arrestors, television tubes, meters tubes and gas lasers.</p>"
                   + "<p>Neon is also used with a combination of different gases or singly in the electronic industry for gas-filled electron tubes. Additionally, helium-neon mixtures are used for marine divers to breathe in the sea because nitrogen at high pressure is more soluble than helium in blood.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Neon - Element Information, Properties and Uses: Periodic Table.” <i>Neon - Element Information, Properties and Uses | Periodic Table</i>, <a href = www.rsc.org/periodic-table/element/10/neon>www.rsc.org/periodic-table/element/10/neon.</a></p>" 
                   + "<p>“Neon (Ne) - Chemical properties, Health and Environmental effects.” <i>Lenntech Water Treatment & Purification</i>, <a href = www.lenntech.com/periodic/elements/ne.htm>www.lenntech.com/periodic/elements/ne.htm.</a></p>"
                   + "<p>“Neon.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 6 June 2024, <a href = www.britannica.com/science/neon-chemical-element>www.britannica.com/science/neon-chemical-element.</a></p>"
                   + "<p>Radleys. “Neon - the Element of the Month.” <i>Radleys</i>, 26 Nov. 2021, <a href = www.radleys.com/blog/the-element-of-the-month-neon/>www.radleys.com/blog/the-element-of-the-month-neon/.</a></p>"
                   + "<p>Admin. “Neon (Ne) - Uses of Neon, Chemical Properties, Videos with Faqs of Neon.” <i>BYJUS</i>, BYJU’S, 3 Aug. 2022, <a href = byjus.com/chemistry/neon/>byjus.com/chemistry/neon/.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent10);
  }
}

Button10.addEventListener("click", openPopupWindow10);