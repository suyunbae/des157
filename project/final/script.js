'use strict';

var textarea = document.getElementById("myTextarea");
var button = document.getElementById('button');
var picture = document.getElementById('picture');
var welcome = document.getElementById('welcome');

/*function for using fade out*/
/*use setTimeout*/

function fadeOut(el1, time) {
  el1.style.opacity = 1;

  var last = +new Date();
  var tick = function() {
    el1.style.opacity = +el1.style.opacity - (new Date() - last) / time;
    last = +new Date();

    if (+el1.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

/*function for using fade in*/
/*use setTimeout*/

function fadeIn(el1, time) {
  el1.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el1.style.opacity = +el1.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el1.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

/*recognizing the words from the string*/

function myFunction() {
  var textarea = document.getElementById("myTextarea");
  var button = document.getElementById('button');
  var picture = document.getElementById('picture');
  var explanation = document.getElementById('explanation');
  var title = document.getElementsByClassName('title')[0];

  var d1 = document.getElementById('d1');
  var d3 = document.getElementById('d3');

  var timeout = 1000;
  fadeOut(textarea, timeout);
  fadeOut(picture, timeout);
  fadeOut(button, timeout);
  fadeOut(title, timeout);
  fadeOut(welcome, timeout);




  title.innerHTML = 'Analysis';

  setTimeout(function() {

    textarea.parentNode.removeChild(textarea);
    picture.parentNode.removeChild(picture);
    button.parentNode.removeChild(button);
    explanation.style.display = 'block';
    d1.style.display = 'block';
    d3.style.display = 'block';
    fadeIn(d1, 200);
    fadeIn(d3, timeout);
    fadeIn(title, timeout);

  }, timeout);

  var txtWithTag = "";
  var elms = textarea.value.split(' ');
  for (var i = 0; i < elms.length; i++) {
    var elm = elms[i];
    var elmWithTag;
    if (highlight(elm)) {

      if(elm.toLowerCase() == 'illegal' || elm.toLowerCase() == 'bitch'){
        elmWithTag = "<a href=\"#\" class =\"foo link-1\"><span class='highlighted'  id=\"word\"  onclick=\"toggleHighlight()\">"+ elm + "</span></a>";
      }
      else {
        elmWithTag = "<span class='highlighted'>" + elm + "</span>";
      }
    }
    else {
      elmWithTag = "<span class='non-highlighted'>" + elm + "</span>";
    }
    txtWithTag += elmWithTag + " ";
    console.log(txtWithTag);
    // console.log(txtWithTag);
    document.getElementById("demo").innerHTML = txtWithTag;
    console.log(document.getElementById("demo"));
  }
}

/*creting the HTML elements*.

function createElementFromHTML(htmlString) {
  var span = document.createElement('span');
  span.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return span.firstChild;
}

function highlight(word){
  var result = word.match(/illegal|bitch/i);
  return result;
  // console.log(result)
}


/*toggle the highlights for the words */

function toggleHighlight() {
    // console.log("hi");
    var word = document.getElementById("word");
    var link = document.getElementsByClassName("foo")[0];
    var explanation =document.getElementById("t-explanation");

    if (word.classList.contains("highlight")) {
        link.className += " link-1";
        word.classList.remove("highlight");
        explanation.innerHTML = "Click on any of the highlighted words to learn more about their connotations!";
    } else {
        word.className += " highlight";
        link.classList.remove("link-1");
        link.style.textDecoration = "none";
        if(word.innerHTML == 'bitch'){
          explanation.innerHTML = "The word <strong>\"bitch\"</strong> is a word which is used culturally to describe any woman who is outspoken, or strong, or uncompromising, in a derogatory manner.<br><br> To learn more, click <a href=\"https://www.bustle.com/articles/122081-the-one-sexist-microaggression-youre-probably-committing-daily-and-why-we-need-to-stop-using\">here";
        }
        else if(word.innerHTML == 'illegal'){
          explanation.innerHTML = "The word <strong>\"illegal\"</strong> has been applied and abused by those advocating for harsh immigration policies that are racist and xenophobic. No one is illegal for living.<br><br> To learn more, click <a href=\"https://www.npr.org/sections/itsallpolitics/2013/01/30/170677880/in-immigration-debate-undocumented-vs-illegal-is-more-than-just-semantics\">here";
        }
    }
}
