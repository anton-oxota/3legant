class Slider {
    constructor(
        sliderBobySelector,

        sliderWrapperSelector,
        sliderItemsSelector,

        prevButtonSelector,
        nextButtonSelector
    ) {
        this.slider = document.querySelector(sliderBobySelector)
        this.sliderWrapper = document.querySelector(sliderWrapperSelector);
        this.sliderItems = document.querySelectorAll(sliderItemsSelector);

        this.prevButton = document.querySelector(prevButtonSelector)
        this.nextButton = document.querySelector(nextButtonSelector)

        this.totalSlides = this.sliderItems.length;
        this.currSlide = 0

        this.sliderInner = this.createSliderInner();
        this.sliderDotsArray = this.createSliderDots();

        this.changeSlideByButton();
        this.changeSlideByButtonTouch()
    }

    createSliderInner() {
        const sliderInner = document.createElement('div');
        sliderInner.classList.add('.slider__inner');
        sliderInner.style.display = 'flex';
        sliderInner.style.transition = '.3s all'

        this.sliderItems.forEach(item => {
            sliderInner.append(item)
        })

        this.sliderWrapper.append(sliderInner);

        return sliderInner
    }

    createSliderDots() {
        const sliderDotsWrapper = document.createElement('div');
        sliderDotsWrapper.classList.add('hero-slider__dots-wrapper');
        this.sliderInner.style.transform = `translateX(0px)`
        this.slider.append(sliderDotsWrapper);

        const sliderDotsArray = [];


        this.sliderItems.forEach(() => {
            const dot = document.createElement('button');
            dot.classList.add('hero-slider__dot');
            sliderDotsWrapper.append(dot);

            sliderDotsArray.push(dot)
        })

        sliderDotsArray[0].classList.add('hero-slider__dot--active')

        return sliderDotsArray
    }

    showSlide(id) {
        this.sliderInner.style.transform = `translateX(${-(id * this.sliderItems[id].clientWidth)}px)`
        this.switchActiveDot(id);
    }

    switchActiveDot(id) {
        this.sliderDotsArray.find(item => {
            return (item.classList.contains('hero-slider__dot--active'))
        }).classList.remove('hero-slider__dot--active');

        this.sliderDotsArray[id].classList.add('hero-slider__dot--active');
    }

    changeSlideByButton() {
        this.nextButton.addEventListener('click', () => {
            if (this.currSlide !== this.totalSlides - 1) {
                this.currSlide += 1;
                this.showSlide(this.currSlide);

            }

        })

        this.prevButton.addEventListener('click', () => {
            if (this.currSlide !== 0) {
                this.currSlide -= 1;
                this.showSlide(this.currSlide);

            }

        })

    }

    changeSlideByButtonTouch() {
        this.sliderInner.addEventListener('touchstart', (event) => {
            event.preventDefault();

            const matrix = window.getComputedStyle(this.sliderInner).transform.replace(/[^0-9\-.,]/g, '').split(',');
            const positionStart = +(matrix[12] || matrix[4]);
            let delta = 0;
            const x = event.touches[0].pageX;

            const touchMoveHandler = (event) => {
                delta = (x - event.touches[0].pageX)
                this.sliderInner.style.transform = `translateX(${(positionStart - delta)}px)`;
            }

            const touchEndHandler = () => {
                if (delta > 0 && this.currSlide !== this.totalSlides - 1) {
                    this.currSlide += 1;
                    this.showSlide(this.currSlide);
                } else if (delta < 0 && this.currSlide !== 0) {
                    this.currSlide -= 1;
                    this.showSlide(this.currSlide);
                } else {
                    this.showSlide(this.currSlide);
                }

                document.removeEventListener('touchmove', touchMoveHandler);
                this.sliderInner.removeEventListener('touchend', touchEndHandler)

            }

            document.addEventListener('touchmove', touchMoveHandler)

            this.sliderInner.addEventListener('touchend', touchEndHandler)
        })

        this.sliderInner.ondragstart = function () {
            return false;
        };
    }

}

export default Slider   