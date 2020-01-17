class FlkSlider {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.loop = null;
        this.paused = false;
        this.defaultOptions = {
            loop: true,
            autoPlay: true,
            delay: 5000,
            pauseOnHover: true,
            animation: 'fade',
            bullets: true,
            height: 'auto',
            centered: true,
            navigation: true,
            navigationIcons: {
                prev: 'angle-left',
                next: 'angle-right',
            },
        };
    }

    option(key) {
        return this.prop(key, Object.get(this.sliderOptions, key));
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.prepareOptions();
        this.slidesList = this.prop('slides');
    }

    prepareOptions() {
        this.sliderOptions = Object.merge(this.defaultOptions, Config.get('slider') || {});
    }

    /**
     * Set current slide index
     * 
     * @param  int index
     */
    current(index) {
        index = Number(index);
        if (this.option('autoPlay')) {
            this.pause();
        }

        if (index == this.slidesList.length) {
            if (this.option('loop')) {
                index = 0;
            } else {
                return;
            }
        } else if (index < 0) {
            if (this.option('loop')) {
                index = this.slidesList.length - 1;
            } else {
                return;
            }
        }

        this.currentSlideIndex = index;
        this.currentSlide = this.slidesList[index];

        this.currentElement = this.sliderElements[index];

        if (this.option('autoPlay') && ! this.paused) {
            this.resume();
        }
    }

    next() {
        this.current(this.currentSlideIndex + 1);
    }

    prev() {
        this.current(this.currentSlideIndex - 1);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
        this.current(0);
    }

    pause() {
        this.paused = true;
        clearInterval(this.loop);
    }

    resume() {
        this.paused = false;

        this.play();
    }

    play() {
        this.loop = setInterval(() => {
            if (this.paused) return;
            this.next();
        }, this.option('delay'));
    }
}