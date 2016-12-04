var marked = require('marked');

var currentId = (typeof localStorage['currentId'] === 'undefined') ? 0 : parseInt(JSON.parse(localStorage['currentId']), 10);
var data = (typeof localStorage['data'] === 'undefined') ? [] : JSON.parse(localStorage['data']);
var input = (typeof data[currentId] === 'undefined' || typeof data[currentId]['text'] === 'undefined') ? '' : data[currentId]['text'];

var output = '';
var textarea = document.getElementById('input');
var result = document.getElementById('result');

localStorage['currentId'] = currentId;
localStorage['data'] = JSON.stringify(data);

function keyUpHandler(e) {
  input = textarea.value;
  update();
  save();
  e.preventDefault();
};
function update() {
  output = marked(input);
  result.innerHTML = output;
};
function save() {
  var text = textarea.value;
  var date = new Date();
  var memo = {
    'text': text,
    'date': date
  };
  data[currentId] = memo;
  localStorage['data'] = JSON.stringify(data);
};
function getList() {
};
function load(id) {
  currentId = parseInt(id,10);
  localStorage['currentId'] = currentId;
  input = data[currentId]['text'];
  textarea.value = input;
  update();
}

textarea.addEventListener('keyup', keyUpHandler);
textarea.value = input;
update();

