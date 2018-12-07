

var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.Game = (function($){

	var Game = function(){

		var curBubble;
		var board;

		var numBubbles;
		var MAX_BUBBLES = 40;


		this.init = function(){

			$("#divbutton").bind("click", startGame );

		};
		
		var startGame = function(){

			$("#divbutton").unbind("click", startGame );
			
			BubbleProblem.ui.hideDialog();


			numBubbles = MAX_BUBBLES;

			curBubble = getNextBubble();

			board = new BubbleProblem.Board();
			BubbleProblem.ui.drawBoard(board);


			$("#divmain").bind("click", clickGameScreen);			


		};

		var clickGameScreen = function(event){

			var aud = new Audio("laser.mp3");
			aud.play();

			var angle = BubbleProblem.ui.getAngle(event, curBubble);
			var distance = 1000;
			var duration = 500;

			var collision = BubbleProblem.CollisionDetector.findIntersection(curBubble, board, angle);
			if( collision){
				var coords = collision.coords;
				duration = Math.round(duration * collision.distToCollision/distance);
			}
			else
			{

				var distX = Math.sin(angle) * distance;
				var distY = Math.cos(angle) * distance;

				var bubbleCoords = BubbleProblem.ui.getBubbleCoords(curBubble);
				var coords = { x: bubbleCoords.x + distX, y: bubbleCoords.y - distY  };
			}
			BubbleProblem.ui.shootBubble(curBubble, coords, duration );
			curBubble = getNextBubble();
			


		};

		var getNextBubble  = function(){

			var bubble = BubbleProblem.Bubble.create();
			bubble.getSprite().addClass("bubble_cur");
			$("#gamefield").append(bubble.getSprite());

			BubbleProblem.ui.drawRemainingBubble(numBubbles);
			numBubbles--;


			return bubble;

		}

	}


	return Game;



})(jQuery);


var Game = new BubbleProblem.Game();
Game.init();