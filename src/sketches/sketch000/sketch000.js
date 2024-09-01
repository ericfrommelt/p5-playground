import '../../style.css'
import p5 from 'p5'
import GUI from 'lil-gui'

let jengaFive = {
  x: 100,
  y: 100,
  w: 100,
  h: 30,
  num: 40,
  pad: -1,
  offset: 300
}

const gui = new GUI()

// TO DO:
// - random hash function
// - alternate color palettes
// - grid overlay
let sketch = function(p) {

	// Colors
	let background = p.color(245, 245, 245);
	let cgrey      = p.color(152, 160, 168);
	let cteal      = p.color(45, 226, 226);
	let cblack     = p.color(38, 41, 45);
	let cdrkGrey   = p.color(107, 107, 107);
	let cliteGrey  = p.color(247, 247, 247);
	let cPink      = p.color(229, 32, 169);
	let cyellow    = p.color(238, 252, 61);
	let cpinkTint  = p.color(211, 159, 198);
	let cneonGreen = p.color(3, 88, 250);
	let gradYellow = p.color(254, 88, 110);
	let baseColor  = background;

	let randNum = 0;
	// let randNum = p.int(p.random(0, 5));



/* Color Theme Swatches in RGBA */

	let x = 100;
	let y = 100;

	p.setup = function() {
    p.frameRate(1);
		// Loop ///////////////////////////////
		p.noLoop();
		////////////////////////////////////////
		
		// Random Seed ////////////////////////
		// p.randomSeed(111);
		////////////////////////////////////////
		
		p.createCanvas(1080, 1080);
		p.pixelDensity(2);
		p.keyPressed();

    gui.add(jengaFive, 'x', 0, 1080).name('x value').onChange( value => { jengaFive.x = value });
    
		console.log('hello');
		console.log(p.key);
	};
  
	p.draw = function() {
    p.baseColor();

    console.log(jengaFive.x)
    p.jenga(jengaFive.x, jengaFive.y, jengaFive.w, jengaFive.h, jengaFive.num, jengaFive.pad, jengaFive.offset, cblack);

		if (randNum === 0) {
			background = p.color(245, 245, 245);
			cgrey = p.color(236, 235, 231);
			cteal = p.color(153, 154, 151);
			cblack = p.color(39, 46, 45);
			cdrkGrey = p.color(102, 107, 109);
			cliteGrey = p.color(246, 257, 257);
			cPink = p.color(229, 229, 235);
			cyellow = p.color(238, 238, 236);
			cpinkTint = p.color(211, 211, 211);
		}
		
		if (randNum === 1) {
			background = cteal;
			cblack     = p.color(20, 20, 15);
			cgrey      = p.color(5, 61, 56);
			cteal      = p.color(52, 103, 92);
			cdrkGrey   = p.color(163, 204, 171);
			cliteGrey  = p.color(242, 104, 0);
			cPink      = p.color(229, 229, 235);
			cyellow    = p.color(238, 252, 61);
			cpinkTint  = p.color(211, 211, 211);
		}
		
		if (randNum === 2) { 
			background = p.background(7, 34, 51);
			cblack     = p.color(16, 69, 79);
			cgrey      = p.color(79, 98, 102);
			cteal      = p.color(3, 41, 48);
			cdrkGrey   = p.color(163, 170, 119);
			cliteGrey  = p.color(189, 224, 55);
			
			cPink     = p.color(4, 40, 63);
			cyellow   = p.color(0, 91, 82);
			cpinkTint = p.color(158, 193, 49);
			  // c = p.color(219, 242, 38);
			  // c = p.color(214, 212, 142);
			background = p.color(16, 69, 79);
		}

		if (randNum === 3) {
			background = p.background(245, 245, 245);
			cgrey      = p.color(152, 160, 168);
			cteal      = p.color(45, 226, 226);
			cblack     = p.color(38, 41, 45);
			cdrkGrey   = p.color(107, 107, 107);
			cliteGrey  = p.color(247, 247, 247);
			cPink      = p.color(229, 32, 169);
			cyellow    = p.color(238, 252, 61);
			cpinkTint  = p.color(211, 159, 198);
		}


		if (randNum === 4) {
			background = p.color(16, 16, 16);
			cgrey      = p.color(242, 65, 130);
			cteal      = p.color(45, 226, 226);
			cblack     = p.color(44, 44, 54);
			cdrkGrey   = p.color(49, 16, 63);
			cliteGrey  = p.color(18, 16, 38);
			cPink      = p.color(242, 65, 130);
			cyellow    = p.color(238, 252, 61);
			cpinkTint  = p.color(214, 198, 216);
			cneonGreen = p.color(147, 242, 88);
			cyellow    = p.color(238, 252, 61);
		}

		p.bgCircles(p.width/2, p.height/2, p.random(10, 200));
		p.triCircle();
		p.bgBars(p.random(600), p.random(-1000, 1000), p.random(100, 800), p.random(100, 500), p.random(2, 5), 10, cgrey);
		p.bgBars(p.random(300, p.width), p.random(200, 1000), p.random(100, 300), p.random(100, 200), p.random(2, 5), 10, cteal);
		p.glitchWipe(p.random(600), p.random(10, 100), p.random(100, 800), p.random(100, 500), p.random(2, 5), 10, cteal);
		p.glitchWipe(p.random(100, 700), p.random(100, 900), p.random(100, 200), p.random(10, 100), p.random(2, 5000), 10, cPink);
		p.glitchWipe(p.random(300, p.width), p.random(-100, p.height), p.random(10, 100), p.random(10, 100), p.random(100, 200), 0, cyellow);
		p.glitchStructure(p.random(100, 800), p.random(100, 900), p.random(300, 400), p.random(60, 100), p.random(2300, 5000), cdrkGrey);
		p.strokeGrid(p.random(0, p.width), p.random(80, 880), p.random(0, 400), p.random(10, 100), p.random(2, 5), 10);
		p.circleRow(p.random(0, p.width), p.random(50, 860), p.random(2, 10), p.random(2, 50), 200);
		p.circleRow(p.random(0, p.width), p.random(50, 860), p.random(2, 20), p.random(2, 50), 100);
		p.xBoxRow(100, p.random(0, p.height - 100), 100, 5, 10);
		p.xBoxRow(p.random(100, p.width-100), p.random(0, p.height - 100), 200, 5, 10);
		p.verticalStack(p.random(0, p.width), p.random(0, p.height), 10, p.random(2, 50), 10, cliteGrey);
		p.verticalStack(p.random(0, p.width), p.random(0, p.height), 10, p.random(2, 50), 10, cliteGrey);
		p.verticalStackRow(p.random(100, p.width-100), p.random(100, p.height-100), 10, p.random(10, 60), 6, cliteGrey);
		p.sevenPointLine(100, 100, 1, cteal);
		p.brokenTrax(p.random(0, p.width), p.random(0, p.height/2), p.random(200, 400), p.random(2, 10), p.random(20, 45), 2, cyellow);
		p.brokenTrax(p.random(0, p.width), p.random(0, p.height/2), p.random(200, 400), p.random(2, 10), p.random(20, 45), 2, cyellow);
		p.brokenTrax(p.random(0, p.width), p.random(p.height/2, p.height), p.random(200, 400), p.random(2, 100), p.random(20, 45), 2, cblack);
		p.lol(p.random(0, p.width), p.random(0, p.height));
		p.stackPlusLine(100, p.random(0, p.height), p.random(200, 400), p.random(10, 100), 4, 10, cblack, cteal);
		p.border(100);
		p.jenga(100, 100, p.random(100, 200), p.random(10, 20), p.random(20, 50), -1, 4, cblack);
		p.jenga(p.random(p.width/2 - p.random(100)), 100, p.random(100, 200), p.random(10, 20), p.random(20, 50), -1, 4, cyellow);
		p.jenga(p.random(p.width/2, p.width/2), p.random(100, p.height-100), p.random(100, 200), p.random(10, 20), p.random(20, 50), -1, 4, cyellow);
		p.textLines(p.random(0, p.width), p.random(0, p.height), p.random(100, 200), p.random(2, 10), p.random(2, 5), 10, cteal);
		p.textLines(p.random(0, p.width), p.random(0, p.height), p.random(100, 200), p.random(2, 10), p.random(2, 5), 10, cteal);
		p.jenga(900, 200, p.random(100, 200), p.random(10, 20), p.random(20, 50), -1, 24, cblack);
		p.brokenTrax(p.random(0, p.width), p.random(0, p.height/2), p.random(200, 400), p.random(2, 10), p.random(20, 45), 2, cgrey);
		p.blockGrid(p.random(p.width), p.random(800), 100, 100, 60, 10, cteal);
		p.logicBoard(p.random(100, p.width), p.random(100, p.height/2), p.random(200, 300), p.random(600, 900), cblack, cteal);
		p.circleCrossHair(p.random(0, p.width), p.random(0, p.height), p.random(40, 300), cteal, cblack);
		p.circleCrossHair(p.random(0, p.width), p.random(0, p.height), p.random(40, 300), cteal, cblack);
		p.circleCrossHair(p.random(0, p.width), p.random(0, p.height), p.random(40, 300), cteal, cblack);
		p.neonLine(p.random(0, p.width), p.random(0, p.height), p.random(0, p.width), p.random(0, p.height), p.random(100, 400), cneonGreen);
		p.gradientLine(p.random(0, p.width), p.random(0, p.height), p.random(0, p.width), p.random(0, p.height), p.random(200, 500), cneonGreen, gradYellow);
		p.glitchWipe(p.random(0, p.width), p.random(0, p.height), p.random(10, 100), p.random(20, 100), p.random(100, 200), 0, cblack);
		p.glitchStructure(p.random(100, 800), p.random(100, 900), p.random(300, 400), p.random(60, 100), p.random(2300, 5000), cdrkGrey);
		p.jenga(p.random(p.width/2 - p.random(100)), 100, p.random(100, 200), p.random(10, 20), p.random(20, 50), -1, 4, cyellow);
		p.jenga(p.random(p.width/2 - p.random(100)), 100, p.random(100, 200), p.random(10, 20), p.random(20, 50), -1, 4, cblack);

	};

	p.bgBars = function(x, y, w, h, num, pad, color) {
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			p.rect(x, y, w, h);
			y += h + pad;
		}
	};

	p.bgCircles = function(x, y, d) {
		let d1 = d*p.random(0, 10);
		let d2 = d*2;
		let d3 = d2 + d2;
		p.noStroke();
		p.fill(cblack);
		p.circle(x, y, d1);
		p.fill(cliteGrey);
		p.circle(x+d2, y, d2);
		p.fill(cblack);
		p.circle(x+d3, y, d2);
	};

	p.glitchWipe = function(x, y, w, h, num, pad, color) {
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			p.rect(x, y, w, h);
			y += p.random(h)*Math.sin;
			x += p.random(w);
		}
	};

	p.glitchStructure = function(x, y, w, h, num, color) {
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			if (i%2 == 0) {
				p.fill(cblack);
				x += p.random(w - 100, w + 100);
				y += p.random(h);
			} else {
				p.fill(cliteGrey);
				x -= p.random(w);
				y -= p.random(h);
			}
			p.rect(x, y, w, h);
			console.log(i);
		}
	};

	p.strokeGrid = function(x, y, w, h, num, pad) {
		p.noFill();
		p.stroke(cliteGrey);
		for (let i=0; i<num; i++) 
			for (let j=0; j<num; j++) {
			p.rect(x+=w+pad, y, w, h);
			p.rect(x+=w+pad, y+=h+pad, w, h);
		}
	};

	p.circleRow = function(x, y, d, num, pad) {
		for (let i=0; i<num; i++) {
			if (i === 3 || i === 9 || i === 18) {
				p.noStroke();
				p.fill(cliteGrey);
			} else {
				p.stroke(cPink);
				p.noFill();
			}
			p.circle(x, y, d);
			x += d + pad;
		}
	}

	p.xBoxRow = function(x, y, d, num, pad) {
		num = p.random(1, num);
		for (let i=0; i<num; i++) {
			if(i === p.random(1, 2)) {
				p.xBox(x+(p.random(num, 100)), y+=p.random(100), d, pad);
			} else {
				p.xBox(x, y, d, pad);
			}
			x += d + pad;
		};
	}

	p.xBox = function(x, y, d, pad) {
		let r = p.random(10, 100);
		p.fill(cliteGrey);
		p.noStroke();
		p.rect(x+10, y+10, d-20, d-20);
		p.stroke(cPink);
		p.noFill();
		p.rect(x, y, d, d);
		p.line(x+pad, y+pad, x+d-pad, y+d-pad);
		p.line(x+d-pad, y+pad, x+pad, y+d-pad);
		// x += d + pad;
	}

	p.verticalStack = function(x, y, w, num, pad, color) { 
		p.stroke(color);
		for (let i=0; i<p.random(num); i++) {
			p.line(x, y, x+w, y);
			y += pad;
		}
	}

	p.verticalStackRow = function(x, y, w, num, pad, color) {
		p.stroke(color);
		for (let i=0; i<num; i++) {
			p.verticalStack(x, y, w, num, pad, color);
			x+=w+pad;
		}
	};

	p.sevenPointLine = function(x, y, weight, color) {

		p.stroke(color);
		p.strokeWeight(weight);
		p.noFill();
		p.line(x, y, x+200, y);
		p.line(x+200, y, x+200, p.height-100);
		p.line(x+200, p.height-100, x+200, p.height-100);
		p.line(x+200, p.height-100, x+400, p.height-100);
		p.line(x+400, p.height-100, x+400, p.random(-100, p.height));
		console.log('sevenPointLine');
	};

	p.triCircle = function() {
		let anchorX = p.width/2;
		let anchorY = p.height/2;
		let diameter = p.random(100, 400);
		let circle1X = anchorX-diameter/2;
		let circle1Y = anchorY+diameter/2;
		let circle2X = anchorX+diameter/2;
		let circle2Y = anchorY+diameter/2;
		let circle3X = anchorX-diameter/2;
		let circle3Y = anchorY-diameter/2;
		p.stroke(cPink);
		p.noFill();
		p.circle(circle1X, circle1Y, diameter);
		p.circle(circle2X, circle2Y, diameter);
		p.circle(circle3X, circle3Y, diameter);
	}

	p.brokenTrax = function(x, y, w, h, num, pad, color) {
		num = p.random(1, num);

		
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {

			if (i == 3) {
				x = p.random(x-20, x+46);
			} else if (i == 6) { 
				x = p.random(x-20, x+46);
			}
			p.rect(x, y, w, h);
			y += h + pad;
		};
	};

	p.jenga = function(x, y, w, h, num, pad, offset, color) {
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			offset = p.random(offset-100, offset+100);
			y += h + pad;
			p.isBinary() ? x - offset : x += offset;
			p.rect(offset, y, w, h);
			console.log('binaryX: ' + x);
		}
	}

	// p.jenga = function(x, y, w, h, num, pad, offset, color) {
	// 	p.noStroke();
	// 	p.fill(color);
	// 	for (let i=0; i<num; i++) {
	// 		offset = p.random(offset-100, offset+100);
	// 		y += h + pad;
	// 		p.isBinary() ? x - offset : x += offset;
	// 		p.rect(offset, y, w, h);
	// 		console.log('binaryX: ' + x);
	// 	}
	// }

	// Damaged Waves

	p.lol = function(x, y) {
		p.fill(cblack)
		p.rect(x, y, 100, 10);
		p.rect(x, y+200, 200, 16);
		console.log('lol');
	};

	p.stackPlusLine = function(x, y, w, h, num, pad, color, colorTwo) {
		let lineCross = p.random(20, 100);

		
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			p.rect(x, y, w, h);
			y += h + pad;
		}
		
		p.noFill();
		p.stroke(colorTwo);
		p.strokeWeight(1);
		p.strokeJoin(p.ROUND);
		p.beginShape();
		p.vertex(x+10, y+10);
		p.vertex(x+10, y+h-10);
		p.vertex(x+20, y+h-10);
		p.vertex(x+lineCross, y+10);
		p.vertex(x+lineCross+20, y+10);
		p.vertex(x+lineCross+20, y+h-10);
		p.vertex(x+lineCross+40, y+h-10);
		
		p.vertex(x+lineCross+20+lineCross, y+10);
		p.vertex(x+lineCross+20+lineCross+20, y+10);
		p.endShape();

	};

	p.textLines = function(x, y, w, h, num, pad, color) {
		let randNum = p.random(0, 20000);
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			p.fill(color);
			p.rect(x, y, w, h);
			p.fill(cgrey);
			p.textFont('IBM Plex Mono', 10);
			p.text('Erase. Defend', x, y + 8);
			p.text('Beginner. Abort', x, y + 12);
			y += h + pad;
			if (i === 3) {
				x = p.random(x-20, x+46);
			} else if (i === 6) {
				x = p.random(x-20, x+46);
			}
		}
		p.text('Cop another appeal', x, y - 8);
		p.text(randNum + ' 01 01', x, y + 8);
	};

	p.blockGrid = function(x, y, w, h, num, pad, color) {
		p.noStroke();
		p.fill(color);
		for (let i=0; i<num; i++) {
			for(let j=0; j<num; j++) {
			
			p.rect(x+=w+pad, y+=h+pad, w, h);
				
			}
		}
	}

	p.logicBoard = function(x, y, w, h, color, colorTwo) {
		p.fill(color);
		p.beginShape();
		p.vertex(x, y);
		p.vertex(x+w, y);
		p.vertex(x+w, y+h-200);
		p.vertex(x+w-200, y+h);
		p.vertex(x, y+h);
		p.endShape();

		p.beginShape();
		p.vertex(x, y-20);
		p.vertex(x, y-200);
		p.vertex(x+w, y-200);
		p.vertex(x+w, y-20);
		p.endShape();

		p.fill(colorTwo);

		p.circle(x+100, y+100, 10);
		p.circle(x+w-100, y+100, 10);
		p.circle(x+100, y+h-100, 10);

		p.noFill();
		p.stroke(colorTwo);
		p.strokeWeight(1);
		p.beginShape();
		p.vertex(x+100, y+160);
		p.vertex(x+w-100, y+160);
		p.vertex(x+w-100, y+h-160);
		p.vertex(x+100, y+h-160);
		p.endShape();

		p.line(x+100, y+60, x+100, y-80);
		p.line(x+w-100, y+60, x+w-100, y-80);

		p.circle(x+w-110, y+170, 4);
	}

	p.circleCrossHair = function(x, y, d, colorA, colorB) {
		p.fill(colorB);
		p.noStroke();
		p.circle(x, y, d+6);
		p.stroke(colorA);
		p.circle(x, y, d);
		p.line(x-10, y, x+10, y);
		p.line(x, y-10, x, y+10);
	};

	p.neonLine = function(x1, y1, x2, y2, weight, color) {
		p.stroke(color);
		p.strokeJoin(p.ROUND);
		p.strokeWeight(weight);
		p.line(x1, y1, x2, y2);
	};

	p.gradientLine = function(x1, y1, x2, y2, weight, colorA, colorB) {
		let grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
		p.strokeWeight(weight);
		grad.addColorStop(0, colorA);
  		grad.addColorStop(1, colorB);

  		this.drawingContext.strokeStyle = grad;

  		p.line(x1, y1, x2, y2);
	};

	// Utilities
	p.baseColor = function() {
		p.fill(baseColor);
		p.rect(0, 0, p.width, p.height);
	};

	p.border = function(weight) {
		p.strokeJoin(p.MITER)
		p.stroke(background);
		p.strokeWeight(weight);
		p.noFill();
		p.rect(0, 0, p.width, p.height);
	};

	p.isBinary = function() {
		let num = p.random(0, 1);
		if (num === 0) {
			return true;
		} else {
			return false;
		}
	};

	p.keyPressed = function() {
		console.log(p.key);
		if (p.key === 's' || p.key === 'S') {
			p.save('sketch-00.png');
			console.log('saved');
		}
	};
};

let myp5 = new p5(sketch);