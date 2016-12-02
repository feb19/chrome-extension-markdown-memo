var input = (typeof localStorage['input'] === 'undefined') ? '' : JSON.parse(localStorage['input']);
var output = '';
var marked = require('marked');
var textarea = document.getElementById('input');
var result = document.getElementById('result');
function keyUpHandler(e) {
  output = marked(textarea.value);
  result.innerHTML = output;
  localStorage['input'] = JSON.stringify(textarea.value);
};
textarea.addEventListener('keyup', keyUpHandler);
textarea.value = input
output = marked(input);
result.innerHTML = output;

