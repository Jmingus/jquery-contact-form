'use strict';

$(document).ready(function(){
  var $form = $('form')
  var $inputs = $('input')
  var $messageBox = $('textarea')
  var $errorBox = $('.error-box')


  function errors(){
    var errorFlag = false
    for(var i = 0; i < 3; i++){
      if($($inputs[i]).val() === ''){
        $($inputs[i]).css('borderColor', 'red');
        $($errorBox[i]).text('Input cannot be empty');
        $($errorBox[i]).css({display: 'block', color: 'red'});
        errorFlag = true
      }else{
        $($errorBox[i]).text('')
        $($inputs[i]).css('borderColor', '#cccccc')
      }
    }

    if($messageBox.val() === ''){
      $messageBox.css('borderColor', 'red');
      $($errorBox[3]).text('Input cannot be empty');
      $($errorBox[3]).css({display: 'block', color: 'red'});
      errorFlag = true
    }else{
      $($errorBox[3]).text('')
      $($messageBox).css('borderColor', '#cccccc')
    }

    if(!_.includes($inputs[1].value, '@')){
      if(!_.includes($errorBox[1].innerHTML, '<div>')){
        $($errorBox[1]).append('<div>Email must contain a @ symbol</div>')
        $($errorBox[1]).css({display: 'block', color: 'red'});
        $($inputs[1]).css('borderColor', 'red');
        errorFlag = true
      }
    }else{
      $($errorBox[3]).text('')
      $($inputs[3]).css('borderColor', '#cccccc')
    }

    if($inputs[2].value.substring(0,7) !== 'http://') {
      if(!_.includes($errorBox[2].innerHTML, '<div>')){
        $($errorBox[2]).append('<div>Website must start with http://</div>')
        $($errorBox[2]).css({display: 'block', color: 'red'});
        $($inputs[2]).css('borderColor', 'red');
        errorFlag = true
      }
    }else {
        $($errorBox[2]).text('')
        $($inputs[2]).css('borderColor', '#cccccc')
      }
    if(errorFlag === false){
      return false
    }
  }

  $inputs.eq(0).keyup(function(){
    if($inputs.eq(0).val() === ''){
      $inputs.eq(0).css('borderLeft', '3px solid red')
    }else{
      $inputs.eq(0).css('borderLeft', '1px solid #cccccc')
    }
  })

  $inputs.eq(1).keyup(function(){
    if(($inputs.eq(1).val() === '' )||(!_.includes($inputs[1].value, '@'))){
      $inputs.eq(1).css('borderLeft', '3px solid red')
    }else{
      $inputs.eq(1).css('borderLeft', '1px solid #cccccc')
    }
  })

  $inputs.eq(2).keyup(function(){
    if(($inputs.eq(2).val() === '' )||($inputs[2].value.substring(0,7) !== 'http://')){
      $inputs.eq(2).css('borderLeft', '3px solid red')
    }else{
      $inputs.eq(2).css('borderLeft', '1px solid #cccccc')
    }
  })

  $messageBox.keyup(function(){
    if($messageBox.val() === '' ){
      $messageBox.css('borderLeft', '3px solid red')
    }else{
      $messageBox.css('borderLeft', '1px solid #cccccc')
    }
  })


  $form.on('submit', function(e){
    e.preventDefault()
    if(errors() === false){
      var name = $inputs[0].value
      $form.empty()
      $form.text('Thanks for contacting us '+ name +'. We have received your message and will be in touch with you shortly.');
      $form.css({fontWeight: 'bold', maxWidth: '30em'})
    }else{
      errors()
    }
  });
});
