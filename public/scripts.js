// The logic for the calculator needs to be housed on the Server,
// The client side will take in the values (in 2 input text fields)
//and the type of mathematical operation (selected using a button on the DOM).
//Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST.
// it should look something like this: { x: 3, y: 4, type: Add }
//Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.
//
// Finally, build a 'clear' button that resets the whole experience.
var mathOperator = '';
console.log("jscript is working");

$(document).ready(function(){
  console.log('jquery is here');
  $('#submit').on('click', function(){
    console.log('submit clicked');

  var inputX = $('#input1').val();
  var inputY = $('#input2').val();

  var inputObject = {
    "inputX": inputX,
    "inputY": inputY,
    "operation": mathOperator
    };
  console.log(inputObject.inputX + " " + inputObject.inputY + " " + inputObject.operation);
  objectSend(inputObject);
  });

      $('#addition').on('click', function(){
        console.log('add button clicked');
        mathOperator = 'add';
        });
      $('#subtraction').on('click', function(){
        mathOperator = 'subtract';
        });
      $('#multiplication').on('click', function(){
        mathOperator = 'multiply';
        });
      $('#division').on('click', function(){
        mathOperator = 'divide';
        });

function objectSend( objectToSend ){
  console.log('in objectSend ' + objectToSend.inputX);
  $.ajax({
    type: "POST",
    url: "/calculate",
    data: objectToSend,
    success: function ( data ){
      console.log("success: " + data );
      //  displayAnswer( data );
      },//end success
      error: function()
      {
        console.log( 'error connecting' );
      }
    });//end ajax call
  }//end function objectSend
});//end JQuery document
