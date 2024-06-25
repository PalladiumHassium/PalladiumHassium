var Button2 = document.getElementsByClassName("openButton")[1];

var dataAttributes2 = {
    element: "Helium",
    image: "2.jpg",
    text: "Helium (<b>element symbol: He</b>) is a gas element that is flavorless colorless, odorless and non-toxic. It is low in both solubility and density; however, it is high in inertness (meaning <b>lack of movement</b>) and thermal conductivity. It is notable to know that helium is a <b>noble gas</b>, meaning that it generally <b><u>does not</u> react with other elements</b>.",
};

function openPopupWindow2() {
  var image = dataAttributes2.image;
  var text = dataAttributes2.text;
  var element = dataAttributes2.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize1 = "width: 200; height: auto;";
  var imageSize2 = "width: 400; height: auto;";

  var popupContent2 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize1 + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>Note that, a helium atom is comprised of <b>two protons and two neutrons at its nucleus</b> and <b>two electrons on its electron shell</b>. This atomic structure makes up a helium-4 – which is the most abundant helium isotope in existing in this universe. Additionally, helium is <b>not a diatomic element</b> – in other words, it only exists <b>as in the form of single atoms – as opposed to in pairs – existing in nature</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>Helium was first found as an unknown element in August 18, 1868 by a French astronomer named Jules Janssen. When he was observing the solar eclipse in India, he saw a bright yellow spectral light emitting from the sun – which he believed that it was supposed to be sodium because the color was extremely close to to the D1 and D2 Fraunhofer lines.</p>"
                   + "<p>On October 20 in the same year, Norman Lockyer – an English astronomer – observed a yellow line in the solar spectrum, which he named it <b>D3 Fraunhofer line</b>, and came to a conclusion that it was cause by an unknown element in the sun. Lockyer and the English chemist Edward Frankland named this element <b>helios</b> – meaning <b>sun</b> in Greek.</p>"
                   + "<p>It was believed that the vast majority of helium-4 atoms – with small amounts of other helium hydrogen and lithium isotopes – were created from Big Bang nucleosyntheses. This event occurred during the time frame of 10 seconds to 20 minutes after the the Big Bang, and it was marked as the creation of other nuclei of hydrogen-1 – the lightest element in this universe.</p>"
                   + "<p></p>"
                   + "<h2><u>Fusion on the Sun</u></h2>"
                   + "<p>This equation below represents the creation of helium on the sun from the fusion of hydrogen atoms:</p>"
                   + "<img src='HydrogenFusionEquation.png' style='" + imageSize2 + "'>" //credit to Willard's note; also credit to ChatGPT helped me with lines 22-23
                   + "<p>The equation above means that when a hydrogen-2 atom and a hydrogen-3 atom are fused together, it produces <b>a helium-4 atom, a neutron, and ENERGY in the form of ELECTROMAGNETIC WAVES</b> because when hydrogen-2 and hydrogen-3 combine, it produces an enormous amount of energy – and this energy exits the sun as radiation, which covers EMR (electromagnetic radiation) spectrum as mostly infared rays, ultraviolet rays and visible light, as well as a small portion of radio waves, microwaves, x-rays and gamma rays.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“This Month in Physics History.” <i>American Physical Society</i>, <a href = www.aps.org/publications/apsnews/201409/physicshistory.cfm>www.aps.org/publications/apsnews/201409/physicshistory.cfm. Accessed 24 June 2024.</a></p>"
                   + "<p>“Water Treatment Solutions.” <i>Lenntech Water Treatment & Purification</i>, <a href = www.lenntech.com/periodic/elements/he.htm>www.lenntech.com/periodic/elements/he.htm.</a></p>"
                   + "<p>Williams, Matt. “Who Discovered Helium?” <i>Phys.Org</i>, Phys.org, 15 Mar. 2016, <a href = phys.org/news/2016-03-helium.html>phys.org/news/2016-03-helium.html.</a></p>"
                   + "<p>“Programs: Energy and Minerals: Helium: About Helium.” <i>Bureau of Land Management</i>, <a href = www.blm.gov/programs/energy-and-minerals/helium/about-helium>www.blm.gov/programs/energy-and-minerals/helium/about-helium.</a></p>"
                   + "<p>.</p>"
                   + "</div>";
                   

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent2);
  }
}

Button2.addEventListener("click", openPopupWindow2);