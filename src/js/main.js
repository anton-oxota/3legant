/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/class/BlogItem.js":
/*!**********************************!*\
  !*** ./src/js/class/BlogItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class BlogItem {
    constructor({
        blogImgSrc,
        blogImgAlt,
        blogName,
        blogLink,
    }) {
        this.blogImgSrc = blogImgSrc;
        this.blogImgAlt = blogImgAlt;
        this.blogName = blogName;
        this.blogLink = blogLink;

        this.blogPreviewElement = this.createBlogPreviewElement();
        this.blogNameElement = this.createBlogNameElement();
        this.blogLinkElement = this.createBlogLinkElement();

        this.blogItem = this.createBlogItem();
    }

    createBlogPreviewElement() {
        const blogPreviewElement = document.createElement('div');
        blogPreviewElement.classList.add('blog-item__preview');
        blogPreviewElement.innerHTML = `<img src="${this.blogImgSrc}" alt="${this.blogImgAlt}" class="blog-item__img">`;

        return blogPreviewElement
    }

    createBlogNameElement() {
        const blogNameElement = document.createElement('div');
        blogNameElement.classList.add('blog-item__title', 'h7');
        blogNameElement.textContent = this.blogName;

        return blogNameElement
    }

    createBlogLinkElement() {
        const blogLinkElement = document.createElement('a');
        blogLinkElement.href = this.blogLink;
        blogLinkElement.classList.add('blog-item__link', 'button-xs', 'button-bb');

        blogLinkElement.innerHTML = `Read More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 13.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 4.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;

        return blogLinkElement
    }


    createBlogItem() {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        blogItem.append(this.blogPreviewElement);
        blogItem.append(this.blogNameElement);
        blogItem.append(this.blogLinkElement);

        return blogItem
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogItem);

/* 

<div class="blog-item">
    <div class="blog-item__preview">
        <img src="img/blog/img1.jpg" alt="" class="blog-item__img">
    </div>
    <div class="blog-item__title h7">7 ways to decor your home</div>
    <a href="" class="blog-item__link button-xs button-bb">
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9H14.25" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 13.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 4.5L14.25 9" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </a>
</div> 

*/

/***/ }),

