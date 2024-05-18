var Button13 = document.getElementsByClassName("openButton")[12];

var dataAttributes13 = {
    element: "Aluminum",
    image: "13.jpg",
    videoRxn: "AlFe2O3Rxn.mp4",
    text: "Aluminum (<b>symbol: Al</b>) is a solid, non-magnetic, non-lustrous, and silvery white metal with some bluish tint. Its pure form is a soft metal, but it becomes hardened when it is being tempered and alloyed. Aluminum has a high <b>malleability</b> (meanning that it <b>has an excellent ability to be bent and shaped in various forms</b>) and a high <b>ductility</b> (can be <b>stretched, pulled, or beaten to a very thin form</b>). It is a good conductor of electricity and heat and a corrosive-resistant material; it also has a highly reflective surface. For pure aluminum, it has a melting point of 660 degrees Celsius and a boiling point of 2470 degrees Celsius; however, the melting and evaporating points change when aluminum is alloyed with other materials."
};

function openPopupWindow13() {
  var image = dataAttributes13.image;
  var text = dataAttributes13.text;
  var element = dataAttributes13.element;
  var videoAl = dataAttributes13.videoRxn
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent13 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Reaction Time!</u></h2>"
                   + "<p>Aluminum and iron (III) oxide (Fe<sub>2</sub>O<sub>3</sub>) can burn things down with a temperature of <b><u>3000 degrees Celsius</u></b> when they react <b>because it releases an enormous amount of energy since this reaction forms a relatively stable compound: aluminum oxide.</b> Below here is how it reacts: (Note that, the object that appears to be a long silvery metal is the magnesium strip, and the red powder is the mixture of aluminum and iron (III) oxide)</p>"
                   + "<video src='" + videoAl + "' style='" + imageSize + "'controls></video>"
                   + "<p>Video reference: <a href = https://www.youtube.com/watch?v=FHNRrHD9GxQ>超高温实验！这次随机扎到了什么元素，实验竟如此激烈？甚至能钢板？</a></p>"
                   + "<p>English translation: Super High Temperature Experiment! What Element Was 'Shot' to Cause Such Vigorous Reaction? It Can Even Melt Through Steel Plate?</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>During the ancient times, alum (potassium aluminum sulfate dodecahydrate, KAl(SO<sub>4</sub>)<sub>2</sub>⋅12H<sub>2</sub>O) was used for dyeing, stopping from bleeding and tanning. In the mid-18<sup>th</sup>century, German chemist Andreas Marggraf found that alkali solutions can be used in order to precipitate (causing a substance to be formed as a solid from a solution) another substance from alum. In 1760, Marggraf isolated a substance which was what we now known as aluminum oxide (Al<sub>2</sub>O<sub>3</sub>) – and it was initially named 'alumina' by French chemist Louis de Morveau.</p>"
                   + "<p>In the early 19<sup>th</sup> century, alumina was decomposed by English chemist Humphry Davy in an electric orc in Copenhagen, Denmark; however, the metal was an alloy of aluminum and ion, rather than the pure form of aluminum. Later on in 1925, aluminum metal was first isolated by Hans Christian Ørsted – <b><i><u>'a lump of metal which in color and luster somewhat resembles tin.'</u></i></b> He reported. However, German chemist Friedrich Wöhler ran another identical experiment to the one done by Ørsted again – <b>but for that experiment, though, a potassium metal was yield instead!</b> And so, Wöhler developed another method two years later which could isolate small amounts of aluminum.</p>"
                   + "<p>Up until 1854, aluminum was still an expensive metal – until Henri Saint-Claire Deville in Paris, France found an alternative way to isolate aluminum by replacing potassium with sodium (which was much more cheaper) in the reaction. Aluminum was still quite expensive afterwards, but it became popularized – it was used in ornaments, but still had no practical uses yet.</p>"
                   + "<p>Two years later in 1856, it was stated by Berzelius that Wöhler was the one who succeeded back in 1827 with respect to the alternative way of isolating aluminum that he found – hence he was usually the one who receives the credit for this discovery. 30 years later, Hall-Héroult process was invented by both American chemist Charles Martin Hall and French chemist Paul Héroult independently – in which aluminum metal was isolated from oxide electrolytically, and was done inexpensively!</p>"
                   + "<p>This element's name is derived from <b><i>alumen</i></b>, the Latin word for <b><i>potash alum – also known as potassium aluminum sulfate dodecahydrate</i></b>.</p>" 
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Aluminum is used in various industries which makes millions of different products and is crucial to wrold's economy. Some vital applications of aluminum-made structural components are aerospace industry, transportation and building areas due to its lightweight, durability, as well as the strength required for these areas. Moreover, aluminum is also used in telescope mirrors, and other applications include electrical transmission lines and packaging, as well as foil papers.</p>"
                   + "<p></p>"
                   + "<h2><u>Environmental Impacts</u></h2>"
                   + "<p>There is a big concern with aluminum to the environment: acidification – which can cause health issues for plants and the animals that consume the plants. Furthermore, it could also somewhat cause chain reactions – since the aluminum concentration appears to be the highest in acidified lakes, and the fish and amphibian population is declining due to the reactions between aluminum ions and fish's protein and embryos.</p>"
                   + "<p><b><i><u>High aluminum concentration also affect birds and other animals in these ways:</u></i></b> <br> <b>Consuming contaminated prays</b> – which can lead to thinning eggshell and low birthweights. <br> <b>Breathing aluminum through air</b> – which may cause lung problems, weight loss and decline in activity.</p>"
                   + "<p>A sad truth: high concentrations fo aluminum can also be found in groundwater and acidified soils – not just in acidified lakes and air! When the strong indications of aluminum is located in groundwater, it can damage roots of trees as well!</p>"
                   + "<p><b><i><u>In summary, although aluminum can ben a useful and a desirable material, it is similar to beryllium – an eco-unfriendly material.</u></i></b></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent13);
  }
}

Button13.addEventListener("click", openPopupWindow13);