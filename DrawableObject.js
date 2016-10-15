class DrawableObject {
	constructor () {
		this.color = "#fff";
		this.borderSolor = "#444";
		this.borderSize = 1;
	}

	fillCell (point) {
		Utils.getCtx().clearRect(point.x*Utils.getCellSize(), point.y*Utils.getCellSize(), Utils.getCellSize(), Utils.getCellSize());

		Utils.getCtx().fillStyle = this.color;
		Utils.getCtx().fillRect(point.x*Utils.getCellSize(), point.y*Utils.getCellSize(), Utils.getCellSize(), Utils.getCellSize());

		Utils.getCtx().strokeStyle = this.borderSolor;
	    Utils.getCtx().lineWidth   = this.borderSize;
	    Utils.getCtx().strokeRect(point.x*Utils.getCellSize(), point.y*Utils.getCellSize(), Utils.getCellSize(), Utils.getCellSize());
	}
}