/***/ "./src/js/class/ProductItem.js":
/*!*************************************!*\
  !*** ./src/js/class/ProductItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ProductItem {
    constructor({
        productImgSrc,
        productImgAlt,
        lables,
        productRate,
        productName,
        productPrice
    }) {
        this.productImgSrc = productImgSrc;
        this.productImgAlt = productImgAlt;
        this.lables = lables;
        this.productRate = productRate;
        this.productName = productName;
        this.productPrice = productPrice;

        this.productLablesElement = this.createLables();
        this.productImgElement = this.createImgCard();
        this.productAddToFavoriteButton = this.createButtonAddToFavorite();
        this.productAddToCartButton = this.createButtonAddToCart();

        this.productCard = this.createProductCard();

        this.productRateElement = this.createProductRate();
        this.productNameElement = this.createProductName();
        this.productPriceElement = this.createProductPrice();

        this.productInfo = this.createProductInfo();

        this.productItem = this.createProductItem();
    }

    createLables() {
        const lablesElementsArray = this.lables.map(obj => {
            switch (obj.name) {
                case 'new': {
                    const label = document.createElement('div');
                    label.classList.add('product-item__label');
                    label.textContent = 'New';
                    return label
                }

                case 'discount': {
                    const label = document.createElement('div');
                    label.classList.add('product-item__label', 'product-item__label--green');
                    label.textContent = `${obj.value}%`;
                    return label
                }
            }
        })

        const productLablesElement = document.createElement('div');
        productLablesElement.classList.add('product-item__lables');

        lablesElementsArray.forEach(elem => {
            productLablesElement.append(elem)
        });

        return productLablesElement
    }

    createImgCard() {
        const productImgElement = document.createElement('img');
        productImgElement.classList.add('product-item__img');
        productImgElement.src = this.productImgSrc;
        productImgElement.alt = this.productImgAlt;

        return productImgElement
    }

    createButtonAddToFavorite() {
        const button = document.createElement('button');
        button.classList.add('product-item__add-to-favorite');
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.577 5.76422C10.2546 6.07365 9.74545 6.07365 9.42301 5.76422L8.84601 5.2105C8.17065 4.56239 7.25829 4.16667 6.25001 4.16667C4.17894 4.16667 2.50001 5.8456 2.50001 7.91667C2.50001 9.90219 3.57483 11.5417 5.12647 12.8888C6.67944 14.237 8.53618 15.1312 9.64555 15.5876C9.87751 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02676 3.074 7.70542 2.5 6.25001 2.5C3.25847 2.5 0.833344 4.92512 0.833344 7.91667C0.833344 13.2235 6.64196 16.1542 9.0115 17.1289C9.64965 17.3914 10.3504 17.3914 10.9885 17.1289C13.3581 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7416 2.5 13.75 2.5C12.2946 2.5 10.9733 3.074 10 4.00798Z" fill="#6C7275" />
                            </svg>`;
        return button
    }

    createButtonAddToCart() {
        const button = document.createElement('button');
        button.classList.add('product-item__add-to-cart', 'button-s');
        button.textContent = 'Add to cart'

        return button
    }

    createProductCard() {
        const productCard = document.createElement('div');
        productCard.classList.add('product-item__card');

        productCard.append(this.productImgElement);
        productCard.append(this.productLablesElement);
        productCard.append(this.productAddToFavoriteButton);
        productCard.append(this.productAddToCartButton);

        return productCard
    }

    createProductRate() {
        const productRateElement = document.createElement('div');
        productRateElement.classList.add('product-item__rate');
        
        for (let i = 0; i < this.productRate; i++) {
            productRateElement.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
                                            </svg>`;
        }

        return productRateElement;
    }

    createProductName() {
        const productNameElement = document.createElement('div');
        productNameElement.classList.add('product-item__name');
        productNameElement.textContent = this.productName;

        return productNameElement
    }

    createProductPrice() {
        const productPriceElement = document.createElement('div');
        productPriceElement.classList.add('product-item__price');

        productPriceElement.innerHTML = `$${this.productPrice.current} ` +  ((this.productPrice.old) ? `<span>$${this.productPrice.old}</span>` : '');

        return productPriceElement
    }


    createProductInfo() {
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-item__info');

        productInfo.append(this.productRateElement)
        productInfo.append(this.productNameElement)
        productInfo.append(this.productPriceElement)

        return productInfo
    }

    createProductItem() {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.append(this.productCard);
        productItem.append(this.productInfo);

        return productItem
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductItem);

/* 
<div class="product-item">
    <div class="product-item__card">
        <img src="img/product/item.png" alt="" class="product-item__img">

        <div class="product-item__lables">
            <div class="product-item__label">new</div>
            <div class="product-item__label product-item__label--green">-50%</div>
        </div>

        <button class="product-item__add-to-favorite">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.577 5.76422C10.2546 6.07365 9.74545 6.07365 9.42301 5.76422L8.84601 5.2105C8.17065 4.56239 7.25829 4.16667 6.25001 4.16667C4.17894 4.16667 2.50001 5.8456 2.50001 7.91667C2.50001 9.90219 3.57483 11.5417 5.12647 12.8888C6.67944 14.237 8.53618 15.1312 9.64555 15.5876C9.87751 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02676 3.074 7.70542 2.5 6.25001 2.5C3.25847 2.5 0.833344 4.92512 0.833344 7.91667C0.833344 13.2235 6.64196 16.1542 9.0115 17.1289C9.64965 17.3914 10.3504 17.3914 10.9885 17.1289C13.3581 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7416 2.5 13.75 2.5C12.2946 2.5 10.9733 3.074 10 4.00798Z" fill="#6C7275" />
            </svg>
        </button>
        <button class="product-item__add-to-cart button-s">Add to cart</button>
    </div>
    <div class="product-item__info">
        <div class="product-item__rate">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg>
        </div>
        <div class="product-item__name">Loveseat Sofa</div>
        <div class="product-item__price">$199.00 <span>$400.00</span></div>
    </div>
</div>
*/

