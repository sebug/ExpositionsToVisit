import SplashImage from './splash.jpg';
import htmlContent from './index.html';

function ViewModel() {
    var self = this;
    self.message = 'Hey from component';
    self.splashUrl = SplashImage;
}

export default {
    viewModel: ViewModel,
    template: htmlContent
};


