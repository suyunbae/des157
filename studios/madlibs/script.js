// JavaScript document

"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.mainForm.onsubmit = processForm;
		document.mainForm.reset = resetForm;

    function processForm() {

			var name = document.mainForm.name.value;
      var noun = document.mainForm.noun.value;
      var pet = document.mainForm.pet.value;
      var adjective = document.mainForm.adjective.value;
			var food = document.mainForm.food.value;

			if (name == '' || noun == '' || pet == '' || adjective == ''|| food == ''){
				alert("This letter isn't going to finish itself.");
			} else{
			var message = document.getElementById('message');
			var header = document.getElementById('header');
			var p1 = document.getElementById('p1');
			var p2 = document.getElementById('p2');
			var p3 = document.getElementById('p3');
			var p4 = document.getElementById('p4');
			var footer = document.getElementById('footer');

			message.classList.remove('hide');
			message.classList.add('show');

			header.innerHTML = 'To my main squeeze: ';
			p1.innerHTML = 'This doesn\'t make sense but you  my ' + '<span class=\'input\'>' + noun + '</span>' + '<br>And it was plain to see <br>' + 'You were my destiny';
			p2.innerHTML = 'You the '+  '<span class=\'input\'>' + pet + '</span>' +' I\'ve been lookin\' for my whole life. <br>' + 'Because of you <br>' + 'I understand life';
			p3.innerHTML = 'And I don\'t think you\'re  '+ '<span class=\'input\'>' + adjective + '</span>' +', I think you\'re beyond it';
			p4.innerHTML = 'And your ' + '<span class=\'input\'>' + food + '</span>' + ' is the only thing I wish was mine.';
			footer.innerHTML = 'Love, <br>' +'<span class=\'input\'>' +  name + '</span>';
			}


      return false;
    } // processForm()

		function resetForm(){
			 document.getElementById("form").reset();

		}
}); // DOMContentLoaded
