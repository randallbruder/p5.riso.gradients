const TO_RIGHT = 1,
	TO_LEFT = 2,
	TO_BOTTOM = 3,
	TO_TOP = 4;

Riso.prototype.gradientRect = function(x, y, width, height, fillStart, fillEnd, direction) {
	if (direction === TO_TOP || direction === TO_BOTTOM) {
		for (let i = y; i <= y + height; i++) {
			let fill;
			if (direction === TO_BOTTOM) {
				fill = map(i, y, y + height, fillStart, fillEnd);
			} else if (direction === TO_TOP) {
				fill = map(i, y, y + height, fillEnd, fillStart);
			}
			this.stroke(fill);
			this.line(x, i, x + width, i);
		}
	} else if (direction === TO_LEFT || direction === TO_RIGHT) {
		for (let i = x; i <= x + width; i++) {
			let fill;
			if (direction === TO_RIGHT) {
				fill = map(i, x, x + width, fillStart, fillEnd);
			} else if (direction === TO_LEFT) {
				fill = map(i, x, x + width, fillEnd, fillStart);
			}
			this.stroke(fill);
			this.line(i, y, i, y + height);
		}
	} else {
		console.warn('p5.riso.gradients: invalid direction value ', direction);
	}
};

Riso.prototype.gradientSquare = function(x, y, size, fillStart, fillEnd, direction) {
	this.gradientRect(x, y, size, size, fillStart, fillEnd, direction);
}

Riso.prototype.gradientEllipse = function(centerX, centerY, width, height, fillStart, fillEnd, direction) {
	let radiusX = width / 2;
	let radiusY = height / 2;

	if (direction === TO_LEFT || direction === TO_RIGHT) {
		for (let x = centerX - radiusX; x <= centerX + radiusX; x++) {
			let dx = (x - centerX) / radiusX;
			let dy = sqrt(1 - dx * dx);
			let yTop = centerY - dy * radiusY;
			let yBot = centerY + dy * radiusY;

			let fill;
			if (direction === TO_RIGHT) {
				fill = map(x, centerX - radiusX, centerX + radiusX, fillStart, fillEnd);
			} else if (direction === TO_LEFT) {
				fill = map(x, centerX - radiusX, centerX + radiusX, fillEnd, fillStart);
			}
			this.stroke(fill);
			this.line(x, yTop, x, yBot);
		}
	} else if (direction === TO_TOP || direction === TO_BOTTOM) {
		for (let y = centerY - radiusY; y <= centerY + radiusY; y++) {
			let dy = (y - centerY) / radiusY;
			let dx = sqrt(1 - dy * dy);
			let xLeft = centerX - dx * radiusX;
			let xRight = centerX + dx * radiusX;

			let fill;
			if (direction === TO_BOTTOM) {
				fill = map(y, centerY - radiusY, centerY + radiusY, fillStart, fillEnd);
			} else if (direction === TO_TOP) {
				fill = map(y, centerY - radiusY, centerY + radiusY, fillEnd, fillStart);
			}
			this.stroke(fill);
			this.line(xLeft, y, xRight, y);
		}
	} else {
		console.warn('p5.riso.gradients: invalid direction value ', direction);
	}
};

Riso.prototype.gradientCircle = function(centerX, centerY, diameter, fillStart, fillEnd, direction) {
	this.gradientEllipse(centerX, centerY, diameter, diameter, fillStart, fillEnd, direction);
}

