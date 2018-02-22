/* CONTROLLING SCROLLAMA*/

var storyNum = 0;
let scrollamaOptions = (function () {
    /*
        Set scrollama options.
    */
    let scrollOptions = {
        container: '#scroll', // our outermost scrollytelling element
        graphic: '.scroll__graphic', // the graphic
        text: '.scroll__text', // the step container
        step: '.scroll__text .step', // the step elements
        offset: 0.25, // set the trigger to be 0.25 way down screen
        debug: false // not display the trigger offset for testing
    };
    return {
        init: function () {
             // 1. call a resize on load to update width/height/position of elements
            this.handleResize();

            // 2. setup the scrollama instance
            // 3. bind scrollama event handlers (this can be chained like below)
            scroller
                .setup({
                    container: scrollOptions.container, // our outermost scrollytelling element
                    graphic: scrollOptions.graphic, // the graphic
                    text: scrollOptions.text, // the step container
                    step: scrollOptions.step, // the step elements
                    offset: 0.25, // set the trigger to be 0.25 way down screen
                    debug: false, // not display the trigger offset for testing
                })
                .onStepEnter(this.handleStepEnter)
                .onContainerEnter(this.handleContainerEnter)
                .onContainerExit(this.handleContainerExit);

            // setup resize event
            window.addEventListener('resize', this.handleResize);
            // mapCARTO.cartoMap();
        },
        handleResize: function () {
            // 1. update height of step elements for breathing room between steps
            let stepHeight = Math.floor(window.innerHeight * 0.7);
            step.style('height', stepHeight + 'px');

            // 2. update height of graphic element
            let bodyWidth = d3.select('body').node().offsetWidth;

            graphic
                .style('height', window.innerHeight + 'px');

            // 3. update width of chart by subtracting from text width
            let chartMargin = 20;
            let textWidth = text.node().offsetWidth;
            let chartWidth = graphic.node().offsetWidth - textWidth - chartMargin;
            // make the height 1/2 of viewport
            let chartHeight = 80;

            chart
                .style('width', chartWidth + 'px')
                .style('height', chartHeight + '%');

            // 4. tell scrollama to update new element dimensions
            scroller.resize();
        },
        handleStepEnter: function (response) {

            // fade in current step
            step.classed('is-active', function (d, i) {
                return i === response.index;
            })

            // get attributes from element with "is-active" class
            if (storyNum == 0) {
              d3.select("#statesvg").selectAll("*").remove();
              uStates.draw("#statesvg", dataForD3, tooltipHtml);
            }
            if (storyNum == 1) {
              d3.select("#statesvg").selectAll("*").remove();
              d3.select("#tooltip").style("opacity", "0");
              d3.select("#legend-map").style("opacity", "0");
              d3.select("#special").style("height", "650px");
              d3.select("#citation").style("height", "150px");
              drawBoxplot();
            }
            if (storyNum == 2) {
              d3.select("#statesvg").selectAll("*").remove();
              drawParallel();
              d3.select("#legend-2").style("opacity", "1");
              d3.select("#description").style("opacity", "1");
            }


            if (response.direction == "down") {
              storyNum = storyNum + 1;
            }

            if (response.direction == "up") {
              storyNum = storyNum - 1;
            }

            // change map position and zoom level depending on data-lon, data-lat and data-zoom attribute values
        },
        handleContainerEnter: function (response) {
            // response = { direction }

            // sticky the graphic
            graphic.classed('is-fixed', true);
            graphic.classed('is-bottom', false);
        },
        handleContainerExit: function (response) {
            // response = { direction }

            // un-sticky the graphic, and pin to top/bottom of container
            graphic.classed('is-fixed', false);
            graphic.classed('is-bottom', response.direction === 'down');
        }
    }
})()
