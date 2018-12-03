

var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.Game = (function($){

	var Game = function(){

		var curBubble;

		this.init = function(){

			$("#divbutton").bind("click", startGame );

		};
		
		var startGame = function(){

			$("#divbutton").unbind("click", startGame );

			console.log("here");
			BubbleProblem.ui.hideDialog();
			curBubble = getNextBubble();
			//$("#dialog").hide("slow");			

		};

		var getNextBubble  = function(){

			var bubble = BubbleProblem.Bubble.create();
			bubble.getSprite.addClass("bubble_cur");
			$("#gamefield").append(bubble.getSprite());
			return bubble;

		}

	}


	return Game;



})(jQuery);


var Game = new BubbleProblem.Game();
Game.init();