'use strict';

var mission = document.getElementById("mission");
var introduction = document.getElementsByClassName('introduction');
var analysis = document.getElementsByClassName("analysis");
var explaination = document.getElementsByClassName('analysis-explanation');

console.log(introduction);

submit.addEventListener("click", function() {
  introduction[0].style.display = 'none';
  analysis[0].style.float = 'left';
  explaination[0].style.display = 'block';

});