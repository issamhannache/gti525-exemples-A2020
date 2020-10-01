// Solution à l'activité en classe

var popup = function(name) {
	// faire un popup qui affiche "name" + event.target de l'événement

	return function(event) {
		var str1 = name;
		var str2 = event.target;
		alert(str1 + str2);
	};
};

window.onload = function() {
	alert("Le document a fini de charger!");
	var setupBtn = document.getElementById("reset");
	var runBtn = document.getElementById("increment");
	var doneBtn = document.getElementById("done");
	setupBtn.addEventListener( "click", popup("setup"), false);
	runBtn.addEventListener( "click", popup("increment"), false);
	doneBtn.addEventListener( "click", popup("done"), false);
}
