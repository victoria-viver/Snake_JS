class Utils {
	static getCtx () {return this.ctx;}
	static setCtx (ctx) {this.ctx = ctx;}

	static getCellSize () {return this.cellSize;}
	static setCellSize (size) {this.cellSize = size;}

	static getColumns () {return this.columns;}
	static setColumns (col) {this.columns = col;}

	static getRows () {return this.rows;}
	static setRows (rows) {this.rows = rows;}

	static getRandFreeCell (notFreeCells) {
		let randX = Math.floor(Math.random()*this.getColumns());
		let randY = Math.floor(Math.random()*this.getRows());

		if (!this.isCellFree ({x:randX, y:randY}, notFreeCells)) {
			return this.getRandFreeCell(notFreeCells);
		}

		return ({x:randX, y:randY});
	}

	static getRandSnakeStartPoint () {
		let randX = Math.floor(Math.random()*this.getColumns());

		return ({x:randX, y:(this.getRows()-1)});
	}

	static isCellFree (point, notFreeCells) {
		return !notFreeCells.some(cell => cell.x === point.x && cell.y === point.y);
	}

	static isValidPoint (point, notFreeCells) {
		if (point.x < 0 || point.x >= this.getColumns() ||
			point.y < 0 || point.y >= this.getRows() ||
			!this.isCellFree(point, notFreeCells)) {
				return false;
		}

		return true;
	}
}