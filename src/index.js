import P5 from 'p5/lib/p5';
import Sketch from './sketch';

function init(sk) {
    const sketch = new Sketch();
    sk.preload = sketch.preload;
    sk.setup = sketch.setup;
    sk.draw = sketch.draw;
    sk.mousePressed = sketch.mousePressed;
    window.sk = sk;
}

new P5(init);
