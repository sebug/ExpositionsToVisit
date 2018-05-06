import ko from 'knockout';
import './style.css';
import SplashImage from './splash.jpg';

ko.applyBindings({
    message: 'Ohai webpack',
    splashUrl: SplashImage
}, document.body);


