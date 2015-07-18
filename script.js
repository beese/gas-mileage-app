if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    $(document).ready(function(){
		$("#submit").click(function(){
			var miles = $("#miles").val();
			var gallons = $("#gallons").val();
			var cost = $("#cost").val();
			alert("total miles traveled: " + miles + " gallons filled: " + gallons + " gas cost: " + cost);
			window.location.href="#stats";
		})
	});
} else {
    // Sorry! No Web Storage support..
}

