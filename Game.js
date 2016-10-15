window.onload = function() {
	let game = new Game();
}

class Game {
	constructor () {
		this.gameSize = { width: 600, height: 600 };
		Utils.setCellSize (20);

		Utils.setColumns(Math.floor (this.gameSize.width/Utils.getCellSize()));
		Utils.setRows(Math.floor (this.gameSize.height/Utils.getCellSize()));

		this.createCanvas();
		this.createScoreText();
		this.start();
		this.onEnterFrame();

		document.addEventListener ('OnBtnChanged', this.resetFrames.bind(this), false);
	}

	createCanvas () {
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.gameSize.width;
		this.canvas.height = this.gameSize.height;
		document.getElementById("game").appendChild(this.canvas);

		this.ctx = this.canvas.getContext("2d");

		Utils.setCtx (this.ctx);
	}

	createScoreText () {
		this.scoreContainer = document.createElement("div");
		this.scoreContainer.id = "scoreContainer";
		this.scoreContainer.width = this.gameSize.width;
		this.scoreContainer.height = this.gameSize.height;
		document.getElementById("game").appendChild (this.scoreContainer);

		this.scoreText = document.createElement("span");
		document.getElementById('scoreContainer').appendChild (this.scoreText);
	}

	start () {
		this.ui = new UI();

		this.board = new Board (Utils.getColumns(), Utils.getRows());
		this.snake = new Snake (Utils.getRandSnakeStartPoint());
		this.food = new Food (Utils.getRandFreeCell(this.snake.getSnake()));
		
		this.frames = 0;
		this.framesPerStep = 10;
		this.score = 0;
		this.scoreCoef = 3;

		this.updateScore ();
	}

	restart () {
		this.ui = null;
		this.board = null;
		this.snake = null;
		this.food = null;

		this.start();
	}

	onEnterFrame () {
		this.frames++;
		if (this.frames%this.framesPerStep === 0) { this.update(); }
		requestAnimationFrame(this.onEnterFrame.bind(this));
	}

	update () {
		let nextPoint = this.snake.getNextPoint(this.ui.getDir());

		if (!Utils.isValidPoint(nextPoint, this.snake.getSnake())) {
			return this.restart();
		}
		else if (nextPoint.x === this.food.getPoint().x &&
			nextPoint.y === this.food.getPoint().y) {
			this.updateScore();
			this.updateFramesPerStep();
			this.snake.grow (nextPoint.x, nextPoint.y);
			this.food.place (Utils.getRandFreeCell(this.snake.getSnake()));
		} else {
			this.board.fillCell(this.snake.move(nextPoint.x, nextPoint.y));
		}

		this.ui.isEnable = true;
	}

	resetFrames (e) {
		this.frames = 0;
	}

	updateScore () {
		this.score++;
		this.scoreText.innerText = this.score;
	}

	updateFramesPerStep () {
		if (this.score%this.scoreCoef === 0 && this.framesPerStep > 1) {this.framesPerStep--};
	}
}