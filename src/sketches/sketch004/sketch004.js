import '../../style.css'
import p5 from 'p5'
import GUI from 'lil-gui'

const gui = new GUI()

let nums = {
  x: 20,
  y: 0,
  num: 30
}
  
// GOSHI - Eric Frommelt 2024
let sketch = (p) => {
  
// COLOR ////////////////////////////////////////////////////////////////////

let background = p.color(241, 240, 235)
let lightPink = p.color(243, 201, 225)
let pink = p.color(232, 152, 198)
let green = p.color(115, 191, 126)
let neonGreen = p.color(137, 252, 135)
let yellow = p.color(252, 230, 30)
let orange = p.color(242, 175, 94)
let roarnge = p.color(242, 100, 88)
let black = p.color(53, 53, 53)



// SETUP ////////////////////////////////////////////////////////////////////
let t = 0;
let v = 2;

p.setup = () => {
  p.createCanvas(1080, 1080)
  p.pixelDensity(2)
  p.background(background)
  
  gui.add({v}, 'Version', {V1: 1, V2: 2})
  gui.add(nums, 'x', 0, p.width)
  gui.add(nums, 'y', 0, p.height)
  gui.add(nums, 'num', 0, 100)
  
  gui.onChange( p.redraw() )
  p.mouseReleased = () => { p.redraw() }
  p.noLoop()
}

// DRAW /////////////////////////////////////////////////////////////////////

p.draw = () => {
  let n = p.noise(t)
  
  
  if (v == 1) {
    p.background(background)
    p.threeGreenCircles(100, 500, 100)
    p.bigPinkBlock(40, 40)
    p.gridBoard(100, 500, 20, 20, 200)
    let r1 = p.random(10, 10);
    p.gridBoard(370, p.random(500, 700), r1, r1, 160)
    p.gridBoard(370+230, p.random(350, 800), 14, 14, 300)
    p.blackEye(p.width / 2, p.height / 3, 230)
    p.blockStructure(100, 1080, 40, 40, 60, pink, roarnge, yellow)
    p.blockStructure(500, 1080, 20, 20, 60, background, background, background);
    p.blockStructure(500, 600, 20, 20, 6, background, background, background);
    p.blockStructure(500, 600, 4, 20, 6, background, background, background);
    p.blockStructure(p.random(1080), 600, 4, 20, p.random(16), background, background, background);
    p.blockStructure(p.random(1080), 600, 4, 20, p.random(16), background, background, background);
    p.blockStructure(p.random(1080), 800, 4, 20, p.random(32), background, background, background);
    p.speedLines(200, 200, 400, 20, 10, orange)
    p.speedLines(200, p.random(200, 600), 100, 20, 10, pink)
    p.speedLines(200, p.random(600, 1000), 100, 20, 10, lightPink)
    p.speedLines(900, p.random(300, 1080), 20, 20, 10, lightPink)
    p.blockStructure(p.random(100, 1000), 200, 2, 20, p.random(32), background, background, background);
    p.fill(background)
    p.blockStructure(p.random(100, 1000), p.random(600, 900), 2, 20, p.random(32), background, background, background);
    p.cloudStructure(p.random(400, 800), p.random(600, 900), 40, 40)
    p.arrows(100, 100, p.random(300), 100, 1, 10, yellow)
    p.arrows(100, 400, p.random(20), 20, 10, p.random(20), yellow)
    p.arrows(100, 800, p.random(20), 20, 10, p.random(20), yellow)
    p.arrows(100, 900, p.random(20), 20, 10, p.random(20), yellow)
    p.bangs(p.random(p.width / 2, p.width / 3), p.random(p.height / 2, p.height), 300, 30, p.random(10), black, 10)
    console.log("v: " + v)
    }
    
    if (v == 2) {
      let dLineY = p.random(500, p.height)
      p.background(background)
      p.bigPinkBlock(40, 40)
      p.twoGreenCircles(100, 500, 300)
      for (let i = 0; i < 12; i++) {
        p.dataLines(0, dLineY, 200, 200, 10, background)
      }
      for (let i = 0; i < 12; i++) {
        p.dataLines(0, dLineY, 200, 20, 10, background)
        p.dataLines(0, dLineY+400, 200, 20, 10, background)
      }
      console.log("v: " + v)
  }

  t += 0.01
}
  

// FUNCTIONS ////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------
p.arrows = (x, y, w, h, num, pad, c) => {
  p.fill(c)
  p.noStroke()
  
  for (let i = 0; i < num; i++) {
    p.beginShape()
    p.vertex(x+=pad, y)
    p.vertex(x+w, y)
    p.vertex(x+w+20, y+h/2)
    p.vertex(x+w, y+h)
    p.vertex(x, y+h)
    p.vertex(x+20, y+h/2)
    p.endShape()
  }
}

p.cloudStructure = (x, y, w, h) => {
  let r = p.random(100)
  p.noStroke()
  p.fill(background)
  for (let i = 0; i < 3; i++) {
  p.ellipse(x, y, w, h)
  p.ellipse(x+w/2, y, w, h)
  p.ellipse(x+p.random(w, w*2), y+p.random(h, w), r, r)
  }
}

p.bigPinkBlock = (x, y) => {
  p.noStroke(0)
  let r = p.random(1)
  let iR = p.random(1)
  console.log("r: " + r)
  if (r < 0.3) {
      p.fill(lightPink)
      p.rect(x, y, p.width - p.random(20, 100), 300)
      p.smallPinkBlocks(x, 300/2, 60, 60, 10)
  } else if (r > 0.3 && r < 0.6) {
      p.fill(lightPink)
      p.rect(p.random(20, p.width), 20, p.random(100, 300), 300)
      p.rect(p.random(20, p.width), 20, p.random(100, 300), 300)
      p.rect(p.random(20, p.width), 20, p.random(100, 300), 300)
      p.smallPinkBlocks(x, 300/3, 60, p.random(6, 200), p.random(2, 20))
  } else if (r > 0.6) {
      p.fill(neonGreen)
      p.rect(x, y, 200, 300)
      p.rect(x+p.random(x+p.width/2-200, x+p.width/2+200), y, 200, 300)
      p.rect(x+p.width-200-20, y, 200, 300)

      p.fill(lightPink)
      for (let i = 0; i < p.random(20, 30); i++) {
        iR = p.random(1)
        if (iR > 0.5) {
          p.rect(x+=p.random(20, 80), y+=p.random(20, 80), 100, 100)
        } else if (iR < 0.5) {
          p.rect(x+=p.random(20, 80), y-=p.random(100), 100, 100)
        }
      }
  }

  // Pink block

  // White blocks
  p.smallWhiteBlocks(x+p.width - p.random(200, 600), 300/2, 12, 37, 66)
}

p.smallPinkBlocks = (x, y, w, h, num) => {
  p.fill(pink)
  let xPos = []
  let yPos = []

  for (let i = 0; i < num; i++) {

    xPos.push(p.random(w-5, w+5))
    yPos.push(p.random(y-20, y+20))
    p.rect(x+=xPos[i], yPos[i], w, h)
// top lines
    p.stroke(pink);
    p.line(x, y-p.random(10,45), x, y);
    p.line(x, y, x+10, y);
    
  }
}

p.smallWhiteBlocks = (x, y, w, h, num) => {
  p.fill(background)
  let xPos = []
  let yPos = []
  let n = p.random(1);

  // need some random values to rotate a few blocks - make a utility function
  let selects = p.randomNums(10, 0, 100)
  p.noStroke()
  console.log(selects)
  for (let i = 0; i < num; i++) {
    if (n > 0.3) {
      xPos.push(p.random(w-p.random(w-30, w+10), w+p.random(w-10+p.random(w-2, w+20), w+10)))
      yPos.push(p.random(y, y+=p.random(-6,6)))
    } else {
      xPos.push(p.random(w-5, w+5))
      yPos.push(p.random(y-20, y+20))
    }

    console.log("n: " + n)

    if (selects[i] == i) {
      // p.angleMode(p.DEGREES)
      // p.rotate(p.random(0, 12))
    } else {
      p.rect(x+=p.random(1, w+2), yPos[i], w, h)
    }
  }
}

p.blackEye = (x, y, r) => {
  p.noStroke();
  p.fill(53, 53, 53);
  p.circle(x, y, r)
  p.fill(yellow);
  p.arc(x, y, r*0.8, r*0.8, 0, p.PI);
  // p.circle(x, y, r*0.8);
}

let r2 = p.random(200, 600);
let r3 = p.random(400, 800);
let r4 = p.random(20, 200);
let r5 = p.random(200, 400);
let r6 = p.random(1080/2, 1080);
let r7 = p.random(1080/2, 1080)

p.threeGreenCircles = (x, y, r) => {
  p.noStroke();
  p.fill(green); 
  p.circle(x, y, r4);
  p.circle(x + r4/2+r2/2, y+p.random(300, 600), r2);
  p.circle(x + r4/2+r2/2+r3/2, y, r3);
  // p.ellipse(x, y, r, r);
}

p.twoGreenCircles = (x, y, r) => {
  let yMin = p.height / 3, yMax = p.height
  let rY = p.random(yMin, yMax)
  p.noStroke();
  p.fill(green); 
  p.circle(x, rY, r7);
  p.circle(x+r6, rY, r7);
  console.log("r5: " + r5)
  console.log("r6: " + r6)
}

p.dataLines = (x, y, w, h, num, c) => {
  p.noFill()
  p.stroke(c)
  p.strokeWeight(2)

  let rY = p.random(p.width / 10, p.width - p.width / 3)
  let rY2 = p.random(0, h)
  p.beginShape()

    p.vertex(0, y)
    p.vertex(x+rY, y)
    p.vertex(x+rY, y-rY2)
    p.vertex(x+p.width, y-rY2)
  
  p.endShape()
}

p.gridBoard = (x, y, w, h, num) => {
  p.noStroke()
  p.fill(lightPink)
  p.rect(x-40, y-40, num+70, num+70, 40)

  p.stroke(green)
  for (let i = x; i < num+x; i+=20) {
    for (let j = y; j < num+y; j+=20) {
      let r = p.random(1)
      if (r > 0.6) { p.fill(green) } else { p.noFill() }
      p.rect(i, j, w, h)
    }
  }
}

p.blockStructure = (x, y, w, h, num, c1, c2, c3) => {
p.fill(lightPink)
p.rect(x, y, w, h)
p.fill(c1)
for (let i=0; i < num; i++) {
  let r = p.random(1);
  if (r > 0.5) { 
    p.fill(c2) 
    p.rect(x+=w, y, w, h)
    } else if (r < 0.5){ 
      p.stroke(roarnge) 
      p.rect(x-=w, y, w, h)
      p.fill(c1)
      p.rect(x, y-=h, w, h)
  }
}

p.speedLines = (x, y, w, space, num, c) => {
  for (let i = 0; i < num; i++) {
    p.stroke(c)
    p.strokeWeight(2)
    p.line(p.random(x), y+=space, w, y)
  }
}

p.bangs = (x, y, w, h, num, c, spread) => {
  p.noStroke()
  for (let i = 0; i < num; i++) {
    p.fill(c)
    p.rect(x+=p.random(-spread, spread), y+=p.random(h-20, h+10), w, h)
  }
}

}


// UTILITY FUNCTIONS ////////////////////////////////////////////////////////

p.randomNums = (num, min, max) => {
  let nums = []
  for (let i = 0; i < num; i++) {
    nums.push(p.int(p.random(min, max)))
  }
  return nums
}

p.keyPressed = function() {
  console.log(p.key);
  if (p.key === 's' || p.key === 'S') {
    p.save('sketch-00.png');
    console.log('saved');
  }
};
}

let myp5 = new p5(sketch)

