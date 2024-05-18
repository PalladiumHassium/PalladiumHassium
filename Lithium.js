var Button3 = document.getElementsByClassName("openButton")[2];

var dataAttributes3 = {
  element: "Lithium",
  image: "3.jpg",
  text: "Lithium (<b>element symbol: Li</b>) is the first metal element by atomic number. It is a soft and silvery metal; it has the lowest density of all metals, yet reacts aggressively with water. Small amounts of lithium is found in the vasty majority of all igneous rocks and in the waters of many mineral springs. Currently, most lithium metal is produced in Chile, yielding lithium carbonate from brines when it is treated with sodium carbonate. Furthremore, Li-7 is the most plentiful isotope in this universe – with a natural abundance of 92.41%. <b>However, this metal is toxic to humans</b>."
};

function openPopupWindow3() {
  var image = dataAttributes3.image;
  var text = dataAttributes3.text;
  var element = dataAttributes3.element;
  var windowName = "PopupWindow" + new Date().getTime();
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent3 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p></p>"
                   + "<p></p>"
                   + "<h2><u>Element Properties</u></h2>"
                   + "<p>" + text + "</p>"
                   + "<p></p>"
                   + "<h2><u>Discovery</u></h2>"
                   + "<p>Lithium was initially discovered as a mineral – petalite, comprised of lithium, aluminum, silicon and oxygen – on a Swedish island of Utö by a Brazilian named Jozé Bonifácio de Andralda e Silva in the 1790s. After about 30 years, in 1817, the mineral was analyzed by Johan August Arfvedson, a Swedish chemist – in Stockholm, who came to a conclusion that it contained an unknown metal as of that time. He named it <b>lithium</b> – after <b>lithos</b>, meaning the word <b>stone</b> in Greek.</p>"
                   + "<p>Arfvedson later on realized that it was an alkali metal, carrying the similar elemental properties such as sodium, but it was lighter. Therefore, <b>the reason for such name as lithium was because lithium was the only alkali metal that was discovered from a mineral – unlike others, which were found in plain materials.</b> Yet, the mineral was not separatable through electrolysis. Many years later, in 1855, the German chemist Robert Bunsen and the British chemist Augustus Matthiessen found a way to keep it bulk through the method of electrolysis of molten lithium chloride.</p>"
                   + "<p></p>"
                   + "<h2><u>Applications & Things to Be Aware</u></h2>"
                   + "<p>The most common application of lithium is the <b>lithium ion batteries</b> – the rechargeable batteries used in electric cars, e-bikes, laptops, cellphones and other electronical devices requiring charging appliances. However, <b>this type of battery is more easily to be broken than other types, and the cars powered by Li-ion batteries are causing more carbon dioxide gas emissions than the ones powered by gasoline do.</b> Furthermore, they are <b>expensive</b> and are likely to cause <b>thermal runaway</b> – in other words, <b>it cannot withstand extreme temperatures as it may outburst into fire flames or cause explosions.</b> Additionally, they have a limited lifespan and would bring significant environmental impacts.</p>"
                   + "<p>Despite its danger and toxicity to humans, lithium – specifically Li-7 isotope – still plays two crucial roles on nuclear power because of its relative transparency of neutrons. First, almost all of the lihium hydroxide are used in nuclear power engineering as the primary coolant pressurized water reactors (PWRs). Second, as a fluoride (lithium fluoride, in other words), Li-7 is also used as a cooling material in the molten-salt reactors (MSRs) because it operates at higher temperature which results into higher efficiency in terms of generating electricity.</p>"
                   + "<p>.</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent3);
  }
}

Button3.addEventListener("click", openPopupWindow3);