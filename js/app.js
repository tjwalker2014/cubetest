$(document).ready(function() {

	var cube = $(".cube");
	var singleSpinValue = 90;
	var xFacesArray = cube.find(".xface");
	xFacesArray = xFacesArray.toArray();
	// xFacesArray.reverse();

	TweenMax.set(cube, {rotationY: 0, onComplete: initFacing});

	function initFacing() {
		cube.find(".front").addClass("facing")
	}

	$("button").click(function(event) {
		var currentFacing = cube.find(".facing")
		var desiredFace = cube.find("." + event.target.id);
	
		var currentFacePosition = $(xFacesArray).index(currentFacing);
		var desiredFacePosition = $(xFacesArray).index(desiredFace);

		var numberOfTurns = Math.abs(currentFacePosition-desiredFacePosition);
		var degreesToTurn = (numberOfTurns*singleSpinValue);
		var degreesToTurnString = "+=" + degreesToTurn;

		TweenMax.to($(".cube"), 0.5, {rotationY:degreesToTurnString, onComplete:changeFacing(desiredFace)})
	});

	function changeFacing(desiredFace) {
		console.log(desiredFace)
		cube.find(".facing").removeClass("facing");
		cube.find(desiredFace).addClass("facing");
	}

})