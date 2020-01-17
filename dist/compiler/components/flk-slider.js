const Component = require(COMPONENT_CLASS_PATH);

class FlkSliderComponent extends Component {}

module.exports = {
    selector: 'flk-slider',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkSliderComponent,
    isUnique: false,
    component: 'FlkSlider',
    htmlFile: __dirname + '/../../flk-slider.component.html',
};