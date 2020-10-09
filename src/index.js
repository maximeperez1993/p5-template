import P5 from 'p5/lib/p5';
import Sketch from './Sketch';

new P5(init(new Sketch()));


function init(sketch) {
    return (sk) => {
        let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(sketch)).filter(method => method !== 'constructor');
        methods.forEach(method => sk[method] = sketch[method]);
        window.sk = sk;
    };
}