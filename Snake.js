class Snake extends DrawableObject {
	constructor (point) {
		super();
		this.DIRECTION = {
			 LEFT :0,
			 UP   :1,
			 RIGHT:2,
			 DOWN :3
		};
		
		this.color = "#3f9";

		this.snakePoint = [point];

		this.draw();
	}

	getSnake () {
		return this.snakePoint;
	}

	getHeadPosition () {
		return this.snakePoint[0];
	}

	getNextPoint (dir) {
		let nextPoint = Object.assign({}, this.getHeadPosition());

		switch (dir) {
			case this.DIRECTION.LEFT:  nextPoint.x--; break;
			case this.DIRECTION.UP:    nextPoint.y--; break;
			case this.DIRECTION.RIGHT: nextPoint.x++; break;
			case this.DIRECTION.DOWN:  nextPoint.y++; break;
		}

		return nextPoint;
	}

	move (x, y) {
		let tail = this.snakePoint.pop();
		this.grow (x, y);
		return tail;
	}

	grow (x, y) {
		this.snakePoint.unshift ({x:x, y:y});
		this.draw ();
	}

	draw () {
		let snakeLength = this.getSnake().length;
		for (let i = 0; i < snakeLength; i++) {
			super.fillCell(this.getSnake()[i]);
		}
	}
}