/***/ }),

/***/ "./src/js/class/Slider.js":
/*!********************************!*\
  !*** ./src/js/class/Slider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);   

/***/ }),

/***/ "./src/js/modules/closeNotification.js":
/*!*********************************************!*\
  !*** ./src/js/modules/closeNotification.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function closeNotification() {
    const notification = document.querySelector('.notification');
    const closeNotificationButton = document.querySelector('.notification__close-button');
    const header = document.querySelector('.header');
    const headerMobile = document.querySelector('.header-mobile');



    closeNotificationButton.addEventListener('click', () => {
        header.style.marginTop = 0;
        headerMobile.style.marginTop = 0;

        notification.remove();
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeNotification);

/***/ }),

/***/ "./src/js/modules/openCloseMobileMenu.js":
/*!***********************************************!*\
  !*** ./src/js/modules/openCloseMobileMenu.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openCloseMobileMenu() {
    const openMenuButton = document.querySelector('.header-mobile__open-menu-button');
    const closeMenuButton = document.querySelector('.aside-menu__close-menu-button');
    const menu = document.querySelector('.aside-menu');


    function openMenu() {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('active');
        document.body.style.overflow = 'unset';
    }

    openMenuButton.addEventListener('click', openMenu)
    closeMenuButton.addEventListener('click', closeMenu)
    menu.addEventListener('click', ({target}) => {
        if (target.matches('.aside-menu')) {
            closeMenu();
        }
    })
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openCloseMobileMenu);

/***/ }),

/***/ "./src/js/modules/renderBlog.js":
/*!**************************************!*\
  !*** ./src/js/modules/renderBlog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/getData */ "./src/js/tools/getData.js");
/* harmony import */ var _class_BlogItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/BlogItem */ "./src/js/class/BlogItem.js");




function renderBlog() {
    const blogWrapper = document.querySelector('.blog__wrapper');
    const blogSpinner = document.querySelector('.blog__spinner');

        (0,_tools_getData__WEBPACK_IMPORTED_MODULE_0__["default"])('./db/blog_db.json')
            .then(data => {
                data.forEach(obj => {
                    const blog = new _class_BlogItem__WEBPACK_IMPORTED_MODULE_1__["default"](obj)
                    blogWrapper.append(blog.blogItem);
                });
            })
            .catch(error => {
                const errorMessage = document.createElement('div');
                errorMessage.classList.add('message', 'h5');
                errorMessage.innerHTML = "Opss... <br> We can't load blog";

                blogWrapper.append(errorMessage)
                console.error(error.status, 'Fetch')
            })
            .finally(() => {
                blogSpinner.remove();
            })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBlog);

/***/ }),

/***/ "./src/js/modules/renderNewArrivals.js":
/*!*********************************************!*\
  !*** ./src/js/modules/renderNewArrivals.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/getData */ "./src/js/tools/getData.js");
/* harmony import */ var _class_ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/ProductItem */ "./src/js/class/ProductItem.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ "./src/js/modules/scroll.js");






