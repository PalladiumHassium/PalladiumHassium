var Button15 = document.getElementsByClassName("openButton")[14];

var dataAttributes15 = {
    element: "Phosphorus",
    image: "15.jpg",
    text: "Phosphorus (<b>symbol: P</b>) has three main allotropic forms: white (or yellow), black (or violet), and red. Ordinary phosphorus has a color of waxy white solid, and it is <b>colorless</b> and <b>transparent</b> when it is in its <b>pure form</b>. Phosphorus is <b>insoluble in water</b>, but is <b>soluble in carbon disulfide, CS<sub>2</sub></b>."
};

function openPopupWindow15() {
  var image = dataAttributes15.image;
  var text = dataAttributes15.text;
  var element = dataAttributes15.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent15 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>It is also good to note that <b>none of the elements for the remainder of this period, period 3, has the ability to conduct the electricity like metals do because there are no electrons that are able to move around freely and carry the charges from place to place</b>. There is one exception for this element – <b>black phosphorus</b>, which, in fact, <b>does conduct electricity</b>.</p>"
                   + "<p>Phosphorus is <b>never</b> found free nor in its pure form in nature due its reactivity; however, it can instead be found in mineral phosphates or one of its three allotropes.</p>"
                   + "<p></p>"
                   + "<h2><u>Environmental Existence</u></h2>"
                   + "<p>The amount of phosphorus naturally present in food can vary but it can be as high as 370mg of phosphate per 100g in liver; it can also be low, like in vegetable oils. Some high-phosphorus-containing foods include tuna, salmon, sardines, turkey, chicken, eggs and cheese – which has a concentration of 200g of phosphate per 100g of the food!</p>"
                   + "<p>There are many phosphate minerals, including apatite, the most abundant form of phosphate mineral; fluoroapatite, the most extensively mines deposits. The chief mining area of phosphates are Russia, the United States of America, Morocco, Tunisia, Togo and Nauru. The world production on phosphate minerals is 153 million tonnes per year; however, since phosphorus plays a huge role in ingredients in fertilizers, there are concerns in depletion.</p>"
                   + "<p>The concentration of phosphate in ocean is <b>relatively low</b>, especially on the surface of it. There can be more phosphate in rivers and lakes which results in excessive algae growth.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>During the 12<sup>th</sup> century, Arabian alchemists may have accidentally isolated elemental phosphorus, but the records of it are unclear. <br>Later on in 1669, it appears that phosphorus have been discovered by German merchant Hennig Brand, whose hobby was alchemy. He left 50 buckets of urine alone which allowed it to putrefy, or decay. Then, he turned the urine into a paste by boiling it and heated it with sand, and then he left it alone, thereby purifying phosphorus from mineral form.</p>"
                   + "<p>This discovery was then sent in a letter to Gottfried Wilhelm Leibniz; afterwards, the demonstration of phosphorus and the element's ability to glow in dark excited public interest. However, phosphorus was still a chemical curiosity until about 100 years later – up until the time it was proved that phosphorus is a component of our bones.</p>"
                   + "<p>In 1800s, an electric furnace method to produce the elemental form of phosphorus from phosphate was developed by James Burgess Readman of Edinburgh, and it was the method being commonly used today.</p>"
                   + "<p>The name of this element is derived from the Greek word <b><i>phosphoros</i></b> meaning <b><i>brining light</i></b> due to its property to glow in the dark.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>Different allotropes of phosphorus have different applications. for instance, <b>white phosphorus</b> is commonly <b>used in flares and incendiary devices</b>, while the <b>red phosphorus</b> is used for the <b>material on the side of matchboxes to rub against safety matches to ignite the fire</b>. Additionally, <b>the largest use of phosphorus compounds in the fertilizers</b>. Moreover, phosphates are used in <b>producing special glasses and fine chinaware</b>.</p>"
                   + "<p>Phosphorus is also a crucial role to produce the steel – they are used as the ingredients in some detergents, but they are gradually banned in some countries due to the growth of unwanted algae.</p>"
                   + "<p></p>"
                   + "<h2><u>Biological Role</u></h2>"
                   + "<p>Phosphorus is <b>an essential element to ALL living things</b> – as it is a crucial substance to form the sugar-phosphate backbone of DNA and RNA. This element is also significant for energy to transfer into cells as a part of ATP – adenosine triphosphate – which is found in many other biologically important molecules.</p>"
                   + "<p>As human beings, <b>we consume approximately 1g of phosphate per day</b>, and <b>about 750g of phosphate is stored in our bodies since our bones and teeth of our body are mainly comprised of calcium phosphate</b>.</p>"
                   + "<p>However, if phosphate is overly used from fertilizers and detergents, it may cause pollution in rivers and lakes due to the rapid growth of algae, as mentioned previously. The algae would then block out the light, preventing water from performing photosynthesis, and the oxygen dissoved in water would soon get used up, then the lake would die.</p>"
                   + "<p></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent15);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button15.addEventListener("click", openPopupWindow15);