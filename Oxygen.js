var Button8 = document.getElementsByClassName("openButton")[7];

var dataAttributes8 = {
    element: "Oxygen",
    image: "8.jpg",
    video_a: "OxygenVideo1.mp4",
    video_b: "OxygenVideo2.mp4",
    video_c: "OxygenVideo3.mp4",
    text: "Oxygen (<b>symbol: O</b>) is a colorless, odorless and tasteless gas; it is <b>the third diatomic element existing in nature by atomic number</b>. It is also a gas with <b>poor conductivity of heat and electricity</b>. Oxygen is present in <b>some</b> organic compounds such as methanol and ethanol, and is soluble in some liquids such as water. Additionally, it is needed in order to keep the fire burning, but oxygen itself does not combust nor burn. Oxygen can be produced through the electric discharge within itself and through the process of action of ultraviolet radiation on itself in the stratosphere (a layer of the earth's atmosphere).</b>"
};

function openPopupWindow8() {
  var image = dataAttributes8.image;
  var text = dataAttributes8.text;
  var element = dataAttributes8.element;
  var video1 = dataAttributes8.video_a;
  var video2 = dataAttributes8.video_b;
  var video3 = dataAttributes8.video_c;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";


  var popupContent8 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Reaction Time!</u></h2>"
                   + "<p>Oxygen in liquid form is an extremely powerful substance – its temperature is at -183°C, and it appears to be light blue. Objects would burn vigorously if they have been previously soaked in liquid oxygen.</p>"
                   + "<p>When an ignited match is put inside the test tube containing the liquid oxygen, the test tube would appear to be combusting dynamically.</p>"
                   + "<video src='" + video1 + "' style='" + imageSize + "'controls></video>"
                   + "<p>When a steam bum (which is very difficult to be burned under normal conditions due to the low level of oxygen within our atmosphere) that is previously soaked in liquid oxygen, it would burn aggressively <b><u>because the concentration of oxygen of liquid oxygen is almost 4000x than the air in the atmosphere.</u></b></p>"
                   + "<video src='" + video2 + "' style='" + imageSize + "'controls></video>"
                   + "<p>When the fire reacts with sponge that is also previously soaked with liquid oxygen, <b><u>it would burn into ashes all within a very short amount of time after about 2-3s – as if it disappears all in a sudden!</u></b></p>"
                   + "<video src='" + video3 + "' style='" + imageSize + "'controls></video>"
                   + "<p>Videos Reference: <a href = https://www.youtube.com/watch?v=KtR3pC5Kqs0> 另一种形态的氧气，破坏力竟然如此惊人？连铁都能像纸一样被燃烧🔥！<br></a> English Translation for Title: Another Phase of Oxygen is so Destructive? Even Iron Metal can be Burned Like Paper!</p>"
                   + "<p></p>"
                   + "<h2><u>History and Discovery</u></h2>"
                   + "<p>In 1772, a Swedish chemist named Carl Wilhelm Scheele obtained and discovered oxygen by heating potassium nitrate (K<sub>2</sub>NO<sub>3</sub>), mercuric oxide (or mercury (II) oxide, HgO) and many other chemicals. 2 years later, English chemist Joseph Priestley discovered oxygen independently by decomposing mercuric oxide thermally and then published this discovery within the same year – 3 years before Scheele did.</p>"
                   + "<p>Between 1775 and 1780, French chemist Antoine-Laurent Lavoiser interpreted the role oxygen plays in combustion and respiration with a remarkable insight. It discarded the phlogiston theory – which had been accepted up to that point. Furthermore, Lavoisier also noted the element's tendency of forming acid through combining with a variety of substance, then accordingly named the element <b>oxygen</b> – standing for <b>acid former</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>There are some more applications of oxygen, including productions of stone and glass products, mining of stone, medicial and biological support, rocket propulsion (pushing the rocket forward), producing chemicals through controlled oxidization, as well as melting, refining and manufacturing steel and other metals.</p>"
                   + "<p>Oxygen, however, as the level of it increases overtime, the atmosphere thickened – blocking some sunlight on the way, hence the lower vaporization as well as less production of water vapors, resulting in decrease in temperature.</p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Ancient Oxygen Discovery Shakes up History of Life on Earth | CBC News.” <i>CBCnews</i>, CBC/Radio Canada, 26 Sept. 2013, <a href = www.cbc.ca/news/science/ancient-oxygen-discovery-shakes-up-history-of-life-on-earth-1.1867976>www.cbc.ca/news/science/ancient-oxygen-discovery-shakes-up-history-of-life-on-earth-1.1867976.</a></p>"
                   + "<p>“Properties of Oxygen.” <i>Unacademy</i>, 29 Mar. 2022, <a href = unacademy.com/content/nda/study-material/chemistry/properties-of-oxygen/>unacademy.com/content/nda/study-material/chemistry/properties-of-oxygen/.</a></p>"
                   + "<p>“Oxygen.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 2 May 2024, <a href = www.britannica.com/science/oxygen>www.britannica.com/science/oxygen.</a></p>"
                   + "<p>Staff. <i>How Oxygen Levels Impact the Climate</i>, AccuWeather, 26 Feb. 2020, <a href = www.accuweather.com/en/health-wellness/how-oxygen-levels-impact-the-climate/685016>www.accuweather.com/en/health-wellness/how-oxygen-levels-impact-the-climate/685016.</a></p>"
                   + "<p>“Oxygen (O) - Chemical properties, Health and Environmental effects” <i>Lenntech Water Treatment & Purification</i>, <a href = www.lenntech.com/periodic/elements/o.htm>www.lenntech.com/periodic/elements/o.htm.</a></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent8);
  }
}

Button8.addEventListener("click", openPopupWindow8);