function renderNewArrivals() {

    const productCaruselWrapper = document.querySelector('.product__carousel-wrapper');
    const productSpinner = document.querySelector('.product__spinner');
    (0,_tools_getData__WEBPACK_IMPORTED_MODULE_0__["default"])('./db/products_db.json')
        .then(data => {
            productSpinner.remove();
            data.forEach(obj => {
                const product = new _class_ProductItem__WEBPACK_IMPORTED_MODULE_1__["default"](obj);
                productCaruselWrapper.append(product.productItem);
            });

            (0,_scroll__WEBPACK_IMPORTED_MODULE_2__["default"])();

        })
        .catch(error => {
            productSpinner.remove();
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('message', 'h5');
            errorMessage.innerHTML = "Opss... <br> We can't load products";

            productCaruselWrapper.append(errorMessage)
            console.error(error.status, 'Fetch')
        })
        /* .finally(() => {
            productSpinner.remove();
        })  */
        
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNewArrivals);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function scroll() {
    const productWindow = document.querySelector('.product__carousel');
    const productWrapper = document.querySelector('.product__carousel-wrapper');
    const scrollBox = document.querySelector('.product__carousel-scroll');
    const scrollThumb = scrollBox.querySelector('div');


    let scrollPosition = 0;
    const scrollPx = 50;

    function setProductWrapperWidth() {
        const gap = parseInt(window.getComputedStyle(productWrapper).gap);
        const elemWidth = parseInt(window.getComputedStyle(productWrapper.children[0]).width);
        const totalElems = productWrapper.childElementCount

        productWrapper.style.width = `${(elemWidth * totalElems) + (gap * (totalElems - 1))}px`;

        productWrapper.style.transform = `translateX(${scrollPosition}px)`;
        scrollThumb.style.transform = `translateX(${scrollPosition}px)`;
    }
    setProductWrapperWidth();


    const k = productWindow.getClientRects()[0].width / productWrapper.getClientRects()[0].width;

    function setScrollThumbWidth() {
        scrollThumb.style.width = `${scrollBox.getClientRects()[0].width * k}px`
    }
    setScrollThumbWidth();


    function shiftScroll(wrapper, scroll) {
        wrapper = wrapper ?? (scroll / k);
        scroll = scroll ?? (wrapper * k);

        productWrapper.style.transform = `translateX(${-wrapper}px)`;
        scrollThumb.style.transform = `translateX(${scroll}px)`;
    }

    const productWindowWidth = parseInt(productWindow.getClientRects()[0].width);
    const productWrapperWidth = parseInt(productWrapper.getClientRects()[0].width);

    const scrollBoxWidth = parseInt(scrollBox.getClientRects()[0].width);
    const scrollThumbWidth = parseInt(scrollThumb.getClientRects()[0].width);



    function scrollByWheel() {
        productWrapper.addEventListener('wheel', (event) => {
            event.preventDefault();

            if (event.deltaY < 0) {
                scrollPosition = scrollPosition < scrollPx ? 0 : scrollPosition - scrollPx;
                shiftScroll(scrollPosition);
            }

            if (event.deltaY > 0) {
                scrollPosition =
                    scrollPosition > productWrapperWidth - productWindowWidth - scrollPx ?
                        productWrapperWidth - productWindowWidth : scrollPosition + scrollPx;
                shiftScroll(scrollPosition);
            }
        })
    }

    scrollByWheel();


    function scrollByScrollThumb() {

        scrollThumb.addEventListener('mousedown', (event) => {

            const matrix = window.getComputedStyle(scrollThumb).transform.replace(/[^0-9\-.,]/g, '').split(',');
            const positionStart = +(matrix[12] || matrix[4]);
            const x = event.clientX;

            function mouseMoveHandler(event) {
                let pos = 0;

                if (positionStart - (x - event.clientX) < 0) {
                    pos = 0;
                } else if (positionStart - (x - event.clientX) > scrollBoxWidth - scrollThumbWidth) {
                    pos = scrollBoxWidth - scrollThumbWidth;
                } else {
                    pos = positionStart - (x - event.clientX);
                }

                scrollPosition = pos / k;
                shiftScroll(scrollPosition)

                // scrollThumb.style.transform = `translateX(${pos}px)`;

            }

            function mouseUpHandler() {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        })
    }

    scrollByScrollThumb();

    function scrollByTouch() {
        productWrapper.addEventListener('touchstart', (event) => {
            event.preventDefault();

            const matrix = window.getComputedStyle(productWrapper).transform.replace(/[^0-9\-.,]/g, '').split(',');
            const positionStart = +(matrix[12] || matrix[4]);
            const x = event.touches[0].clientX;

            function touchMoveHandler(event) {

                let pos = positionStart - (x - event.touches[0].clientX)

                if (pos < 0 && pos > -(productWrapperWidth - productWindowWidth)) {
                    scrollPosition = -pos;

                    shiftScroll(scrollPosition);

                    // productWrapper.style.transform = `translateX(${pos}px)`;
                }
            }

            function touchEndHandler() {
                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
            }

            document.addEventListener('touchmove', touchMoveHandler);
            document.addEventListener('touchend', touchEndHandler);
        })
    }

    scrollByTouch();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);

/***/ }),

