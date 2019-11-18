import "../sass/style.scss";

import additionCalculator from './modules/addition-calculator';
import Parallax from './modules/parallax';

var item1Price = 400;
var item2Price = 600;
var totalPrice = additionCalculator(item1Price, item2Price);
console.log(totalPrice);

var fade;


const init = () => {
    fade = new FadeIn();
}
document.addEventListener('DOMContentLoaded', function () {
    init();
}, false);
window.addEventListener('load', function () {
    fade.resize();
});