

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

			var angle = BubbleProblem.ui.getAngle(event, curBubble);
			


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