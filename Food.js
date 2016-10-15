class Food extends DrawableObject {
	constructor (point) {
		super ();

		this.place(point);
	}

	place (point) {
		this.point = point;
		super.fillCell(this.point);
	}

	getPoint () {
		return this.point;
	}
}