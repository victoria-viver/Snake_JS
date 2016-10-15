class Board extends DrawableObject {
	constructor (columns, rows) {
		super ();
		this.color = "#333";

		this.fill(columns, rows);
	}

	fill (columns, rows) {
		for (let x = 0; x < columns; x++) {
			for (let y = 0; y < rows; y++) {
				super.fillCell({x, y});
			}
		}
	}
}