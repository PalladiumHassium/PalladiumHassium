var Button7 = document.getElementsByClassName("openButton")[6];

var dataAttributes7 = {
    element: "Nitrogen",
    image: "7.jpg",
    text: "Nitrogen (<b>element symbol: N</b>) is the second gaseous diatomic element existing in nature by atomic number – <b>meaning it exists as a molecule, as opposed to just a single atom in nature, as mentioned previously</b>. It is a colorless, odorless, and tasteless gas; it is slightly lighter than air and slightly soluble in water. "
};

function openPopupWindow7() {
  var image = dataAttributes7.image;
  var text = dataAttributes7.text;
  var element = dataAttributes7.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent7 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>Nitrogen is a non-poisonous gas to animals but the gas could lead to the animals' death due to suffocation of nitrogen. However, it is an essential component of the bodies of living organisms because nitrogen atoms are found in proteins and DNA, which come from the bacteria in natural world. Furthermore, this element takes up 78% of volume of atmosphere on earh – far beyond what we think the air is comprised of: oxygen, which only takes up 21%!</p>"
                   + "<p>In our ecosystem, bacteria convert nitrogen gas into ammonia, a usable form of nitrogen for plants, and this is a part of <b>nitrogen fixation</b>. Animals would also gain usable nitrogen compounds when they eat plants! However, <b>nitrogen gas does not remain forever in our body</b>; instead, it turns back to organic nitrogen (the diatomic form, N<sub>2</sub>) by the bacteria. This is simply because <b>we, as animals and humans, do not have the correct enzyme to capture nor to fix the atmospheric nitrogen – hence we do not have a good way to convert nitrogen into usable form for us</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>History and Discovery</u></h2>"
                   + "<p>Prior to the discovery, nitrogen existed in the form of ammonium chloride (NH<sub>4</sub>Cl) – also known as sal ammonia – and it was manufactured by the alchemists in Egypt through heating a mixture of dung, salt and urine.</p>"
                   + "<p>In 1760s, Henry Cavendish and Joseph Priestley removed carbon dioxide and oxygen from the air, showing that they residual gas (gas remaining after intended removals) would not combust nor support for living organisms through noting that the gas extinguished the fire on the lightned candle, as well as from the observation that a mouse breathing nitrogen would soon die. However, neither of these two scientists concluded that it was an undiscovered element.</p>"
                   + "<p>About 10 years later, in 1772, Daniel Rutherford discovered the element nitrogen – he did the same things as what Cavendish and Priestley did, but D. Rutherford was the one who got credit for this discovery <b>because he was the first person to publish the discovery</b>.</p>"
                   + "<p>It was also initially called <b>burnt</b> or <b>dephlogisticated air</b> – meaning air without oxygen. Later on, the element was named nitrogen by French chemist Jean Antoine Claude Chaptal in 1790, deriving from the Greek words <b>nitron</b> and <b>genes</b>, meaning <b>nitre (potassium nitrate) forming</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>When talking about nitrogen's applications, it is essential to know one of its chemical property – <b>it is NOT a reactive substance</b>. Therefore, it is used in light bulb industry because it requires a type of gas lacking reactivity to be stored inside the bulb – the tungsten metal in the bulb would combust with oxygen and it is not feasible to have the blub's inside vacuum. Another application would be food industry – where the nitrogen gas is used for delaying the fresh of packaged or bulk foods from changing their color or smell or other types of oxidative damage to the foods.</p>"
                   + "<p>Another one crucial role that nitrogen plays is limiting nutrient – the supply that exists as the <b>least amount</b> in our ecosystem to limit the organisms' or populations' growth.</p>"
                   + "<p>That being said, if the limiting nutrient is added to a certain group of plants, they would grow taller than the ones that were not treated with limiting nutrients. However, if there is no difference in height between the two groups, it then implies that there must be some other nutrients besides nitrogen limiting. That is the reason why a bag of fertilizer would contain an enormous amount of nitrogen and phosphorus because they are the two most common limiting nutrients in this ecosystem.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“The Nitrogen Cycle (Article) | Ecology.” <i>Khan Academy</i>, Khan Academy, <a href = www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-nitrogen-cycle>www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-nitrogen-cycle. </a></p>"
                   + "<p>“List the Physical and Chemical Properties of Nitrogen.” <i>Byju</i>, <a href = byjus.com/question-answer/list-the-physical-and-chemical-properties-of-nitrogen>byjus.com/question-answer/list-the-physical-and-chemical-properties-of-nitrogen/.</a></p>"
                   + "<p>“Periodic Table of Elements: Los Alamos National Laboratory - Nitrogen.” <i>Periodic Table of Elements: Los Alamos National Laboratory</i>, <a href = periodic.lanl.gov/7.shtml>periodic.lanl.gov/7.shtml.</a></p>"
                   + "<p>“Nitrogen - Element Information, Properties and Uses: Periodic Table.” <i>Nitrogen - Element Information, Properties and Uses | Periodic Table</i>, <a href = www.rsc.org/periodic-table/element/7/nitrogen>www.rsc.org/periodic-table/element/7/nitrogen.</a></p>"
                   + "<p>Galloway, James N, et al. “A Chronology of Human Understanding of the Nitrogen Cycle.” <i>Philosophical Transactions of the Royal Society of London. Series B, Biological Sciences</i>, U.S. National Library of Medicine, 27 May 2013, <a href = www.ncbi.nlm.nih.gov/pmc/articles/PMC3682740/>www.ncbi.nlm.nih.gov/pmc/articles/PMC3682740/.</a></p>"
                   + "<p>“The Nitrogen Cycle (Article) | Ecology.” <i>Khan Academy</i>, Khan Academy, <a href = www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-nitrogen-cycle>www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-nitrogen-cycle. </a></p>"
                   + "<p>“What Is a Limiting Nutrient in an Ecosystem?” <i>Byju</i>, <a href = byjus.com/question-answer/what-is-a-limiting-nutrient-in-an-ecosystem/>byjus.com/question-answer/what-is-a-limiting-nutrient-in-an-ecosystem/.</a></p>"
                   + "<p>“Omega Air.” <i>Nitrogen Gas Applications | Omega Air | Air and Gas Treatment</i>, <a href = www.omega-air.si/news/news/nitrogen-gas-applications >www.omega-air.si/news/news/nitrogen-gas-applications.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent7);
  }
}

Button7.addEventListener("click", openPopupWindow7);