import '../../style.css'
import { WebMidi } from 'webmidi'
import p5 from 'p5'

WebMidi.enable().then(onEnabled).catch(err => console.log('WebMidi could not be enabled', err))

function onEnabled() {
  let c1 = 100;
  let c2 = 100;
  let c3 = 180;
  let c4 = 180;
  let c5;
  let c6 = 0;
  let val1 = 100;
  
  let colors = [
    [6, 13, 12],
    [9, 64, 54],
    [2, 89, 64],
    [72, 217, 149],
    [80, 242, 150]
  ]
  
  let randomValues = []
  const generateRandomValues = () => {
    for (let i = 0; i < 100; i++) {
      
    }
  }
  
  
  const mySynth = WebMidi.inputs[1];
  // const mySynth = WebMidi.getInputByName("TYPE NAME HERE!")
  
  mySynth.channels[1].addListener("noteon", e => {
    console.log(e.note.name, e.note.octave, e.note.number, e.velocity);
  });
  
  
  
  let sketch = (p) => {
    // SETUP ////////////////////////////////////////////////////////////////////
    
    p.setup = () => {
      p.createCanvas(800, 800)
      p.pixelDensity(2)
      p.background(colors[0]);
    }
  
    // DRAW /////////////////////////////////////////////////////////////////////
    p.draw = () => {
      p.background(0)
      p.fill(colors[1])
      p.rect(c1+=1, c2, 100, 100)

      p.fill(colors[2])
      p.rect(c1+=1, c2, 10, 10)

      p.fill(colors[3])
      p.rect(c3+=1, c4, 50, 50)
      
      p.fill(colors[4])
      p.rect(c5+=1, c6, 50, 50)

      p.fill(colors[1])
      p.rect(c5, c6, 200, 200)

      if (c1 > p.width) { c1 = 0; }
      if (c2 > p.height) { c2 = 0; }
      if (c3 > p.width) { c3 = 0; }
      if (c4 > p.height) { c4 = 0; }
      if (c5 > p.width) { c5 = 0; }
      if (c6 > p.height) { c6 = 0; }
    }

    const unitOne = (w, h, x, y) => {
      p.fill(colors[1])
      p.rect(x, y, w, h)
    }
  
  
  }

  // Inputs
  WebMidi.inputs.forEach(input => console.log('INPUT: ' + input.name));
  
  // Outputs
  WebMidi.outputs.forEach(output => console.log('OUTPUT: ' +  output.name));

   // Display available MIDI input devices
  if (WebMidi.inputs.length < 1) {
    console.log("No device detected.")
    } else {
    WebMidi.inputs.forEach((device, index) => {
      console.log(`${index}: ${device.name}`);
    });
  }
    
  
  let myp5 = new p5(sketch)
  const myInput = WebMidi.getInputByName("Elektron Digitakt");

  // NOTE ON 
  myInput.addListener("noteon", e => {
    console.log(e.note.identifier)
    if (e.note.identifier == "C4") {
      val1 += 44;
      if (val1 > 255) { val1 = 0; }
      console.log("noooooooooooooooo");
    }
    if (e.note.identifier == "C4") {
      c1 += 100;
      c2 += 100;
      c3 += 100;
      c4 += 100; 
      c5 += 100;
      c6 += 100;
    }
    else if (e.note.identifier == "D4") {
      c1 -= 200;
      c2 -= 200;
      c3 -= 200;
      c4 -= 200; 
      c5 -= 200;
      c6 -= 200;
    }
  });

  // NOTE OFF
  myInput.addListener("noteoff", e => {
    console.log(e.note.identifier)
    if (e.note.identifier) {
      val1 += 44;
      if (val1 > 255) { val1 = 0; }
      console.log("noooooooooooooooo");
    }
    if (e.note.identifier == "C4") {
      c1 += 100;
      c2 += 100;
      c3 += 100;
      c4 += 100; 
      c5 += 100;
      c6 += 100; 
    }
    else if (e.note.identifier == "D4") {
      c1 -= 200;
      c2 -= 200;
      c3 -= 200;
      c4 -= 200; 
      c5 -= 200;
      c6 -= 200; 
    }
  });
};
