var names = [];
var whoPaid = names[0];
var howMuch = 300;
var forWho = ["Tanya", "Glib", "Olga"];


document.querySelector("#addName").addEventListener("click", function() {
    // add input value in arr element
    var namesData = document.querySelector("#namesData").value;
    names.push(namesData);
    
    //create li and add text (from input )
    var olName = document.getElementById("data");
    /*
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(namesData));
    olName.appendChild(li);
    */
    createElement("li", olName, namesData);
});

document.querySelector("#goCalcul").addEventListener("click", function() {
    // On click, find select. 
    var select = document.getElementById("nameWhoPay");
    var ulDebtors = document.querySelector("#debtors");
    // then loop through names Arr 
    for (var i = 0; i < names.length; i++) {
        // then call f to put value of current element arr 
        createElement("option", select, names[i]);
        createElement("li", ulDebtors, names[i]);
    }
});
/*
//f create option and appends it to select each time when you call this f
function createOption(name, select) {
    var option = document.createElement("option");
    select.appendChild(option);
    option.appendChild(document.createTextNode(name));
}

//f create li and appends it to ul each time when you call this f
function createLi(name, liContainer) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    liContainer.appendChild(li);
}
*/

/*
к нам приходит название тега который хотим создать,
к нам приходит обьект ХТМЛ в который хотим запихнуть
к нам приходит масив нейм

1. создаём елемент согласно текнейм который пришел
2. аппендим созданы й елемент в нутрь пришедшего из елемента контейнера
3. если есть нейм мы припихываеим к нему нейм
*/
function createElement(elementName, container, data) {
    var element = document.createElement(elementName);
    container.appendChild(element);
    element.appendChild(document.createTextNode(data));
}




for (var i = 0; i < forWho.length; i++) {
    var result = howMuch / forWho.length;
    if (whoPaid == forWho[i]) {
        result == 0;
    } else { console.log(whoPaid, howMuch, forWho[i], result); }
};