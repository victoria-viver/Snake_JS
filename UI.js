class UI {
	constructor () {
		this.KEYS = {
			 LEFT :37,
			 UP   :38,
			 RIGHT:39,
			 DOWN :40
		};
		
		this.isEnable = true;

		this.lastPressedBtn = this.KEYS.UP;

		window.onkeydown = e => {
			console.log (e);
			if (Object.keys(this.KEYS).some(key => this.KEYS[key] === e.keyCode)
				&& this.isEnable
				&& this.lastPressedBtn !== e.keyCode) {
					if (   this.lastPressedBtn === this.KEYS.LEFT  && e.keyCode !== this.KEYS.RIGHT
						|| this.lastPressedBtn === this.KEYS.RIGHT && e.keyCode !== this.KEYS.LEFT
						|| this.lastPressedBtn === this.KEYS.UP    && e.keyCode !== this.KEYS.DOWN
						|| this.lastPressedBtn === this.KEYS.DOWN  && e.keyCode !== this.KEYS.UP) {
						
						this.isEnable = false;

						this.lastPressedBtn = e.keyCode;

						document.dispatchEvent (new CustomEvent ('OnBtnChanged'));
					}
			}
		};
	}

	get lastPressedBtn () {return this._lastPressedBtn;}
	set lastPressedBtn (newBtn) {this._lastPressedBtn = newBtn;}

	get isEnable () {return this._isEnable;}
	set isEnable (bEnable) {this._isEnable = bEnable;}

	getDir () {return this.lastPressedBtn - this.KEYS.LEFT;}
}