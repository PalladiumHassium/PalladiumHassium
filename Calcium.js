var Button20 = document.getElementsByClassName("openButton")[19];

var dataAttributes20 = {
    element: "Calcium",
    image: "20.jpg",
    text: "Calcium (<b>element symbol: Ca</b>) is the third most abundant metal existing in the earth's crust, and its abundance is as high as that it can be found almost everywhere around the globe. It is in the <b>alkaline earth metal family</b>, thus it does <b>conduct heat and electricity well</b>. However, despite that it is categorized as the alkaline earth metal, <b>it is not as reactive as the ones in the alkali metals group such as sodium and potassium</b>."
};

function openPopupWindow20() {
  var image = dataAttributes20.image;
  var text = dataAttributes20.text;
  var element = dataAttributes20.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent20 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Food Containing Calcium</u></h2>"
                   + "<p>The dairy products are the best food sources of calcium, and some of those include <b>milk, yogurt, cheeses and buttermilk</b>. Some other foods containing calcium include <b>green leafy vegetables such as collards, kale and broccoli; salmon and sardines that are canned with their soft bone; almonds, Brazil nuts, sunflower seeds, tahini, and dried beans</b>.</p>"
                   + "<p>Calcium is also often <b>added to food products</b>, and some of which include <b>orange juice, soy milk, tofu, breads and ready-to-eat cereals</b>.</p>"
                   + "<p>Calcium is one of the crucial elements to our body <b>because it is needed in order to make our muscles to move and for nerves to send messages from brain to all other parts of our body</b>. It furthermore helps body vessels to move through the <b?blood across our entire body, as well as releasing hormones affecting many bodily functions</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>Calcium oxide (CaO) – which was known as <b>lime</b> – was a useful material for making plaster and mortar for centuries. It was initially classified as an “earth” by Antoine Lavoisier because <b>it was not able to be reduced further</b>; however, he suspected that it was an oxide of an unknown substance.</p>"
                   + "<p>Later on in 1808, Humphry Davy attempted to use the process of electrolysis to reduce the moist lime, just same as what he did with sodium and potassium prior to this; however, those two previous ones were unsuccessful.</p>"
                   + "<p>As a result of that, he mixed the lime (calcium oxide) and mercuric oxide (mercury (II) oxide, HgO) together, which created an amalagam – or a <b>mixture</b> – comprised of calcium and mercury for him. Despite that, it was still inadequate for him to confirm that it was a new element that he had just obtained.</p>"
                   + "<p>Interestingly, Jöns Jacob Berzelius attempted the a similar experiment to Humphry Davy too: in which, he also obtained the amalgam.</p>"
                   + "<p>Humphry Davy then finally isolated and discovered calcium with a great success through further experimentations with electrolyzing a mixture of lime and mercuric oxide together.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>It is used in several industrial and commercial applications, including <b>a reducing agent in metal extraction and in production of certain industrial metals as an alloying agent</b>; some more applications in this field include <b>decarbonizer, desulfurizer, and deoxidizer</b>.</p>"
                   + "<p>Calcium is also widely in <b>food industry</b>, which include <b>calcium gluconate</b> – which is a crucial food additive. It is also used in <b>dairy manufacture</b>, which is used as a <b>fertilizer ingredient</b> and as a <b>supplement in animal feeds</b>. It is as well as used in <b>mineral supplements and toothpaste</b> in this area of applications.</p>"
                   + "<p>As well, calcium is used in the <b>insectides and rodenticides</b> – they involve <b>calcium arsenate</b> and <b>calcium phosphide</b> respectively.</p>"
                   + "<p>Some other applications of the calcium containing compounds can be <b>fireworks, cement and mortar, blackboard chalk, cosmetics, acetylene gas, plastics, and paints</b>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent20);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button20.addEventListener("click", openPopupWindow20);