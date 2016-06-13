// The logic for the calculator needs to be housed on the Server,
// The client side will take in the values (in 2 input text fields)
//and the type of mathematical operation (selected using a button on the DOM).
//Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST.
// it should look something like this: { x: 3, y: 4, type: Add }
//Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.
//
// Finally, build a 'clear' button that resets the whole experience.

console.log("jscript is working");

$(document).ready(function(){
  console.log('jquery is here');
  $('#submit').on('click', function(event){
    event.preventDefault();
    console.log('submit clicked');
    inputIn();
  });




function inputIn(){
    var mathOperator='';
      $('#addition').on('click', function(){
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
        $('#submit').on('click', function(){
          var inputX = $('#input1').val();
          var inputY = $('#input2').val();
          var inputObject = {
            "varX": inputX,
            "varY": inputY,
            "type": mathOperator
          };
          console.log(inputObject);
          return(inputIn());
        });
}
// inputIn();
console.log(inputIn());
});
