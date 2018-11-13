var names = ["Tanya", "Glib", "Olga"];
var whoPaid = document.querySelector("#nameWhoPay");
var howMuch = 300;
var forWho = ["Tanya", "Glib", "Olga"];


document.querySelector("button").addEventListener("click", function() {

    // add input value in arr element
    var namesData = document.querySelector("#namesData").value;
    names.push(namesData);

    //create li and add text (from input )
    var ol = document.getElementById("data");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(namesData));
    ol.appendChild(li);

     // creat select->options with names from arr
    var select = document.getElementById("nameWhoPay");
    var option = document.createElement("option");
    select.appendChild(option);
    option.appendChild(document.createTextNode(namesData));
    names[i] == whoPaid.selectedIndex;
});


	// whoPaid.addEventListener("click", function() {
	
	// });




for (var i = 0; i < forWho.length; i++) {
    var result = howMuch / forWho.length;
    if (whoPaid == forWho[i]) {
        result == 0;
    } else { console.log(whoPaid, howMuch, forWho[i], result); }
};
