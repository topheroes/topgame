var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.ui = (function($){

	var ui = {
		hideDialog : function(){

			$("#dialog").hide("slow");			
		},

		getBubbleCoords: function(bubble){

			var coords = bubble.getSprite().position();
			return {x: coords.left, y: coords.top };

		},


		getClickCoords: function(event){

			return {x: event.pageX, y: event.pageY};

		},


		getAngle: function(event, curBubble){

			var clickCoords = ui.getClickCoords(event);
			var bubbleCoords =  ui.getBubbleCoords(curBubble);

			console.log("bubbleCoords.x", bubbleCoords.x, "bubbleCoords.y", bubbleCoords.y,
					"clickCoords.x", clickCoords.x, "clickCoords.y", clickCoords.y);
				

		},





	}


	return ui;

})(jQuery)
