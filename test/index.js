
import {default as config, MyDefault} from './components/index.js';

console.log(config, MyDefault);

const appDiv = document.getElementById('app');
appDiv.innerHTML = MyDefault();


