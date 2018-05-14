'use strict';

var textarea = document.getElementById("myTextarea");
var button = document.getElementById('button');
var picture = document.getElementById('picture');
var welcome = document.getElementById('welcome');

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


function myFunction() {
  var textarea = document.getElementById("myTextarea");
  var button = document.getElementById('button');
  var picture = document.getElementById('picture');
  var explanation = document.getElementById('explanation');
  var title = document.getElementsByClassName('title')[0];

  var d1 = document.getElementById('d1');
  var d3 = document.getElementById('d3');

  var timeout = 1000;
  var timeout2 = 2000;
  fadeOut(textarea, timeout);
  fadeOut(picture, timeout);
  fadeOut(button, timeout);
  fadeOut(title, timeout);
  fadeOut(welcome, timeout);

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
    title.innerHTML = 'Analysis';
  }, timeout);

  var txtWithTag = "";
  var elms = textarea.value.split(' ');
  // var elms = textarea.value.split(/[ ,.!?]+/);
  for (var i = 0; i < elms.length; i++) {
    var elm = elms[i];
    var elm2 = "";
    var elm3 = "";
    if (i < elms.length - 1) {
      elm2 = elms[i+1];
      elm3 = elms[i+2];
    }

    if (elm.toLowerCase() == 'no' && elm2.toLowerCase() == 'homo' ) {
      elm = elm + " " + elm2;
      i++; // skip next loop
    }
    if (elm.toLowerCase() == 'that\'s' && elm2.toLowerCase() == 'so' && elm3.toLowerCase() == 'gay' ) {
      elm = elm + " " + elm2 + " " + elm3;
      i+=2; // skip next loop
    }

    var specialWord = ""
    if (elm.slice(-1) == "," || elm.slice(-1) == "." || elm.slice(-1) == "?" || elm.slice(-1) == "!" ) {
      specialWord = elm.slice(-1);
      elm = elm.slice(0, -1);
    }

    var elmWithTag;

    if (highlight(elm)) {

      if(elm.toLowerCase() == 'illegal' || elm.toLowerCase() == 'bitch' || elm.toLowerCase() == 'ghetto' || elm.toLowerCase() == 'retarded' || elm.toLowerCase() == 'no homo' || elm.toLowerCase() == 'that\'s so gay' || elm.toLowerCase() == 'whore' || elm.toLowerCase() == 'hoe' ){
        elmWithTag = "<a href=\"#\" class =\"foo link-1\"><span class='highlighted'  id=\"word\"  onclick=\"toggleHighlight(this)\">"+ elm + "</span>" + specialWord + "</a>";
      }
      else {
        elmWithTag = "<span class='highlighted'>" + elm + specialWord + "</span>";
      }
    }
    else {
      elmWithTag = "<span class='non-highlighted'>" + elm + specialWord + "</span>";
    }
    txtWithTag += elmWithTag + " ";
    console.log(txtWithTag);
    // console.log(txtWithTag);
    document.getElementById("demo").innerHTML = txtWithTag;
    console.log(document.getElementById("demo"));
  }
}


function createElementFromHTML(htmlString) {
  var span = document.createElement('span');
  span.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return span.firstChild;
}

function highlight(word){
  var result = word.match(/illegal|bitch|ghetto|retarted|lame|whore|slut|hoe|no|homo|that|so|gay/i);
  console.log(result);
  return result;
  // console.log(result)
}



function toggleHighlight(thisDom) {
    var word = thisDom;
    var link = document.getElementsByClassName("foo")[0];
    var explanation =document.getElementById("t-explanation");

    if (word.classList.contains("highlight")) {
        link.className += " link-1";
        word.classList.remove("highlight");
        explanation.innerHTML = "Click on any of the highlighted words to learn more about their connotations!";
    } else {
        // word.className += " highlight";
        // link.classList.remove("link-1");
        link.style.textDecoration = "none";
        if(word.innerHTML == 'bitch'){
          explanation.innerHTML = "The word <strong>\"bitch\"</strong> is a word which is used culturally to describe any woman who is outspoken, or strong, or uncompromising, in a derogatory manner.";
        }
        else if(word.innerHTML == 'illegal'){
          explanation.innerHTML = "The word <strong>\"illegal\"</strong> has been applied and abused by those advocating for harsh immigration policies that are racist and xenophobic. No one is illegal for living.";
        }
        else if(word.innerHTML == 'ghetto'){
          explanation.innerHTML = "The word <strong>\"ghetto\"</strong> describes something or someone as cheap, worn out, poor, dangerous, etc. Reference to housing communities that are impoverished and disproportionately impact of people of color. Associates people of color with these negative characteristics";
        }
        else if(word.innerHTML == 'homo'){
          explanation.innerHTML = "The word <strong>\"homo\"</strong> stigmatizes gay and queer people. Uses their identities to describe something as undesirable and bad. Replaces negative adjectives with words related to queer/LGBT identity.";
        }
        else if(word.innerHTML == 'retarted'){
          explanation.innerHTML = "The word <strong>\"retarded\"</strong> targets mental, emotional, and physical disabilities as objects for ridicule. Used as synonyms for “worthless”, “bad”, “unintelligent”, “incapable”, etc";
        }
        else if(word.innerHTML == 'whore'){
          explanation.innerHTML = "The word <strong>\"whore\"</strong> dismisses anyone seen as being “too” sexual —particular sex workers, women, queer people, and people of color. Perpetuates negativity towards sex itself. Regulates who is allowed to have it";
        }
        else if(word.innerHTML == 'hoe'){
          explanation.innerHTML = "The word <strong>\"hoe\"</strong> dismisses anyone seen as being “too” sexual —particular sex workers, women, queer people, and people of color. Perpetuates negativity towards sex itself. Regulates who is allowed to have it";
        }
        else if(word.innerHTML == 'slut'){
          explanation.innerHTML = "The word <strong>\"slut\"</strong> dismisses anyone seen as being “too” sexual —particular sex workers, women, queer people, and people of color. Perpetuates negativity towards sex itself. Regulates who is allowed to have it";
        }
        else if(word.innerHTML == 'that\'s so gay'){
          explanation.innerHTML = "The phrase <strong>\"that\'s so gay\"</strong> stigmatizes gay and queer people. Uses their identities to describe something as undesirable and bad. Replaces negative adjectives with words related to queer/LGBT identity.";
        }
        else if(word.innerHTML == 'no homo'){
          explanation.innerHTML = "The phrase <strong>\"no homo\"</strong> stresses the speaker’s heterosexuality, masculinity, and/or other traits to avoid being perceived as gay/queer. Goes to great lengths to avoid association with anything queer, and ultimately reinforces the notion that queer is a negative characteristic.";
        }
    }
}
