

var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.Game = (function($){

	var Game = function(){

		var curBubble;

		this.init = function(){

			$("#divbutton").bind("click", startGame );

		};
		
		var startGame = function(){

			$("#divbutton").unbind("click", startGame );
			
			BubbleProblem.ui.hideDialog();
			curBubble = getNextBubble();

			$("#divmain").bind("click", clickGameScreen);			


		};

		var clickGameScreen = function(event){

			var aud = new Audio("laser.mp3");
			aud.play();

			var angle = BubbleProblem.ui.getAngle(event, curBubble);
			var distance = 1000;
			var duration = 500;
			var distX = Math.sin(angle) * distance;
			var distY = Math.cos(angle) * distance;

			var bubbleCoords = BubbleProblem.ui.getBubbleCoords(curBubble);
			var coords = { x: bubbleCoords.x + distX, y: bubbleCoords.y - distY  };
			BubbleProblem.ui.shootBubble(curBubble, coords, duration );


		};

		var getNextBubble  = function(){

			var bubble = BubbleProblem.Bubble.create();
			bubble.getSprite().addClass("bubble_cur");
			$("#gamefield").append(bubble.getSprite());
			return bubble;

		}

	}


	return Game;



})(jQuery);


var Game = new BubbleProblem.Game();
Game.init();