/***/ "./src/js/modules/subscribe.js":
/*!*************************************!*\
  !*** ./src/js/modules/subscribe.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools_postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/postData */ "./src/js/tools/postData.js");


function subscribe() {

    const subscribeForm = document.querySelector('.newsletter__form');
    const input = document.querySelector('.newsletter-form__input');

    const okMassage = document.querySelector('.newsletter-form__msg--ok');
    const errorMassage = document.querySelector('.newsletter-form__msg--error');

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const body = new FormData(subscribeForm);
        const obj = Object.fromEntries(body.entries())

        ;(0,_tools_postData__WEBPACK_IMPORTED_MODULE_0__["default"])('./db/mail_db.json', obj)
            .then(data => {
                console.log(data);
                okMassage.style.opacity = '1';
            }).catch(err => {
                console.log(err);
                console.log('ops');
                errorMassage.style.opacity = '1';
            }).finally(() => {
                setTimeout(() => {
                    okMassage.style.opacity = '0';
                    errorMassage.style.opacity = '0';
                }, 2000)
            })

    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribe);

/***/ }),

/***/ "./src/js/tools/getData.js":
/*!*********************************!*\
  !*** ./src/js/tools/getData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(response)
                }

                return response.json()
            })
            .then(resolve)
            .catch(reject)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/js/tools/postData.js":
/*!**********************************!*\
  !*** ./src/js/tools/postData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function postData(url, body) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (!response.ok) {
                reject(response)
            }
            return response.json()
        })
        .then(resolve)
        .catch(reject)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/getData */ "./src/js/tools/getData.js");
/* harmony import */ var _tools_postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/postData */ "./src/js/tools/postData.js");
/* harmony import */ var _modules_closeNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/closeNotification */ "./src/js/modules/closeNotification.js");
/* harmony import */ var _modules_openCloseMobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openCloseMobileMenu */ "./src/js/modules/openCloseMobileMenu.js");
/* harmony import */ var _class_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class/Slider */ "./src/js/class/Slider.js");
/* harmony import */ var _modules_renderNewArrivals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/renderNewArrivals */ "./src/js/modules/renderNewArrivals.js");
/* harmony import */ var _modules_renderBlog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/renderBlog */ "./src/js/modules/renderBlog.js");
/* harmony import */ var _modules_subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/subscribe */ "./src/js/modules/subscribe.js");












window.addEventListener('DOMContentLoaded', () => {
    // Scroll 
    //new Scroll('.product__carousel-wrapper', '.product__carousel-scroll', 3122)
    (0,_modules_closeNotification__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_openCloseMobileMenu__WEBPACK_IMPORTED_MODULE_3__["default"])();

    const slider = new _class_Slider__WEBPACK_IMPORTED_MODULE_4__["default"](
        '.hero__slider',
        '.hero-slider__wrapper',
        '.hero-slider__item',
        '[data-slider-button="prev"]',
        '[data-slider-button="next"]')

    ;(0,_modules_renderNewArrivals__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_renderBlog__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_subscribe__WEBPACK_IMPORTED_MODULE_7__["default"])();  

})


})();

/******/ })()
;
//# sourceMappingURL=main.js.map