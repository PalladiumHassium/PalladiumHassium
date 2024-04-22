var Button11 = document.getElementsByClassName("openButton")[10];

var dataAttributes11 = {
    element: "Sodium",
    image: "11.jpg",
    text: "Sodium (<b>Symbol: Na</b>) is a <b>very soft white-silvery metal</b>, and is the <b>sixth (6<sup>th</sup>) most abundant element on earth</b>, as well as <b>the most abundant alkali metal (Group IA) on earth</b>. Sodium can be <b>easily cut with knife at room temperature, but it becomes brittle (can be broken easily) at low temperature</b>. Additionally, it <b>conducts heat and electricity well</b>."
};

function openPopupWindow11() {
  var image = dataAttributes11.image;
  var text = dataAttributes11.text;
  var element = dataAttributes11.element;
  var windowName = "PopupWindow";
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
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent11);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button11.addEventListener("click", openPopupWindow11);