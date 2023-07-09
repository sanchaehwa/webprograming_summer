function load(select) {
    var index = select.selectedIndex;
    var site = select.options[index].value;
    window.open(site, "myWin", "width = 800, height=300 left=10,top=10")
}