// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var x;
class employee {
  constructor(names, ages) {
    this.names = names;
    this.ages = ages;
  }
  DisplayInfoo() {
    x = 'the name is ' + this.names + ' and the age is ' + this.ages;
  }
}

var emp = new employee('Zakaria', 32);
emp.DisplayInfoo();

appDiv.innerHTML =  '<h1>' + x + '</h1>';


