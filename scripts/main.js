'use strict';

$(document).ready(function(){
  var $form = $('form')
  var $inputs = $('input')
  var $messageBox = $('textarea')
  var $errorBox = $('.error-box')


  function errors(){
    for(var i = 0; i < 3; i++){
      if($($inputs[i]).val() === ''){
        $($inputs[i]).css('borderColor', 'red');
        $($errorBox[i]).text('Input cannot be empty');
        $($errorBox[i]).css({display: 'block', color: 'red'});
      }
    }
    if($messageBox.val() === ''){
      $messageBox.css('borderColor', 'red');
      $($errorBox[3]).text('Input cannot be empty');
      $($errorBox[3]).css({display: 'block', color: 'red'});
    }
    if(!_.includes($inputs[1], '@')){
      if(!_.includes($errorBox[1], '<div>')){
        $($errorBox[1]).append('<div>Email must contain a @ symbol</div>')
      }
      $($errorBox[1]).css({display: 'block', color: 'red'});
      $($inputs[1]).css('borderColor', 'red');
    }
  }

  $form.on('submit', function(e){
    e.preventDefault()
    console.log($($errorBox[1]))
    errors()
  });

});
