if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.

    if(localStorage.getItem("total") === null) {
    	reset();
    }

	var reset = function() {
		//reset values to zero

		var zero = "0";

		localStorage.setItem("total", zero);
		localStorage.setItem("miles", zero);
		localStorage.setItem("gallons", zero);
		localStorage.setItem("cost", zero);

		refresh();

    }

	var refresh = function() {
		

		if(Number(localStorage.getItem("total")) === 0) {

			//showing the error message
			document.getElementById("info").style.display = "unset";
			document.getElementById("info").style.visibility = "visible";

			//hiding the information
			document.getElementById("averages").style.display = "none";
			document.getElementById("averages").style.visibility = "hidden";
			

			document.getElementById("totals").style.display = "none";
			document.getElementById("totals").style.visibility = "hidden";

			document.getElementById("resetbutton").style.display = "none";
			document.getElementById("resetbutton").style.visibility = "hidden";

			
		}

		else {

			//setting values
			document.getElementById("totalNum").innerHTML=localStorage.getItem("total");
			document.getElementById("totalMiles").innerHTML=localStorage.getItem("miles");
			document.getElementById("totalGallons").innerHTML=localStorage.getItem("gallons");
			document.getElementById("totalCost").innerHTML=localStorage.getItem("cost");
			
			//hiding error message
			document.getElementById("info").style.display = "none";
			document.getElementById("info").style.visibility = "hidden";
			
			//showing the total
			document.getElementById("totals").style.display = "unset";
			document.getElementById("totals").style.visibility = "visible";

			document.getElementById("resetbutton").style.display = "unset";
			document.getElementById("resetbutton").style.visibility = "visible";

			if(Number(localStorage.getItem("total")) > 1) {
				calculate();
				document.getElementById("averages").style.display = "unset";
				document.getElementById("averages").style.visibility = "visible";
				
			}
		}
    };

    var calculate = function() {
    	//calculate average miles driven

    	var avgM = Number(localStorage.getItem("miles")) / Number(localStorage.getItem("total"));
    	document.getElementById("avgMiles").innerHTML = parseFloat(avgM).toFixed(2);

    	var avgC = Number(localStorage.getItem("cost")) / Number(localStorage.getItem("gallons"));
    	document.getElementById("avgCost").innerHTML = parseFloat(avgC).toFixed(2);

    	// var avgG = Number(localStorage.getItem("gallons")) / Number(localStorage.getItem("total"));
    	// document.getElementById("avgGallons").innerHTML = parseFloat(avgG).toFixed(2);

    	var avgMPG = Number(localStorage.getItem("miles")) / Number(localStorage.getItem("gallons"));
    	document.getElementById("mpg").innerHTML = parseFloat(avgMPG).toFixed(2);


    };

    $(document).ready(function(){

    	refresh();
    	
		$("#submit").click(function(){
			var miles = $("#miles").val();
			var gallons = $("#gallons").val();
			var cost = $("#cost").val();

			

			var tMiles = Number(localStorage.getItem("miles"));
			tMiles = tMiles + Number(miles);
			localStorage.setItem("miles", tMiles);

			var temp = localStorage.getItem("total");
			temp = Number(temp) + 1;
			localStorage.setItem("total", temp);

			var tGallons = Number(localStorage.getItem("gallons"));
			tGallons = tGallons + Number(gallons);
			localStorage.setItem("gallons", tGallons);

			var tCost = Number(localStorage.getItem("cost"));
			tCost = tCost + Number(cost);
			localStorage.setItem("cost", tCost);
			
			refresh();
			
			document.getElementById("miles").value = "";
			document.getElementById("gallons").value = "";
			document.getElementById("cost").value = "";
			
			window.location.href="#stats";
		})
	});

	// Store
	
	// Retrieve
	//document.getElementById("stats").getElementById("content") = "hey!";
} else {
    // Sorry! No Web Storage support..
    alert("I'm sorry your browser doesn't supposrt Web Storage");
}

