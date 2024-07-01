var Button17 = document.getElementsByClassName("openButton")[16];

var dataAttributes17 = {
    element: "Chlorine",
    image: "17.jpg",
    text: "Chlorine (<b>element symbol: Cl</b>) is <b>a yellow-green gas at room temperature, and has a very sharp odor even at exxtremely low concentration</b>, amd the odor of the element is similar to bleach. It is <b>a relatively reactive element especially with metals</b>, which forms salts as the product of reaction. Chlorine is also <b>another diatomic element existing in nature.</b> Its <b>boiling point</b> is at <b>-35°C, or -31°F</b>, and has a <b>melting point at -101°C, or -149.8°F</b>. The density of chlorine is <b>approximately 13.0 pounds per gallon</b>, which converts to <b>1.56 kilograms per litre</b>, making the element denser than the air."
};

function openPopupWindow17() {
  var image = dataAttributes17.image;
  var text = dataAttributes17.text;
  var element = dataAttributes17.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent17 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p>A chlorine atom has seven <b>valence electrons</b> (valence means the <b>the outermost</b>) at its valence shell, making the element extremely unstable! The reason behind the instability is because for most elements, <b>they need <u>8</u> valence electrons to make it stable, also known as the “stable octet.”</b> That is also why all the halogens are unstable, while the noble gases – helium, neon, argon, krypton, and radon (with an exception to xenon, Xe, which does react under some circumstances) – are generally stable.</p>"
                   + "<p>Interestingly – when sodium, which reacts vigorously to the water, and chlorine, which killed numerous people during the First World War, react, they turn out to <b>form something we need in our day-to-day life, table salt (NaCl)!</b> As mentioned before, chlorine is one of the members amongst the halogen family, which can neutralize the charges for the metals (sodium in this case) <b>because it is “receiving” an electron from the metal (Na) and correspondingly, the metal is giving the nonmetal (Cl) its extra electrons to make them both stable. <u>This is also known as an <i>ionic bond</i>.</u></b></p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>At the earliest, the rock salt – which is just NaCl – was known for several millenia back, and it was also known as <b>the main material of the salts dissovled in the seawater</b>. It then, interestingly, partially became the currency of the soldiers in Roman times!</p>"
                   + "<p>It wasn't until 1648 when Johann Rudolf, a German chemist, had obtained a powerful acid through burning the moist salt into a charcoal furnace and then condensing the fumes in a receiver – which he named it <b>“spirit of salt.”</b> He later on got the same product through heating the salt with the sulfuric acid, which yielded to what is now known as the <b>hydrochloric acid.</b></p>"
                   + "<p>In 1774, Carl Wilhelm Scheele combined the hydrochlorid acid with manganese (IV) oxide, MnO<sub>2</sub>, resulting into obtaining a greenish yet yellowish gas. However, he failed to recognize that it was an element. It was not until Humphry Davy, an English chemist, who actually recongized that it was an element and named it chlorine, <b>deriving from the Greek word “<u>chlros</u>”, meaning “<u>pale green</u>”</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Historical Event</u></h2>"
                   + "<p>As mentioned before, chlorine was used as a gas weapon during the First World War. <b>It was used by both sides, the Triple Entente and the Triple Alliance!</b> The initial attack of such gas at a significant level happened in April 1915, in Ypres, Belgium. It was released by Germany on the Triple Alliance side. The attack, consequently, <b>resulted into a great number of casualties among the British and Canadian forces!</b></p>"
                   + "<p>Since the gas was making numerous people suffering on the side of Triple Entente, they quickly developed some types of protection to prevent from getting killed due to such highly dangerous gas. The thiosulfate-laced cotton pad had efficiently neutralized the gas once chlorine was known to be the chemical agent used. <b>And so, by July of 1915, a “hypo helmet” was invented</b> – it was made up of the <b>wool hood soaked in thiosulfate (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>), sodium bicarbonate (Na<sub>2</sub>CO<sub>3</sub>) and glycerin (C<sub>3</sub>H<sub>8</sub>O<sub>3</sub>)</b>.</p>"
                   + "<p>Despite the invention which effectively protected the soldiers, such dangerous gas still created a catastrophic holocaust. In response to such high number of casualties caused, the Entente – Britain (now known as the United Kingdom, UK) and France – quickly improved their weapon uses with the chemical ammunitions. As the result, <b>by mid-1916, both sides mixed chlorine and phosgene into their firearms, attempting to make the casualties to an even larger scale</b>.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications</u></h2>"
                   + "<p>One of the most common applications of the Cl gas is the <b>sanitization of the swimming pool</b> – and the reason is to ensure that the number of germs present in the pool is minimized, since they can contaminate the water in the pool as it travels along kilometers of piping to arrive their destination.</p>"
                   + "<p>Additionally, the Cl compounds are widely used in the food industry – to, again, <b>destroy the bacteria and ensuring that the food processing is under a sanitized environment.</b> Some example compounds present in this application include sodium hypoclorite (NaOCl) and calcium hypochlorite Ca(OCl)<sub>2</sub>.</p>"
                   + "<p></p>"
                   + "<h2><u>Effects on Humans</u></h2>"
                   + "<p>If we as human breathe in the Cl gas, <b>it would not be stored due to its high reactivity</b>. However, there would be <b>effects on our health depending on the amount of Cl gas present in the body, as well as the length and frequency of exposure</b>.</p>"
                   + "<p>If we breathe in a small qunatity of Cl gas for a short period of time, it would affect our respiratory system – which can lead to effects <b>varying from coughing and chest pain to the retention of the water in the lungs</b>. Furthermore, the gas would <b>irritate our eyes, skins and again, our respiratory system.</b></p>"
                   + "<p>Although the effects of breathing in small amount of Cl gas for an extented period of time are not known, <b>some studies had shown that the workers associating with repeat inhalation of such gas would develop adverse effects.</b></p>"
                   + "<p></p>"
                   + "<h2><u>Bibliography</u></h2>"
                   + "<p>“Chlorine Facts.” <i>Chlorine The Element of Surprise</i>, 18 Sept. 2020, <a href = www.chlorine.org/chlorine-facts>www.chlorine.org/chlorine-facts.</a></p>"
                   + "<p>“Chlorine.” <i>Encyclopædia Britannica</i>, Encyclopædia Britannica, inc., 5 May 2024, <a href = www.britannica.com/science/chlorine>www.britannica.com/science/chlorine.</a></p>"
                   + "<p>Mark Winter, University of Sheffield and WebElements Ltd. “Chlorine - 17cl: Historical Information.” <i>WebElements Periodic Table  “Chlorine” Historical Information</i>, <a href = winter.group.shef.ac.uk/webelements/chlorine/history.html>winter.group.shef.ac.uk/webelements/chlorine/history.html.</a></p>"
                   + "<p>Fitzgerald, Gerard J. “Chemical Warfare and Medical Response during World War I.” <i>American Journal of Public Health</i>, U.S. National Library of Medicine, Apr. 2008, <a href = www.ncbi.nlm.nih.gov/pmc/articles/PMC2376985/>www.ncbi.nlm.nih.gov/pmc/articles/PMC2376985/.</a></p>"
                   + "<p>“How Gas Became a Terror Weapon in the First World War.” <i>Imperial War Museums</i>, <a href = www.iwm.org.uk/history/how-gas-became-a-terror-weapon-in-the-first-world-war>www.iwm.org.uk/history/how-gas-became-a-terror-weapon-in-the-first-world-war.</a></p>"
                   + "<p>“Water Disinfection with Chlorine and Chloramine.” <i>Centers for Disease Control and Prevention</i>, Centers for Disease Control and Prevention, 17 Nov. 2020, <a href = www.cdc.gov/healthywater/drinking/public/water_disinfection.html>www.cdc.gov/healthywater/drinking/public/water_disinfection.html.</a></p>"
                   + "<p>“Agriculture: Province of Manitoba.” <i>Province of Manitoba - Agriculture</i>, <a href = www.gov.mb.ca/agriculture/food-safety/at-the-food-processor/use-of-chlorine.html>www.gov.mb.ca/agriculture/food-safety/at-the-food-processor/use-of-chlorine.html.</a></p>"
                   + "<p>“Chlorine (Cl) - Chemical properties, Health and Environmental effects.” <i>Lenntech Water Treatment & Purification</i>, <a href = www.lenntech.com/periodic/elements/cl.htm>www.lenntech.com/periodic/elements/cl.htm.</a></p>" 
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent17);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button17.addEventListener("click", openPopupWindow17);