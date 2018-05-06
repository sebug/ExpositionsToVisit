import ko from 'knockout';
import './style.css';
import appRoot from '../components/app-root/index.js';

console.log(appRoot);

ko.components.register('app-root', appRoot);
ko.applyBindings({}, document.body);


