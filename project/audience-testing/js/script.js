'use strict';

function myFunction() {
  var txt = document.getElementById("myTextarea").value;

  //highlight(txt);

  var txtWithTag = "";
  var elms = txt.split(' ');
  for (var i = 0; i < elms.length; i++) {
    var elm = elms[i];
    var elmWithTag;
    if (highlight(elm)) {
      //var id = i;
      //var elmWithTag = "<span id=\""  + id + "\">" + elm + "</span>"
      if(elm.toLowerCase() == 'illegal'){
        elmWithTag = "<span class=\"tooltip\"><span class='highlighted' style='background-color: #a3daff;' onmouseover=\"showCoords(event)\">" + elm + "</span>"+
        "<span class=\"tooltip__content\">" +"<p><strong>Illegal</strong></p>" +
			  "<p>The word \"illegal\" has been applied and abused by those advocating for harsh immigration policies that are racist and xenophobic. No one is illegal for living.<a href=\"https://www.npr.org/sections/itsallpolitics/2013/01/30/170677880/in-immigration-debate-undocumented-vs-illegal-is-more-than-just-semantics\" target=\"_blank\"> link</a></p></span>";
      }
      else if (elm.toLowerCase() == 'bitch') {
        elmWithTag = "<span class=\"tooltip\"><span class='highlighted' onmouseover=\"showCoords(event)\">" + elm + "</span>"+
        "<span class=\"tooltip__content\">" +"<p><strong>Bitch</strong></p>" +
			  "<p>The word \"bitch\" is a word which is used culturally to describe any woman who is outspoken, or strong, or uncompromising, in a derogatory manner. <a href=\"https://www.bustle.com/articles/122081-the-one-sexist-microaggression-youre-probably-committing-daily-and-why-we-need-to-stop-using\" target=\"_blank\">link</a></p></span>";
      }
      else {
        elmWithTag = "<span class='highlighted'>" + elm + "</span>";
      }

      // var foo = createElementFromHTML(elmWithTag);
      // highlight(elmWithTag);
    }
    else {
      elmWithTag = "<span class='non-highlighted'>" + elm + "</span>";
    }
    txtWithTag += elmWithTag + " ";
    // console.log(txtWithTag);
    document.getElementById("demo").innerHTML = txtWithTag;
  }
}


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


function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;

    var highlight = document.getElementsByClassName('highlighted')[0];
    // console.log(highlight.getBoundingClientRect);

    var left =  highlight.left + window.scrollX;
    var top = highlight.top + window.scrollY;


    document.getElementsByClassName("tooltip__content")[0].style.left=x - 80+"px";
    document.getElementsByClassName("tooltip__content")[0].style.bottom=y + 10 + "px";

}
