'use strict';

import getData from "./tools/getData";
import postData from "./tools/postData";

import closeNotification from "./modules/closeNotification";
import openCloseMobileMenu from "./modules/openCloseMobileMenu";
import Slider from "./class/Slider";
import renderNewArrivals from "./modules/renderNewArrivals";
import renderBlog from "./modules/renderBlog";
import subscribe from "./modules/subscribe";

window.addEventListener('DOMContentLoaded', () => {
    // Scroll 
    //new Scroll('.product__carousel-wrapper', '.product__carousel-scroll', 3122)
    closeNotification();
    openCloseMobileMenu();

    const slider = new Slider(
        '.hero__slider',
        '.hero-slider__wrapper',
        '.hero-slider__item',
        '[data-slider-button="prev"]',
        '[data-slider-button="next"]')

    renderNewArrivals();
    renderBlog();
    subscribe();  

})

