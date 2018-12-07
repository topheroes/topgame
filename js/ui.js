var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.ui = (function($){




	var ui = {


		BUBBLE_DIMS: 44,
		ROW_HEIGHT: 40,

		hideDialog : function(){

			$("#dialog").hide("slow");			
		},

		getBubbleCoords: function(bubble){

			var coords = bubble.getSprite().position();
			return {x: coords.left + 22  , y: coords.top + 22 };

		},


		getClickCoords: function(event){

			return {x: event.pageX, y: event.pageY};

		},


		getAngle: function(event, curBubble){

			var clickCoords = ui.getClickCoords(event);
			var bubbleCoords =  ui.getBubbleCoords(curBubble);
			var gameFieldOffset = $("#gamefield").offset();



			var angle = Math.atan( (clickCoords.x - bubbleCoords.x - gameFieldOffset.left ) /  
				( bubbleCoords.y - clickCoords.y + gameFieldOffset.top )       );
			

			if( clickCoords.y > (bubbleCoords.y+gameFieldOffset.top)  ){
				angle += Math.PI;
			}


			return angle;
				

		},

		shootBubble: function(curBubble, coords, duration){


			curBubble.getSprite().animate({ top: coords.y, left: coords.x  }, 
				{duration: duration, easing: "linear"} );

		},


		drawBoard: function(board){
			var rows = board.getRows();
			var gamefield = $("#gamefield");

			for(var i = 0; i < rows.length; i++ ){


				var row = rows[i];


				for(var j = 0; j < row.length; j++ ){

					var bubble = row[j];
					if(bubble){

						var sprite = bubble.getSprite();
						gamefield.append(sprite);
						var left = j*ui.BUBBLE_DIMS/2;
						var top = i*ui.ROW_HEIGHT;
						sprite.css({top: top, left: left});



					}

				}

			}



		},


	}


	return ui;

})(jQuery)
