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
		document.getElementById("totalNum").innerHTML=localStorage.getItem("total");
		document.getElementById("totalMiles").innerHTML=localStorage.getItem("miles");
		document.getElementById("totalGallons").innerHTML=localStorage.getItem("gallons");
		document.getElementById("totalCost").innerHTML=localStorage.getItem("cost");
    };

    var calculate = function() {

    };

    $(document).ready(function(){

    	refresh();
    	
		$("#submit").click(function(){
			var miles = $("#miles").val();
			var gallons = $("#gallons").val();
			var cost = $("#cost").val();

			window.location.href="#stats";

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


			
		})
	});

	// Store
	
	// Retrieve
	//document.getElementById("stats").getElementById("content") = "hey!";
} else {
    // Sorry! No Web Storage support..
    alert("I'm sorry your browser doesn't supposrt Web Storage");
}

