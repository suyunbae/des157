// 'use strict';

/* function to create html content string in tooltip div. */
function tooltipHtml(n, d){
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Count</td><td>"+(d.count)+"</td></tr>"+
    "<tr><td>Min</td><td>"+(d.min)+"</td></tr>"+
    "<tr><td>Average</td><td>"+(d.average)+"</td></tr>"+
    "<tr><td>Max</td><td>"+(d.max)+"</td></tr>"+
    "</table>";
}

var inputData = {
  "AK": { "color": "#ffffff", "count":  22, "min": 2, "average":2.88888888888889, "max": 3},
  "AL": { "color": "#ffffff", "count":  90, "min": 2, "average":3.0506329113924, "max": 5},
  "AR": { "color": "#ffffff", "count":  75, "min": 1, "average":2.83636363636364, "max": 5},
  "AZ": { "color": "#ffffff", "count":  80, "min": 1, "average":2.94444444444444, "max": 5},
  "CA": { "color": "#ffffff", "count": 343, "min": 1, "average":2.84137931034483, "max": 5},
  "CO": { "color": "#ffffff", "count":  78, "min": 2, "average":3.45098039215686, "max": 5},
  "CT": { "color": "#ffffff", "count":  31, "min": 2, "average":2.71428571428571, "max": 4},
  "DC": { "color": "#ffffff", "count":   8, "min": 1, "average":1.42857142857143, "max": 3},
  "DE": { "color": "#ffffff", "count":   7, "min": 3, "average":3.66666666666667, "max": 4},
  "FL": { "color": "#ffffff", "count": 187, "min": 1, "average":2.66272189349112, "max": 5},
  "GA": { "color": "#ffffff", "count": 133, "min": 1, "average":2.93518518518519, "max": 5},
  "HI": { "color": "#ffffff", "count":  23, "min": 2, "average":3.30769230769231, "max": 5},
  "IA": { "color": "#ffffff", "count": 116, "min": 2, "average":3.3943661971831, "max": 5},
  "ID": { "color": "#ffffff", "count":  41, "min": 3, "average":3.52631578947368, "max": 5},
  "IL": { "color": "#ffffff", "count": 180, "min": 1, "average":3.13207547169811, "max": 5},
  "IN": { "color": "#ffffff", "count": 120, "min": 1, "average":3.48148148148148, "max": 5},
  "KS": { "color": "#ffffff", "count": 137, "min": 2, "average":3.3448275862069, "max": 5},
  "KY": { "color": "#ffffff", "count":  94, "min": 1, "average":2.97590361445783, "max": 4},
  "MA": { "color": "#ffffff", "count":  64, "min": 1, "average":3.19298245614035, "max": 5},
  "MD": { "color": "#ffffff", "count":  49, "min": 0, "average":0,                "max": 0},
  "ME": { "color": "#ffffff", "count":  33, "min": 2, "average":3.4375, "max": 5},
  "MI": { "color": "#ffffff", "count": 131, "min": 1, "average":3.19130434782609, "max": 5},
  "MN": { "color": "#ffffff", "count": 131, "min": 2, "average":3.53164556962025, "max": 5},
  "MO": { "color": "#ffffff", "count": 112, "min": 1, "average":3.01162790697674, "max": 5},
  "MS": { "color": "#ffffff", "count":  95, "min": 1, "average":2.77777777777778, "max": 4},
  "MT": { "color": "#ffffff", "count":  62, "min": 2, "average":3.34782608695652, "max": 4},
  "NC": { "color": "#ffffff", "count": 107, "min": 2, "average":3.1063829787234, "max": 5},
  "ND": { "color": "#ffffff", "count":  44, "min": 1, "average":3.1875, "max": 4},
  "NE": { "color": "#ffffff", "count":  89, "min": 2, "average":3.29166666666667, "max": 5},
  "NH": { "color": "#ffffff", "count":  26, "min": 3, "average":3.48, "max": 4},
  "NJ": { "color": "#ffffff", "count":  66, "min": 1, "average":2.546875, "max": 4},
  "NM": { "color": "#ffffff", "count":  41, "min": 1, "average":2.70967741935484, "max": 4},
  "NV": { "color": "#ffffff", "count":  35, "min": 1, "average":2.4, "max": 4},
  "NY": { "color": "#ffffff", "count": 171, "min": 1, "average":2.3202614379085, "max": 5},
  "OH": { "color": "#ffffff", "count": 168, "min": 1, "average":3.37857142857143, "max": 5},
  "OK": { "color": "#ffffff", "count": 124, "min": 1, "average":3.14814814814815, "max": 5},
  "OR": { "color": "#ffffff", "count":  60, "min": 1, "average":3.15384615384615, "max": 4},
  "PA": { "color": "#ffffff", "count": 171, "min": 1, "average":3.00680272108844, "max": 5},
  "RI": { "color": "#ffffff", "count":  11, "min": 2, "average":3.27272727272727, "max": 5},
  "SC": { "color": "#ffffff", "count":  60, "min": 1, "average":3.19230769230769, "max": 5},
  "SD": { "color": "#ffffff", "count":  60, "min": 3, "average":3.85714285714286, "max": 5},
  "TN": { "color": "#ffffff", "count": 107, "min": 1, "average":2.87096774193548, "max": 4},
  "TX": { "color": "#ffffff", "count": 411, "min": 1, "average":3.23106060606061, "max": 5},
  "UT": { "color": "#ffffff", "count":  46, "min": 2, "average":3.44827586206897, "max": 4},
  "VA": { "color": "#ffffff", "count":  86, "min": 1, "average":3.01315789473684, "max": 4},
  "VT": { "color": "#ffffff", "count":  14, "min": 2, "average":3.25, "max": 4},
  "WA": { "color": "#ffffff", "count":  91, "min": 2, "average":3.01515151515152, "max": 5},
  "WI": { "color": "#ffffff", "count": 126, "min": 2, "average":3.61111111111111, "max": 5},
  "WV": { "color": "#ffffff", "count":  49, "min": 2, "average":2.75675675675676, "max": 4},
  "WY": { "color": "#ffffff", "count":  28, "min": 2, "average":3, "max": 4},
  "LS": { "color": "#ffffff", "count":  0, "min": 0, "average":0, "max": 0}
};

//Grabbing the data for each of the states
var dataForD3 = {};

["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
"WI", "MO", "AR", "OK", "KS", "LS", "VA"].forEach(function(d) {
  var min = inputData[d].min;
  var max = inputData[d].max;
  var average = inputData[d].average;
  var count = inputData[d].count;

  var color = "#000000";
  if (average == 0.0) {
    color = "#000000";
  } else if (average <= 2.4) {
    color = "#d7191c";
  } else if (average <= 2.8) {
    color = "#fdae61";
  } else if (average <= 3.2) {
    color = "#ffffbf";
  } else if (average <= 3.6) {
    color = "#abd9e9";
  } else {
    color = "#2c7bb6";
  }
  dataForD3[d] = {
    count: count,
    min: min,
    average: average,
    max: max,
    color: color
  };
});

//drawing the US States with its coordinates
uStates.draw("#statesvg", dataForD3, tooltipHtml);

d3.select(self.frameElement).style("height", "450px");
