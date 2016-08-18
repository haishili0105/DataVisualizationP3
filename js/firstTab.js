var planetsData = [];

d3.csv('data/SolarSystem.csv', function (error,data) {

	for(var i=0;i<data.length;i++){
		planetsData.push(data[i]);
	}

	createTable(planetsData);
});

function createTable(data){

	var table = d3.select("#yearcount").append("table").attr("id","yearTable").attr("height","10%");
	var thead = table.append("thead");
	var tbody = table.append("tbody");

	var onlyPlanetsData = planetsData.slice(1,9);


// Append the planet headers
thead.append("tr")
.selectAll("th")
.data(onlyPlanetsData)
.enter()
.append("th")
.text(function(d) { 
	return d.Name; })
.on("click", showBlinking);

// Append the year data = initially 0
thead.append("tr")
.selectAll("td")
.data(onlyPlanetsData)
.enter()
.append("td")
.attr("id", function(d) { return d.Name; })
.text(function(d) { return 0; })
.on("click", showBlinking);

}

function showBlinking(event){

	for(var i=0; i< 10; i++){
		$('#c_'+event.Name).fadeOut(100);
		$('#c_'+event.Name).fadeIn(100);

		i++;
	}

}

//Update the years in the table
function updateTable(){

	var planetYears = {
		"Mercury" : 0.24,
		"Venus" : 0.62,
		"Earth" : 1,
		"Mars" : 1.88,
		"Jupiter" : 11.86,
		"Saturn" : 29.46,
		"Uranus" : 84.01,
		"Neptune" : 164.8
	}

	var rangeValue = $('#yearRange')[0].value;
	$('#output-range').text(commaSeparateNumber(Math.floor(rangeValue)));

	var pKeys = Object.keys(planetYears);

	$('#Earth').fadeOut(500);
	$('#Earth').fadeIn(500);

	for(var i=0; i<pKeys.length; i++){
		var oldVal = $('#'+pKeys[i]).text();
		var newVal = commaSeparateNumber(Math.floor( (1/planetYears[pKeys[i]]) * rangeValue))

		$('#'+pKeys[i]).text(newVal);

		if(oldVal != newVal){
			$('#'+pKeys[i]).fadeOut(300);
			$('#'+pKeys[i]).fadeIn(300);
		}
	}
}

//http://stackoverflow.com/questions/16227858/jquery-increment-number-using-animate-with-comma
function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
	return val;
}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tabcontent.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
}