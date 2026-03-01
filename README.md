# p5.riso.gradients

A p5.js library that extends [p5.riso](https://antiboredom.github.io/p5.riso/) to add gradient-filled shapes for risograph printing.

p5.riso.gradients simulates a gradient by exploiting the way p5.riso renders strokes: instead of drawing a filled shape, it draws hundreds of individual parallel lines side by side, each one slightly darker or lighter than the last.

One limitation of this approach is that gradients can only run in one of four  directions (left to right, right to left, top to bottom, or bottom to top) since the lines are always axis-aligned.

## Setup

Download the `p5.riso.gradients.js` file and save it to your sketch folder. Add the library file inside the 'head' tags of your index.html file, just after where you include the `p5.riso.js` library file:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.min.js"></script>
<script src="p5.riso.js"></script>
<script src="p5.riso.gradients.js"></script>
```

## Reference

### Riso.gradientRect(x, y, width, height, fillStart, fillEnd, direction);

Draws a rectangle onto a riso layer. Acts just like p5.js's `rect()` function, but fills the rectangle with a monochrome gradient.

* **`x`, `y`:** location of the rectangle's top left corner
* **`width`, `height`:** width and height of the rectangle
* **`fillStart`, `fillEnd`:** fill value for the start and end of the gradient. Each is a number between 0 and 255, same as `Riso.fill()`
* **`direction`:** the direction the gradient goes, can be one of four options: `TO_RIGHT`, `TO_LEFT`, `TO_BOTTOM`, or `TO_TOP`

**Example:**
```js
let blueChannel;

function setup(){
	createCanvas(500, 500);
	pixelDensity(1);
	blueChannel = new Riso("blue");
	blueChannel.gradientRect(50, 100, 400, 300, 0, 255, TO_RIGHT);
	drawRiso();
}
```
![gradientRect.png](https://github.com/user-attachments/assets/678a62eb-c2b1-44d8-bb5a-5c49c0a69078)

---

### Riso.gradientSquare(x, y, size, fillStart, fillEnd, direction);

Draws a square onto a riso layer. Acts just like p5.js's `square()` function, but fills the square with a monochrome gradient.

* **`x`, `y`:** location of the square's top left corner
* **`size`:** width and height of the square
* **`fillStart`, `fillEnd`:** fill value for the start and end of the gradient. Each is a number between 0 and 255, same as `Riso.fill()`
* **`direction`:** the direction the gradient goes, can be one of four options: `TO_RIGHT`, `TO_LEFT`, `TO_BOTTOM`, or `TO_TOP`

**Example:**
```js
let sunflowerChannel;

function setup(){
	createCanvas(500, 500);
	pixelDensity(1);
	sunflowerChannel = new Riso("sunflower");
	sunflowerChannel.gradientSquare(50, 50, 400, 0, 255, TO_BOTTOM);
	drawRiso();
}
```
![gradientSquare.png](https://github.com/user-attachments/assets/62be3943-d188-46f4-9dd6-3382df779478)

---

### Riso.gradientEllipse(centerX, centerY, width, height, fillStart, fillEnd, direction);

Draws an ellipse onto a riso layer. Acts just like p5.js's `ellipse()` function, but fills the ellipse with a monochrome gradient.

* **`centerX`, `centerY`:** location of the ellipse's center
* **`width`, `height`:** width and height of the ellipse
* **`fillStart`, `fillEnd`:** fill value for the start and end of the gradient. Each is a number between 0 and 255, same as `Riso.fill()`
* **`direction`:** the direction the gradient goes, can be one of four options: `TO_RIGHT`, `TO_LEFT`, `TO_BOTTOM`, or `TO_TOP`

**Example:**
```js
let fluorescentpinkChannel;

function setup(){
	createCanvas(500, 500);
	pixelDensity(1);
	fluorescentpinkChannel = new Riso("fluorescentpink");
	fluorescentpinkChannel.gradientEllipse(width/2, height/2, 450, 300, 0, 255, TO_TOP);
	drawRiso();
}
```
![gradientEllipse.png](https://github.com/user-attachments/assets/63f3018d-41e9-446c-a4a5-fabfded84b67)

---

### Riso.gradientCircle(centerX, centerY, diameter, fillStart, fillEnd, direction);

Draws a circle onto a riso layer. Acts just like p5.js's `circle()` function, but fills the circle with a monochrome gradient.

* **`centerX`, `centerY`:** location of the circle's center
* **`diameter`:** diameter of the circle
* **`fillStart`, `fillEnd`:** fill value for the start and end of the gradient. Each is a number between 0 and 255, same as `Riso.fill()`
* **`direction`:** the direction the gradient goes, can be one of four options: `TO_RIGHT`, `TO_LEFT`, `TO_BOTTOM`, or `TO_TOP`

**Example:**
```js
let greenChannel;

function setup(){
	createCanvas(500, 500);
	pixelDensity(1);
	greenChannel = new Riso("green");
	greenChannel.gradientCircle(300, 300, 300, 0, 255, TO_LEFT);
	drawRiso();
}
```
![gradientCircle.png](https://github.com/user-attachments/assets/ea41ec91-f7fc-4cc3-866c-7726ec0f4b9a)

---

### Riso.gradientTriangle(x1, y1, x2, y2, x3, y3, fillStart, fillEnd, direction);

Draws a triangle onto a riso layer. Acts just like p5.js's `triangle()` function, but fills the triangle with a monochrome gradient.

* **`x1`, `y1`:** coordinates of the first point
* **`x2`, `y2`:** coordinates of the second point
* **`x3`, `y3`:** coordinates of the third point
* **`fillStart`, `fillEnd`:** fill value for the start and end of the gradient. Each is a number between 0 and 255, same as `Riso.fill()`
* **`direction`:** the direction the gradient goes, can be one of four options: `TO_RIGHT`, `TO_LEFT`, `TO_BOTTOM`, or `TO_TOP`

**Example:**
```js
let aquaChannel;

function setup(){
	createCanvas(500, 500);
	pixelDensity(1);
	aquaChannel = new Riso("aqua");
	aquaChannel.gradientTriangle(150, 0, 25, 475, 500, 325, 0, 255, TO_RIGHT);
	drawRiso();
}
```
![gradientTriangle.png](https://github.com/user-attachments/assets/25e7b92d-52d8-4938-ae4b-9fad889047c3)

---

### Riso.gradientQuad(x1, y1, x2, y2, x3, y3, x4, y4, fillStart, fillEnd, direction);

Draws a quadrilateral onto a riso layer. Acts just like p5.js's `quad()` function, but fills the shape with a monochrome gradient. Works best with convex quads (concave or self-intersecting shapes may produce unexpected results.)

* **`x1`, `y1`:** coordinates of the first point
* **`x2`, `y2`:** coordinates of the second point
* **`x3`, `y3`:** coordinates of the third point
* **`x4`, `y4`:** coordinates of the fourth point
* **`fillStart`, `fillEnd`:** fill value for the start and end of the gradient. Each is a number between 0 and 255, same as `Riso.fill()`
* **`direction`:** the direction the gradient goes, can be one of four options: `TO_RIGHT`, `TO_LEFT`, `TO_BOTTOM`, or `TO_TOP`

**Example:**
```js
let orangeChannel;

function setup(){
	createCanvas(500, 500);
	pixelDensity(1);
	orangeChannel = new Riso("orange");
	orangeChannel.gradientQuad(50, 25, 475, 0, 400, 500, 25, 475, 0, 255, TO_TOP);
	drawRiso();
}
```
![gradientQuad.png](https://github.com/user-attachments/assets/e3f65b80-ee23-40e4-9a1c-bfab53197b43)