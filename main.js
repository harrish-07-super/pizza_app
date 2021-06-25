menu_list_array = ["Veg Margherita Pizza", "Chiecken bbq pizza", "Cheese and gold pizza", "Panner tanndori pizza", "chieken tanndori pizza"];

function getmenu() {
    var menu;
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        menu = menu + '<li>' + menu_list_array[i] + '</li>'
    }
    menu = menu + "<ol>"
    document.getElementById("display_menu").innerHTML = menu;
}
function add_item() {
    var menu;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        menu = menu + '<li>' + menu_list_array[i] + '</li>'
    }
    menu = menu + "<ol>"
    document.getElementById("display_menu").innerHTML = menu;
}
