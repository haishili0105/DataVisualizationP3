var prevI = 1;
var index = 2; // Show Earth by default
var nextI = 3;
var planetsData = [];
var planetsInfo;

$( document ).ready(function() {
        d3.csv('data/SolarSystem.csv', function (error,data) {

                var planets = data.map(function(planet){
                        return {
                                Name: planet["Name"],
                                Type: planet["Type"],
                                Composition: planet["AtmosphericComposition"],
                                Gravity: planet["GravityAtEquator"],
                                OrbitalV: planet["MeanOrbitalVelocity(km/sec)"],
                                Rotation: planet["RotationPeriod(days)"],
                                Mass: planet["Mass"],
                                OrbitalE : planet["OrbitalEccentricity"],
                                Diameter: planet["Diameter(km)"]
                                
                        }
                })
                planetsInfo = planets.slice(1,9);
        });
});

function prevPlanet(){

        $('#prev-img').fadeOut("50");
        $('#prev-img').fadeIn("50");

        $('#curr-img').fadeOut("1500");
        $('#curr-img').fadeIn("1500");
        
        $('#next-img').fadeOut("3000");
        $('#next-img').fadeIn("3000");
        
        if(index == 1 ){
                prevI = 7;
                index = 0;
                nextI = 1;
        }else if(index == 0 ){
                prevI = 6
                index = 7;
                nextI = 0;
        }else{
                nextI = index;
                index = index - 1;
                prevI = index - 1;

        }
        document.getElementById("planet-name").innerText = planetsInfo[index].Name;
        document.getElementById("typeOfPlanet").innerText = planetsInfo[index].Type;
        document.getElementById("prev-img").src = "images/planets/"+planetsInfo[prevI].Name.toLowerCase()+".png";
        document.getElementById("curr-img").src = "images/planets/"+planetsInfo[index].Name.toLowerCase()+".png";
        document.getElementById("next-img").src = "images/planets/"+planetsInfo[nextI].Name.toLowerCase()+".png";
        document.getElementById("rotation-info").innerText = planetsInfo[index].Rotation+" Days";
        document.getElementById("atmospheric-info").innerText = planetsInfo[index].Composition;
        document.getElementById("velocity-info").innerText = planetsInfo[index].OrbitalV+" km/sec";
        document.getElementById("mass-info").innerText = planetsInfo[index].Mass+" Earth";
        document.getElementById("gravity-info").innerText = planetsInfo[index].Gravity * 100 +" kg";
        document.getElementById("diameter").innerText = planetsInfo[index].Diameter+" km";
        document.getElementById("orbitalE-info").innerText = planetsInfo[index].OrbitalE+" km";
}

function nextPlanet(){

     /*  $('#prev-img').fadeOut("500");
       $('#prev-img').fadeIn("500");

       $('#curr-img').fadeOut("500");
       $('#curr-img').fadeIn("500");
       */
       $('#planets').fadeOut("500");
       $('#planets').fadeIn("500");



       if(index == 6 ){
        prevI = 6;
        index = 7;
        nextI = 0;
}else if(index == 7 ){
        prevI = 7;
        index = 0;
        nextI = 1;
}
else{
        prevI = index;
        index = index + 1;
        nextI = index + 1;
}

document.getElementById("planet-name").innerText = planetsInfo[index].Name;
document.getElementById("typeOfPlanet").innerText = planetsInfo[index].Type;
document.getElementById("prev-img").src = "images/planets/"+planetsInfo[prevI].Name.toLowerCase()+".png";
document.getElementById("curr-img").src = "images/planets/"+planetsInfo[index].Name.toLowerCase()+".png";
document.getElementById("next-img").src = "images/planets/"+planetsInfo[nextI].Name.toLowerCase()+".png";
        //document.getElementById("temperature-info").innerText = planetsInfo[index].Temperature+" C°";
        document.getElementById("rotation-info").innerText = planetsInfo[index].Rotation+" Days";
        document.getElementById("atmospheric-info").innerText = planetsInfo[index].Composition;
        document.getElementById("velocity-info").innerText = planetsInfo[index].OrbitalV+" km/sec";
        document.getElementById("mass-info").innerText = planetsInfo[index].Mass+" Earth";
        document.getElementById("gravity-info").innerText = planetsInfo[index].Gravity* 100+" kg";
        document.getElementById("diameter").innerText = planetsInfo[index].Diameter+" km";
        document.getElementById("orbitalE-info").innerText = planetsInfo[index].OrbitalE+" km";
}