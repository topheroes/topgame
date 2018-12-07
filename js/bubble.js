var BubbleProblem = window.BubbleProblem || {};


BubbleProblem.Bubble = (function($){

	var Bubble = function(rowNum, colNum, type, sprite){
		var that = this;
		this.getSprite = function(){return sprite;};
		this.getRow = function(){return rowNum;};
		this.getCol = function(){return colNum;};
		this.getType = function(){return type;};

	};

	Bubble.create = function(rowNum,colNum,type){

		if(type == undefined){
			type = Math.floor(Math.random() * 4);

		}

		var sprite = $("<div>");
		sprite.addClass("bubble");
		sprite.addClass("bubble_" + type);
		var bubble = new Bubble(rowNum, colNum, type, sprite);
		return bubble;



	};


	return Bubble;


})(jQuery);