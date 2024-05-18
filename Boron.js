var Button5 = document.getElementsByClassName("openButton")[4];

var dataAttributes5 = {
    element: "Boron",
    image: "5.jpg",
    text: "A piece of pure boron (<b>element symbol: B</b>) is a dark powder without definite shape. It is a lustrous semiconductor: when talking about its conductivity, it is similar to a metal – which can conduct heat well – at high temperature; conversely, it acts almost like an insulator when it is at low temperature. Boron is hard enough to rub against abrasives, but it is too easy to be broken to be used as tools."
};

function openPopupWindow5() {
  var image = dataAttributes5.image;
  var text = dataAttributes5.text;
  var element = dataAttributes5.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1010,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";
  
  var popupContent5 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>Boron usually exists naturally in oceans, sedimentary rocks, coal, shale, and some soils. It is generally released from geothermal activities such as dissolving of boron-containing rocks, or geothermal steam. It is also released by humans, but to a lesser extent.</p>"
                   + "<p>Boron also plays an essential role in terms of nutrients to all green plants. <b>It is consumed by us, as humans, approximately 2 mg each day, and about 60g would be consumed when we are alive.</b> Moreover, boron is generally not considered as poisonous to animals, but it does upset a body's metabolism if excessively consumed.</p>"
                   + "<p>Most boron existing in this universe that we live in was made way before the formation of the universe – in other words, boron was not made by nuclear fusion within the stars nor from big bang; but rather, it was made by nuclear fusion in cosmic-ray fusions.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>Boron was first isolated by two French chemists and a British chemist – Joseph-Louis Gay-Lussac and Louis-Jacques Thenard, Sir Humphry Davy – which they all worked independently. It was separated by heating boron oxide (B<sub>2</sub>O<sub>3</sub>) and potassium metal, which yielded to a product that had no definite shape and it was impure. None of these chemists had successfully isolated boron as a pure element since it was a nearly impossible task. However, another purer type of boron was isolated by Henri Moissan in 1892.</p>"
                   + "<p>It was not until 1909 where boron was isolated with further purity. It was Weintraub from the United States who eventually produced a version of 99%-pure boron. It was done through sparking boron chloride, BCl<sub>3</sub>, vapor alone with hydrogen. However, this type of boron was found to have extremely different properties in contrast to the ones previously reported.</p>"
                   + "<p>Not only that boron is essential for the animals and us as humans, it is also used in our technology. Boron was an abolutely necessary element to make <b>NIB – neodymium-iron-born – magnets</b>. It was <b>the most powerful magnet</b> invented back in the 80s, and they were used <b>in computers, cell phones, medical equipments, toys, motors, wind turbines and audio systems</b>. Some more applications include <b>boron fibers</b> – very much like carbon fibers – <b>which are used in fishing rods</b>; <b>boron carbide</b> (B<sub>4</sub>C) – used in <b>manufacturing bulletproof vests and tank armor</b> due to its inertness, heat resistance and hardness; as well as <b>boron nitride (BN)</b>, which is an <b>excellent abrasive for industry</b> as in cubic shape, and it can be made into crucibles to hold molten metals as in hexagonal shape due to its softness and smoothness.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications & Things to Be Aware</u></h2>"
                   + "<p>Boron existing in food and beverages – unlike beryllium – <b>is generally not harmful to humans</b>. However, <b>the harm can be caused if borax or boric acid – which may exist in cleaning products and pesticides – are consumed</b>!</p>"
                   + "<p><b>If excessive amount of boron is consumed, it would cause nausea, vomiting, diarrhea, rashes, headaches, and convulsions.</b></p>"
                   + "<p><b>If extreme high amount of boron are consumed, it may even cause death!</b></p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent5);
  }
}

Button5.addEventListener("click", openPopupWindow5);