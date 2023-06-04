function BurgerMenu(x) {
    x.classList.toggle("change");
  }

function openmenu() {
	if (document.getElementById('menuitems').style.display !== 'none') {
		document.getElementById('menuitems').style.display = 'none';
        document.getElementById('intro').style.display = 'flex';
        document.getElementById('introcenter').style.display = 'flex';
	} else {
		document.getElementById('menuitems').style.display = 'flex';
        document.getElementById('intro').style.display = 'none';
        document.getElementById('introcenter').style.display = 'none';
	}
}