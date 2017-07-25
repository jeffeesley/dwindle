$(document).ready(function(){
	var newGraph = $("#graph");


	function initializePoints(){
		newGraph.empty();
		var yAxis = getWeights();
		var xAxis = getDates();
		var data = [];
    for(var i = 0; i < xArray.length; i++){
     data[i] = ["{x: new Date(" + xAxis[i] + "), y: " + yAxis[i] + "}"];
    }
	}


	function getWeights(){
		$.get("/api/graph", function(data){
		var weightArray = [];
			for(var i = 0; i < data.length; i++){
				weightArray.push(data.currentWeight[i]);
			}
		return weightArray;
		});
	}
	function getDates(){
		$.get("/api/graph", function(data){
			var dateArray = [];
			for(var i = 0; i < data.length; i++){
				dateArray.push(data.createdAt[i]);
			}
			return dateArray;
		});
	};