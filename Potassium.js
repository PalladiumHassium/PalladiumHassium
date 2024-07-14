var Button19 = document.getElementsByClassName("openButton")[18];

var dataAttributes19 = {
    element: "Potassium",
    image: "19.JPG",
    RxnVid1: "YellowRxn1.mp4",
    RxnVid2: "YellowRxn2.mp4",
    text: "Potassium (<b>element symbol: K</b>) is a soft and white metal, a good conductor of both heat and electricity, and has a low melting point. <b>It is an extremely reactive element as it is an alkali metal like lithium and sodium.</b> The vapor of potassium is <b>green</b>, which makes the flame lavender color."
};

function openPopupWindow19() {
  var image = dataAttributes19.image;
  var text = dataAttributes19.text;
  var element = dataAttributes19.element;
  var video1 = dataAttributes19.RxnVid1;
  var video2 = dataAttributes19.RxnVid2;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  var videoSize = "width: 500px; height: auto;";

  var popupContent19 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Natural Abundance</u></h2>"
                   + "<p>Potassium is the <b>seventh</b> most abundant element in the crust of the earth, which constitutes 2.6% of its mass.</p>"
                   + "<p>It is also estimated that KCl, potassium chloride, takes up 1.7% of the content of the Dead Sea. Furthermore, the waste liquors from some certain saltworks could be containing as much as <b>40g/L of potassium chloride</b>. Most of the potassium is present in igneous rocks, shale, and sediment in minerals; examples include muscovite and orthoclase feldspar, which are insoluble in water.</p>"
                   + "<p>Most commercial potassium compounds, which are often called potash, are taken through electrolysis from the soluble potassium-containing compounds. Some examples include carnallite, sylvide (KCl), and langbenitie.</p>"
                   + "<p><b>Potassium is also essential to almost all living things</b> – which we, as human biengs, have approximately 120g in our body, mainly in the brain, the muscles, and the red blood cells.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>In pre-historic times, some potassium-containing salts – including saltpetre (potassium nitrate), alum (potassium aluminum sulfate), and potash (potassium carbonate) have been known. Some historical applications of these types of material include gunpowder, dyeing and soap-making.</p>"
                   + "<p>Interestingly, there were many chemists being defeated to reduce them from the salt form to elemental form due to its high reactivity; Antoine Lavoisier then classed this element as an 'earth'. It was not until that Humphry Davy who had observed the formation of the metallic form of potassium by exposing the molten caustic potash, or potassium hydroxide (KOH), to the electric current in 1807 – in other words, <b>he isolated potassium through the process of electrolysis.</b></p>"
                   + "<p>Humphry Davy also noted that the globules of potassium were moving around quickly on the surface, burning lavender-colored flame when they were dropped into water.</p>"
                   + "<p></p>"
                   + "<h2><u>Reaction Time!</u></h2>"
                   + "<p>One of the most interesting involving potassium is <b>when potassium iodide is mixed with lead (IV) nitrate – two substances that beakers of transparent liquid are mixed together, they create something interesting!</b></p>"
                   + "<p>Here is a balanced chemical formula of this reaction: Pb(NO<sub>3</sub>)<sub>2</sub>(aq) + 2KI (aq) → PbI<sub>2</sub>(s) ( ↓ ) + 2KNO<sub>3</sub>(aq)</p>"
                   + "<p></p>"
                   + "<video src='" + video1 + "' style='" + videoSize + "'controls></video>"
                   + "<p></p>"
                   + "<p>To take this reaction further, the “Golden Snow Globe” can be created if something further is done!</p>"
                   + "<p></p>"
                   + "<video src='" + video2 + "' style='" + videoSize + "'controls></video>"
                   + "<p>Videos Reference: <a href = https://www.youtube.com/watch?v=4temwlZmsTg>Toxic Golden Snow Globe - Chemistry: Lead Nitrate and Potassium Iodide Precipitate Reaction by Beals Science</a></p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Potassium is rarely used in its elemental or metallic form due to its high reactivity. In other words, it is more widely used as compounds with other elements for its real life applications.</p>"
                   + "<p>For instance, it can be used as a reducing agent in organic chemistry; the alloys of potassium and sodium are used as heat exchange medium: by undergoing some special chemical reactions, it can result into generating electricity and in nuclear reactors.</p>"
                   + "<p>Potassium is also used in the form of potassium superoxide, KO<sub>2</sub>, for the air in the submarines, mines and space vehicles for regenerating oxygen for them to breathe.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Potassium.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 21 June 2024, <a href = www.britannica.com/science/potassium>www.britannica.com/science/potassium.</a></p>" 
                   + "<p>Emsley, John. “Potassium.” <i>RSC Education</i>, RSC Education, 6 June 2023, <a href = edu.rsc.org/elements/potassium/2020020.article>edu.rsc.org/elements/potassium/2020020.article.</a></p>" 
                   + "<p>“Potassium - Element Information, Properties and Uses: Periodic Table.” <i>Potassium - Element Information, Properties and Uses | Periodic Table</i>, <a href = www.rsc.org/periodic-table/element/19/potassium>www.rsc.org/periodic-table/element/19/potassium.</a></p>"
                   + "<p>“Potassium.” <i>National Center for Biotechnology Information. PubChem Compound Database</i>, U.S. National Library of Medicine, <a href = pubchem.ncbi.nlm.nih.gov/element/Potassium>pubchem.ncbi.nlm.nih.gov/element/Potassium.</a></p>" 
                   + "<p>“Potassium – Properties and Applications.” AZoM, 1 Aug. 2017, <a href = www.azom.com/article.aspx?ArticleID=6056>www.azom.com/article.aspx?ArticleID=6056.</a></p>" 
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent19);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button19.addEventListener("click", openPopupWindow19);
