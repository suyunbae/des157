/*
    Main script that initialize app
*/

// Define global variables
let container = d3.select('#scroll');
let graphic = container.select('.scroll__graphic');
let chart = graphic.select('.chart');
let text = container.select('.scroll__text');
let step = text.selectAll('.step');
let map;

// initialize scrollama
let scroller = scrollama();

// initialize app
scrollamaOptions.init();
