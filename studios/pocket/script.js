
'use strict';

var Boxlayout = function() {
  // Get the necessary elements in the document
  var wrapper = document.body;
  var sections = Array.from(document.querySelectorAll('.section'));
  var closeButtons = Array.from(document.querySelectorAll('.close-section'));
  var expandedClass = 'is-expanded';
  var hasExpandedClass = 'has-expanded-item';
  var pencil = document.getElementById('pencil');
  var laptop = document.getElementById('laptop');
  var eyedrop = document.getElementById('eyedrop');
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3');


  var w = window.innerWidth;
  var h = window.innerHeight;

  return { init : init };

  //run function init to execute itself
  function init() {
    _initEvents();
  }
  //for every element that is clicked open the section
  function _initEvents() {
    sections.forEach(function(element) {
      element.onclick = function() {
        _openSection(this);
      };
    });
    closeButtons.forEach(function(element) {
      element.onclick = function(element) {
        element.stopPropagation();
        _closeSection(this.parentElement);
      };
    });
  }

  //function for opening the section and stylizing the elements
  function _openSection(element) {
    if ( ! element.classList.contains(expandedClass) ) {
      element.classList.add(expandedClass);
      wrapper.classList.add(hasExpandedClass);
      console.log("how about this one");

      text1.style.display = 'block';
      text2.style.display = 'block';
      text3.style.display = 'block';

      if( w >= 1000 ){
        console.log("hi");

        pencil.style.height = '450px';
        pencil.style.marginLeft = '239px';
        pencil.style.marginTop = '10%';

        laptop.style.height = '450px';
        laptop.style.marginLeft = '135px';
        laptop.style.marginTop = '10%';


        eyedrop_ipad.style.height = '450px';
        eyedrop_ipad.style.marginLeft = '239px';
        eyedrop_ipad.style.marginTop = '12%';


        text1.style.width = '30%';
        text1.style.marginTop = '-25%';
        text2.style.width = '30%';
        text2.style.marginTop = '-30%';
        text3.style.width = '30%';
        text3.style.marginTop = '-27%';



      }



    }
  }
  //closing the section and return the style back to normal
  function _closeSection(element) {
    if ( element.classList.contains(expandedClass) ) {
      element.classList.remove(expandedClass);
      wrapper.classList.remove(hasExpandedClass);
      text1.style.display = 'none';
      text2.style.display = 'none';
      text3.style.display = 'none';

      // pencil.style.height = '408px';
      pencil.style.height = '218px';

      laptop.style.height = '408px';
      laptop.style.height = '220px';

      eyedrop_ipad.style.height = '205px';
      eyedrop_ipad.style.marginLeft = '41%';



        // pencil.removeAttribute("pencil-desktop");
        // pencil.setAttribute("id", "pencil");
    }
  }

}();

Boxlayout.init();
