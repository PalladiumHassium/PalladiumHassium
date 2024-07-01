var Button18 = document.getElementsByClassName("openButton")[17];

var dataAttributes18 = {
    element: "Argon",
    image: "18.jpg",
    text: "Argon (<b>element symbol: Ar</b>) is a <b>noble gas</b> – meaning it is <b>inert and highly unreactive</b>. It is a colorless and odorless gas and is approximately as soluble as oxygen, but is 2.5 times more soluble in water than nitrogen. It is the <b>third-most abundant in earth's atmosphere and is the most abundant in earth's crust.</b>"
};

function openPopupWindow18() {
  var image = dataAttributes18.image;
  var text = dataAttributes18.text;
  var element = dataAttributes18.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent18 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>Despite argon's abundance on earth, <b>it was not discovered until 1894 by Rayleigh and William Ramsay when they did the initial separation of the element from the liquid air.</b> In fact, in one whole century prior to that in 1785, Henry Cavendish had noticed that there was approximately 1% of the the air that did not seem to react even under most extreme conditions – and that was argon.</p>"
                   + "<p><b>The discovery of argon was a result of the attempt of explaining the reason why the density of nitrogen extracted from the air is different from the product of decomposition of ammonia.</b></p>"
                   + "<p>And so, Ramsay performed the experiment involving the removal of nitrogen from the gas obtained from the air through reacting it with magnesium, forming solid magnesium nitride. <b>Consequently, he was left with a gas that just would not react</b> – he then saw new <b>groups of red and green lines</b> when he examined the spectrum of argon, <b>confirming that it was a new element.</b></p>"
                   + "<p>The element was named after the Greek word <b>lazy</b> – implying how reactive this element is.</p>"
                   + "<p></p>"
                   + "<h2><u>Health Effects</u></h2>"
                   + "<p>Upon the inhalation of the gas, it could cause any of the following: <b>dizziness, dullness, headache, and suffocation. If the gas was contacted with skin and eyes, it could cause forstbite.</b></p>"
                   + "<p>If excessive concentration is inhaled, <b>it could even result into nausea, vomiting, loss of consciousness, and death.</b></p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Argon is one of the elements used in <b>welding industry since it provides its inertness, preventing the welded metals from oxidizing.</b> Argon is furthermore used within neon tubes in lighting: as the electricity passes through the Ar gas, it produces a <b>purple-blue glow and emits light at a much lower voltage as it charges.</b></p>"
                   + "<p><b><u>Healthcare Industry:</u></b> it can be used as argon lasers which is used for <b>treating retinal detachment and retinal phototherapy for the patients with diabetes.</b> It is also used in <b>surgeries for destroying tumors, as well as welding arteries.</b> Due to its high capability of targeting areas with an excellent precision, <b>this advantage allowed argon lasers to be widely used in medical field.</b></p>"
                   + "<p>Argon is moreover used in <b>food and drink industries:</b> it is added to wine barrels to replace the air, <b>preventing the wine from souring and oxidizing.</b> It is also popularly used within <b>producing titanium and special alloys.</b></p>"
                   + "<p>As well, the gas is used for <b>thermal insulation in energy efficient windows</b>, which is more commonly seen in the UK; it is also used in scuba diving – due to its inertness and its low thermal conductivity.</p>"
                   + "<p>Some other useful applications of argon include <b>refrigeration, fire-extinguishing, spectroscopy, airbag inflation, fluorescent glow starters, and cryosurgery</b>; it is also used as the <b>carrier gas in cinematography and the atmosphere to grow crystals.</b></p>"
                   + "<p>The argon ion laser is, too, used in <b>high-speed printing, holography, laser shows and microscopy.</b></p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Argon - Element Information, Properties and Uses: Periodic Table.” <i>Argon - Element Information, Properties and Uses | Periodic Table</i>, <a href = www.rsc.org/periodic-table/element/18/argon>www.rsc.org/periodic-table/element/18/argon.</a></p>"
                   + "<p>“Argon.” <i>Pictures, Stories, and Facts about the Element Argon in the Periodic Table</i>, <a href = periodictable.com/Elements/018/index.html>periodictable.com/Elements/018/index.html.</a></p>"
                   + "<p>“Argon.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 24 May 2024, <a href = www.britannica.com/science/argon-chemical-element>www.britannica.com/science/argon-chemical-element.</a></p>" 
                   + "<p>“Argon (Ar) - Chemical Properties, Health and Environmental Effects.” <i>Lenntech Water Treatment & Purification</i>, www.lenntech.com/periodic/elements/ar.htm.</a></p>" 
                   + "<p>“Top Uses of Argon Gas.” <i>Adams Gas</i>, 15 Feb. 2024, <a href = www.adamsgas.co.uk/2018/03/01/top-uses-of-argon-gas/>www.adamsgas.co.uk/2018/03/01/top-uses-of-argon-gas/.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent18);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button18.addEventListener("click", openPopupWindow18);