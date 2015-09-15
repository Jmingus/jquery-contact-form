(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  var $form = $('form');
  var $inputs = $('input');
  var $messageBox = $('textarea');
  var $errorBox = $('.error-box');

  function errors() {
    for (var i = 0; i < 3; i++) {
      if ($($inputs[i]).val() === '') {
        $($inputs[i]).css('borderColor', 'red');
        $($errorBox[i]).text('Input cannot be empty');
        $($errorBox[i]).css({ display: 'block', color: 'red' });
      }
    }
    if ($messageBox.val() === '') {
      $messageBox.css('borderColor', 'red');
      $($errorBox[3]).text('Input cannot be empty');
      $($errorBox[3]).css({ display: 'block', color: 'red' });
    }
    if (!_.includes($inputs[1], '@')) {
      if (!_.includes($errorBox[1], '<div>')) {
        $($errorBox[1]).append('<div>Email must contain a @ symbol</div>');
      }
      $($errorBox[1]).css({ display: 'block', color: 'red' });
      $($inputs[1]).css('borderColor', 'red');
    }
  }

  $form.on('submit', function (e) {
    e.preventDefault();
    console.log($($errorBox[1]));
    errors();
  });
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map