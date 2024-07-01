var Button11 = document.getElementsByClassName("openButton")[10];

var dataAttributes11 = {
    element: "Sodium",
    image: "11.jpg",
    text: "Sodium (<b>element symbol: Na</b>) is a <b>very soft white-silvery metal</b>, and is the <b>sixth (6<sup>th</sup>) most abundant element on earth</b>, as well as <b>the most abundant alkali metal (Group IA) on earth</b>. Sodium can be <b>easily cut with knife at room temperature, but it becomes brittle (can be broken easily) at low temperature</b>. Additionally, it <b>conducts heat and electricity well</b>."
};

function openPopupWindow11() {
  var image = dataAttributes11.image;
  var text = dataAttributes11.text;
  var element = dataAttributes11.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1050,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent11 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>Sodium has been recognized in the mediums between stars and in spectra of stars – including the Sun – in both atomic and ionic forms. Furthermore, it displays the <b>photoelectric effect – where the element emits electrons when it is exposed to light – to a great extent</b>. Sodium is also <b>explosive when being put in water</b>, and is commercially the most crucial alkali metal by far. It also loses the silvery appearance and develops opaque gray color layer, sodium oxide (Na<sub>2</sub>O), as its 'coating' when the metallic sodium is in exposure to the air.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>There are two compounds that are being known during the prehistoric times – those being <b>sodium chloride (NaCl) and sodium carbonate (Na<sub>2</sub>CO<sub>3</sub>).</b> Sodium chloride was commonly used as flavoring preservative and it was from water, while sodium carbonate was used for glass manufactures, and was from Nation Valley, Egypt or from ashes of certain plants.</p>"
                   + "<p>The composition of these two compounds were what the early chemists debating on. It was not until <b>October 1807 that Humphry Davy from Royal Institution in London isolated the element – sodium – from them through electrolysis of sodium hydroxide</b> (The compound was known as 'caustic soda' at that time), just like what he did with potassium prior to that.</p>"
                   + "<p>Note: the process of electrolysis is a process where a substance has a chemical change which is affected through passing electric current.</p>"
                   + "<p>Louis-Josef Gay-Lussac and Louis Jacques Thénard had done an alternative way to isolate the same element in the following year – they heated a mixture of iron filings and caustic soda to red heat.</p>"
                   + "<p>This element is named after <b>sodanum</b> – the Medieval Latin word for <b>headache remedy</b>; its symbol <b>Na</b> is derived from the Latin word <b>natrium</b> meaning <b>sodium carbonate</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>One of the most common applications of sodium is the <b>baking soda</b> – NaHCO<sub>3</sub> – which is usually used in baking purposes and neutralization of acid <b>because this compound is a base</b>.</p>"
                   + "<p>Sodium metal is also used for producing sodium cyanide, sodium peroxide and sodium hydride:</p>"
                   + "<p><b>Sodium cyanide</b> is used for extracting gold and silver from ore, chemical manufacturing, and fumigation – meaning removing pests from a place. <br> <b>Sodium peroxide</b> is usually used as a bleaching product, disinfectant (chemical that kills bacteria), labratory chemical and production of other chmicals. <br> <b>Sodium hydride</b> is commonly used for production of soaps, paper, explosive products, dyes, petroleum products and rayon.</p>"
                   + "<p>Sodium is an important element in making esters; liquid sodium has been a material as a coolant for nuclear reactors, and sodium vapor is used in streetlights – producing awesome yellow lights.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Sodium.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 2 June 2024, <a href = www.britannica.com/science/sodium>www.britannica.com/science/sodium.</a></p>"
                   + "<p>Admin. “What Is Sodium - Uses, Physical & Chemical Properties of Sodium.” <i>BYJUS</i>, BYJU’S, 27 July 2022, <a href = byjus.com/chemistry/sodium>byjus.com/chemistry/sodium.</a></p>"
                   + "<p>“Sodium - Element Information, Properties and Uses: Periodic Table.” <i>Sodium - Element Information, Properties and Uses | Periodic Table</i>, <a href = www.rsc.org/periodic-table/element/11/sodium>www.rsc.org/periodic-table/element/11/sodium. 2024.</a></p>"
                   + "<p>“Electrolysis.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 31 May 2024, <a href = www.britannica.com/science/electrolysis>www.britannica.com/science/electrolysis.</a></p>"
                   + "<p>“The Element Sodium.” <i>It’s Elemental - The Element Sodium</i>, <a href = education.jlab.org/itselemental/ele011.html>education.jlab.org/itselemental/ele011.html.</a></p>"
                   + "<p>“Health Benefits of Baking Soda and Lemon Juice.” <i>Main Street Dental</i>, 4 Oct. 2019, <a href = mainstreetdental.com.au/health-benefits-of-baking-soda-and-lemon-juice>mainstreetdental.com.au/health-benefits-of-baking-soda-and-lemon-juice.</a></p>"
                   + "<p>Transport Canada. “Acid/Base Concept.” <i>Transport Canada</i>, Gouvernement du Canada, 16 Sept. 2011, <a href = tc.canada.ca/en/dangerous-goods/canutec/acid-base-concept>tc.canada.ca/en/dangerous-goods/canutec/acid-base-concept.</a></p>"
                   + "<p>“Sodium Cyanide: Systemic Agent.” <i>Centers for Disease Control and Prevention</i>, Centers for Disease Control and Prevention, 12 May 2011, <a href = www.cdc.gov/niosh/ershdb/emergencyresponsecard_29750036.html>www.cdc.gov/niosh/ershdb/emergencyresponsecard_29750036.html.</a></p>"
                   + "<p>“Sodium Hydroxide.” <i>Centers for Disease Control and Prevention</i>, Centers for Disease Control and Prevention, 6 July 2022, <a href = www.cdc.gov/niosh/topics/sodium-hydroxide/default.html>www.cdc.gov/niosh/topics/sodium-hydroxide/default.html.</a></p>"
                   + "<p>“Hazardous Substance Fact Sheet.” <i>New Jersey Department of Health and Senior Services, New Jersey Department of Health and Senior Services, <a href = nj.gov/health/eoh/rtkweb/documents/fs/1718.pdf >nj.gov/health/eoh/rtkweb/documents/fs/1718.pdf.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent11);
  }
}

Button11.addEventListener("click", openPopupWindow11);