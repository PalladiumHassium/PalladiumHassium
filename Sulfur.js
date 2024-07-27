var Button16 = document.getElementsByClassName("openButton")[15];

var dataAttributes16 = {
    element: "Sulfur",
    image: "16.jpg",
    img2: "SulfurIronMixture.png",
    vid2: "FeS_Rxn.mp4",
    text: "Sulfur (<b>element symbol: S</b>) is a <b>non-metallic chemical element</b> which belongs to the oxygen group – or group 16 – on the periodic table, and it is <b>one of the most reactive</b> elements. The picture above shows the large sulfur pile in Vancouver, and was taken in 2010."
};

function openPopupWindow16() {
  var image = dataAttributes16.image;
  var image2 = dataAttributes16.img2;
  var video2 = dataAttributes16.vid2;
  var text = dataAttributes16.text;
  var element = dataAttributes16.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 300px; height: auto;";
  var videoSize = "width: 500px; height: auto;";

  var popupContent16 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>Sulfur in its pure form is tasteless, odorless, brittle and solid. The most common allotrope of pure sulfur appears to be <b>pale-yellow powder or crystal form</b>. Sulfur, as mentioned previously in the window of phosphorus, is a <b>bad conductor of electricity and heat</b>. It is also <b>insoluble in water</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Biological Role</u></h2>"
                   + "<p>Sulfur is an essential element to all living things <b>because plants and algae take up this element as sulfate from the soil seawater so that they can use it to produce two types of the crucial amino acids required to make proteins</b>, and it is also needed in some <b>co-enzymes</b>. Additionally, the average human contains 140g of sulfur and consumes 1g per day – and they are mainly consumed from proteins.</p>"
                   + "<p>Sulfur and sulfate are both <b>non-toxic to humans</b>; however, all of these three following compounds: <b>carbon disulfide (CS<sub>2</sub>), hydrogen sulfide (H<sub>2</sub>S) and sulfur dioxide (SO<sub>2</sub>) are toxic. Especially for <b>hydrogen sulfide</b>, which is dangerous and can <b>lead to death due to respiratory paralysis</b>.</b></p>"
                   + "<p>Sulfur is extremely crucial to us as humans <b>because it builds DNA for us, as well as protecting our cells from getting serious diseases such as cancers through damaging the cells</b>. Furthermore, this element is also responsible to change our food into usable form of energy for our body, as well as contributing the health of our skin, tendons and ligaments.</p>"
                   + "<p>Ever wonder where sulfur dioxide is created? Well, <b>they are created when the coal and the unpurified oil are burned</b>. This gas existing in the atmosphere causes <b>acid rain – which can cause the death of lakes – partially due to allowing toxic aluminum salts soluble – then the contaminated water in the bodies of water can be taken up by living things</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Enviromental Impact</u></h2>"
                   + "<p>Sulfur, existing in the air in multiple different forms, <b>can irritate the eyes and the throat for animals through inhaling sulfur at its gaseous phase</b>. However, sulfur is widely applied in some industries and is emitted to the air because of the limited possibilities to destruct the sulfur applied in the industry.</p>"
                   + "<p>Sulfur, unfortunately, also <b>damages animals in mostly their brain</b> through <b>malfunctioning of the hypothalamus and the damage to their nervous system</b>; this element can also <b>undermine their internal enzyme systems</b>.</p>"
                   + "<p>According to the laboratory tests which is done on animals, it indicates that <b>serious vascular damage in veins (or blood vessel) of the brains, the heart and the kidneys of animals and humans can be caused by sulfur; the test also indicated that foetal damage and congential effects can also be caused by certain forms of sulfur. Mothers can even carry sulfur poisoning over to its offspring through mother milk!</b></p>"
                   + "<p></p>"
                   + "<h2><u>Reaction Time!</u></h2>"
                   + "<p>The photo below shows the sulfur powder and iron powder respectively before they are mixed. The video below the image shows the vigorous reaction when iron and sulfur react through heat. This reaction is an <b>exothermic reaction</b> since this reaction <b>releases more heat than the heat absorbed</b>. After the the iron-sulfur mixture (the gray powder mixture) is burned with fire on the rod, <b>they are fused together</b>.</p>"
                   + "<img src='" + image2 + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<video src='" + video2 + "' style='" + videoSize + "'controls></video>"
                   + "<p>Image and video reference: <a href = https://www.youtube.com/watch?v=A5H6DVe5FAI>Reaction of iron with sulfur by ChemToddler</a></p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>This element is one of the elements known to be <b>discovered at ancient times</b>. In other words, <b>their discovery was unlike all the ones in the previous ones that were discovered by certain people; but rather – is was known in prehistoric times.</b></p>"
                   + "<p>However, in 1777, the scientific community was convinced by Antoine Lavoisier that sulfur was an element; later on in 1809, the elemental nature of sulfur was proved by the two French chemists Joseph Louis Gay-Lussac and Louis Jacques Thénard.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Sulfur is used as a fungicide – which is used to kill the fungi – and is as well used in black gunpowder to harden the natural rubber. It is also used in producing cement, detergents, pesticides and some gunpowder. Moreover, it is also used in <b>sulfuric acid manufactures – which is the most essential chemical being produced by Western civilizations</b>.</p>"
                   + "<p>Some other applications towards sulfur-based chemicals would be bleaching paper and rubber vulcanizations, and some other uses of sulfur include batteries, fertilizer, oil refining, water processing, and mineral extraction.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Sulfur.” Encyclopædia Britannica, Encyclopædia Britannica, inc., 21 June 2024, <a href = www.britannica.com/science/sulfur>www.britannica.com/science/sulfur.</a></p>"
                   + "<p>“Sulfur - Element Information, Properties and Uses: Periodic Table.” <i>Sulfur - Element Information, Properties and Uses | Periodic Table</i>, <a href = www.rsc.org/periodic-table/element/16/sulfur>www.rsc.org/periodic-table/element/16/sulfur.</a></p>"
                   + "<p>“7 Foods High in Sulfur and Why You Need It.” <i>WebMD</i>, WebMD, <a href = www.webmd.com/diet/foods-high-in-sulfur>www.webmd.com/diet/foods-high-in-sulfur.</a></p>"
                   + "<p>“Sulfur (S) - Chemical properties, Health and Environmental effects.” <i>Lenntech Water Treatment & Purification, <a href = www.lenntech.com/periodic/elements/s.htm>www.lenntech.com/periodic/elements/s.htm.</a></p>"
                   + "<p>“Reactions of Iron with Sulfur, Zinc with Sulfur.” <i>Chemistry Comes Alive! </i>, <a href = www.chemedx.org/JCESoft/jcesoftSubscriber/CCA/CCA3/MAIN/FEZNSUL/PAGE1.HTM>www.chemedx.org/JCESoft/jcesoftSubscriber/CCA/CCA3/MAIN/FEZNSUL/PAGE1.HTM.</a></p>"
                   + "<p>“Unexpected Findings Change the Picture of Sulfur on the Early Earth.” <i>California Institute of Technology</i>, <a href = www.caltech.edu/about/news/unexpected-findings-change-picture-sulfur-early-earth-44407>www.caltech.edu/about/news/unexpected-findings-change-picture-sulfur-early-earth-44407.</a></p>"
                   + "<p>“Sulfur.” <i>National Center for Biotechnology Information. PubChem Compound Database</i>, U.S. National Library of Medicine, <a href = pubchem.ncbi.nlm.nih.gov/element/Sulfur>pubchem.ncbi.nlm.nih.gov/element/Sulfur.</a></p>"
                   + "<p>Admin. “Sulfur - Uses of Sulfur, Facts & Chemical Properties with Faqs.” <i>BYJUS</i>, BYJU’S, 1 Aug. 2022, <a href = byjus.com/chemistry/sulfur>byjus.com/chemistry/sulfur.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent16);
  }
}

Button16.addEventListener("click", openPopupWindow16);