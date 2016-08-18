function openStatsTab(evt, tabName) {
	var i, statstabcontent, statstablinks;
	statstabcontent = document.getElementsByClassName("statstabcontent");
	for (i = 0; i < statstabcontent.length; i++) {
		statstabcontent[i].style.display = "none";
	}
	statstablinks = document.getElementsByClassName("statstablinks");
	for (i = 0; i < statstabcontent.length; i++) {
		statstablinks[i].className = statstablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
}

function showTempFacts(event){
	if (event.checked) {
		$(".detail_1").show("3");
	} else {
		$(".detail_1").hide("3");
	}
}

function showDayFacts(event){
	if (event.checked) {
		$(".detail_2").show("3");
	} else {
		$(".detail_2").hide("3");
	}
}

function showDistFacts(event){
	if (event.checked) {
		$(".detail_3").show("3");
	} else {
		$(".detail_3").hide("3");
	}
}