var Button6 = document.getElementsByClassName("openButton")[5];

var dataAttributes6 = {
    element: "Carbon",
    image: "6.jpg",
    text: "Carbon (<b>symbol: C</b>) is present in all organic compounds. It is <b>highly unreactive</b> under normal conditions, but it has an ability to bond with multiple elements <b>covalently</b> (bonding by <b>sharing electrons</b>) – including hydrogen, another element being present in most of the organic compounds. Carbon is also <b>insoluble in water</b>, usually used in <b>organic solvent</b>, and is an inert substance. Furthermore, it has a number of allotropes – meaning <b>different structural form</b> – examples include graphite and diamond."
};

function openPopupWindow() {
  var image = dataAttributes6.image;
  var text = dataAttributes6.text;
  var element = dataAttributes6.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent6 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p><b>Humans are carbon-based creatures – there is NOTHING more important than carbon to us because most components of our cells are comprised by this element!</b></p>"
                   + "<p>Carbon, like boron, has a low toxicity. However, it may result in <b>temporary</b> or even <b>permanent damage to lungs and heart if repeatedly contacting or inhaling carbon black!</b></p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>In 1772, French scientist Antoine Lavoisier and other chemists observed the diamond burning then disappearing by focusing the sun's rays on it with a huge magnifying glass. When the diamond burned out completely, Lavoisier noticed that the overall mass remained the same as before the experiment – he then drew the conclusion that diamond and charcoal were made up of the same element, carbon, because the diamond had formed carbon dioxide with oxygen atoms.</p>"
                   + "<p>7 years later, Swedish scientist Carl Scheele demonstrated that graphite turned into carbon dioxide after it burned, drawing the conclusion that the <b>graphite must be another form (allotrope) of carbon</b>.</p>"
                   + "<p>In 1796, English chemist Smithson Tennatt found out that <b>diamonds were nothing more than just pure carbon rather than a compound containing carbon</b> because it only formed carbon dioxide after it was burned. About one and a half a century later, in 1955, it was proved that graphite could be turned into diamond at high temperature and at high pressure by American scientist Francis Bundy and his coworkers at General Electric.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications and Bodily Physiology</u></h2>"
                   + "<p>One obvious application of carbon used in the society today is carbon dioxide (CO<sub>2</sub>) – an unwanted 'product' that we do not like in terms of global warming <b>because it is what we refer to as the 'greenhouse gas'</b>. However, carbon dioxide is sometimes useful – it is used in carbonization drinks and fire extinguisher! <br> Other two compounds containing carbon – carbon disulfide (CS<sub>2</sub>) and carbon tetrachloride (CCl<sub>4</sub>) – are notable industrial solvents.</p>"
                   + "<p>Carbon has a crucial role in terms of regulating the physiology of the body. Furthermore, it forms molecules such as nucleic acids, proteins, carbonhydrates and fats within our body. Carbon can also be used to produce energy and useful biomolecules for us to thrive and grow through restructuring in the body.</p>"
                   + "<p>Glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, is the main fuel of the cell – the glucose being consumed would be stored into muscles and the liver when the body does not need to use the compound as the energy source. The stored form of glucose is called glycogen – comprised of many connected glucose molecules. Glycogen would be broken down into glucose and then released into the bloodstream to be used for cell fuels when the body needs energy in an instance where there was no external glucose obtained from food.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Carbon – Characteristics, Properties and Application.” <i>VEDANTU, Vedantu</i>, 17 June 2024, <a href = www.vedantu.com/chemistry/carbon>www.vedantu.com/chemistry/carbon.</a></p>"
                   + "<p>“Water Treatment Solutions.” <i>Lenntech Water Treatment & Purification</i>, <a href = www.lenntech.com/periodic/elements/c.htm>www.lenntech.com/periodic/elements/c.htm.</a></p>"
                   + "<p>“What Is Carbon Black?: Carbon Black 101.” <i>Birla Carbon</i>, 3 Aug. 2023, <a href = www.birlacarbon.com/whats-trending/carbon-black/>www.birlacarbon.com/whats-trending/carbon-black/.</a></p>"
                   + "<p>“Carbon Element Facts.” <i>Chemicool</i>, <a href = www.chemicool.com/elements/carbon.html>www.chemicool.com/elements/carbon.html.<a></p>"
                   + "<p>“How Dry Ice Is Made.” <i>CryoCarb</i>, 15 Feb. 2024, <a href = cryocarb.com/how-dry-ice-is-made/>cryocarb.com/how-dry-ice-is-made/.</a></p>"
                   + "<p>“The Importance of Carbon to Life.” <i>FutureLearn</i>, 25 Oct. 2022, <a href = www.futurelearn.com/info/courses/the-biology-of-bugs-brains-and-beasts/0/steps/68848>www.futurelearn.com/info/courses/the-biology-of-bugs-brains-and-beasts/0/steps/68848.</a></p>"
                   + "<p>“Definition: Glycogen (for Teens) | Nemours Kidshealth.” <i>KidsHealth</i>, The Nemours Foundation, <a href = kidshealth.org/en/teens/glycogen.html>kidshealth.org/en/teens/glycogen.html.</a></p>"
                   + "<p>“Carbon Definition, Function & Importance.” <i>Study.Com</i>, Study.com, 19 Jan. 2024, <a href = study.com/learn/lesson/carbon-overview-importance.html>study.com/learn/lesson/carbon-overview-importance.html.</a></p>" 
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent6);
  }
}

Button6.addEventListener("click", openPopupWindow);