Riso.prototype.gradientTriangle = function(x1, y1, x2, y2, x3, y3, fillStart, fillEnd, direction) {
	const edges = [
		[x1, y1, x2, y2],
		[x2, y2, x3, y3],
		[x3, y3, x1, y1]
	];

	if (direction === TO_TOP || direction === TO_BOTTOM) {
		let minY = min(y1, y2, y3);
		let maxY = max(y1, y2, y3);

		for (let y = minY; y <= maxY; y++) {
			let hits = [];
			for (let [ax, ay, bx, by] of edges) {
				let x = scanIntersectY(y, ax, ay, bx, by);
				if (x !== null) hits.push(x);
			}
			if (hits.length >= 2) {
				let fill;
				if (direction === TO_BOTTOM) {
					fill = map(y, minY, maxY, fillStart, fillEnd);
				} else if (direction === TO_TOP) {
					fill = map(y, minY, maxY, fillEnd, fillStart);
				}
				this.stroke(fill);
				this.line(min(...hits), y, max(...hits), y);
			}
		}

	} else if (direction === TO_LEFT || direction === TO_RIGHT) {
		let minX = min(x1, x2, x3);
		let maxX = max(x1, x2, x3);

		for (let x = minX; x <= maxX; x++) {
			let hits = [];
			for (let [ax, ay, bx, by] of edges) {
				let y = scanIntersectX(x, ax, ay, bx, by);
				if (y !== null) hits.push(y);
			}
			if (hits.length >= 2) {
				let fill;
				if (direction === TO_RIGHT) {
					fill = map(x, minX, maxX, fillStart, fillEnd);
				} else if (direction === TO_LEFT) {
					fill = map(x, minX, maxX, fillEnd, fillStart);
				}
				this.stroke(fill);
				this.line(x, min(...hits), x, max(...hits));
			}
		}
	} else {
		console.warn('p5.riso.gradients: invalid direction value ', direction);
	}
};

Riso.prototype.gradientQuad = function(x1, y1, x2, y2, x3, y3, x4, y4, fillStart, fillEnd, direction) {
	const edges = [
		[x1, y1, x2, y2],
		[x2, y2, x3, y3],
		[x3, y3, x4, y4],
		[x4, y4, x1, y1]
	];

	if (direction === TO_TOP || direction === TO_BOTTOM) {
		let minY = min(y1, y2, y3, y4);
		let maxY = max(y1, y2, y3, y4);

		for (let y = minY; y <= maxY; y++) {
			let hits = [];
			for (let [ax, ay, bx, by] of edges) {
				let x = scanIntersectY(y, ax, ay, bx, by);
				if (x !== null) hits.push(x);
			}
			if (hits.length >= 2) {
				let fill;
				if (direction === TO_BOTTOM) {
					fill = map(y, minY, maxY, fillStart, fillEnd);
				} else if (direction === TO_TOP) {
					fill = map(y, minY, maxY, fillEnd, fillStart);
				}
				this.stroke(fill);
				this.line(min(...hits), y, max(...hits), y);
			}
		}

	} else if (direction === TO_LEFT || direction === TO_RIGHT) {
		let minX = min(x1, x2, x3, x4);
		let maxX = max(x1, x2, x3, x4);

		for (let x = minX; x <= maxX; x++) {
			let hits = [];
			for (let [ax, ay, bx, by] of edges) {
				let y = scanIntersectX(x, ax, ay, bx, by);
				if (y !== null) hits.push(y);
			}
			if (hits.length >= 2) {
				let fill;
				if (direction === TO_RIGHT) {
					fill = map(x, minX, maxX, fillStart, fillEnd);
				} else if (direction === TO_LEFT) {
					fill = map(x, minX, maxX, fillEnd, fillStart);
				}
				this.stroke(fill);
				this.line(x, min(...hits), x, max(...hits));
			}
		}
	} else {
		console.warn('p5.riso.gradients: invalid direction value ', direction);
	}
};

function scanIntersectY(scanY, ax, ay, bx, by) {
	if ((ay <= scanY && by > scanY) || (by <= scanY && ay > scanY)) {
		let t = (scanY - ay) / (by - ay);
		return ax + t * (bx - ax);
	}
	return null;
}

function scanIntersectX(scanX, ax, ay, bx, by) {
	if ((ax <= scanX && bx > scanX) || (bx <= scanX && ax > scanX)) {
		let t = (scanX - ax) / (bx - ax);
		return ay + t * (by - ay);
	}
	return null;
}