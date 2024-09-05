var canvas = new fabric.Canvas("myCanvas");
var PW_y = 1;
var PW_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToWidth(block_image_height);
		block_image_object.set({
			top: PW_y,
			left: PW_x
		});
		canvas.add(block_image_object)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') {
		new_image("rr.jpg");
		console.log("R")
	}
	if (keyPressed == '71') {
		PW_x = 200;
		new_image("gr.png");
		console.log("G")
	}

	if (keyPressed == '89') {
		PW_x = 350;
		new_image("yr.png");
		console.log("Y")
	}
	if (keyPressed == '80') {
		PW_x = 600;
		new_image("pr.png");
		console.log("P")
	}
	if (keyPressed == '66') {
		PW_x = 700;
		new_image("br.png");
		console.log("B")
	}

}

