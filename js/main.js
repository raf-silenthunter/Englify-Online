/* eslint-disable no-unused-vars */
// Import of MainNav JS module
import {handleMainNavigation} from "./partials/main-nav.js";

const nav = document.querySelector(".nav")
const mainnav = new handleMainNavigation(nav);

mainnav.init();

// Import of Swipers JS module

//swiper Offert Class declaration and passing paramethers
import {HandleSwiper} from "./partials/swipers.js";

const swiperOfferRoot = document.querySelector(".swiper--offert");
const swiperCards = swiperOfferRoot.querySelectorAll(".swiper__card");
const swiperButtonsWrap = document.querySelector('[data-info="buttons-offer"]');
const swiperOffert = new HandleSwiper(swiperOfferRoot,
    swiperCards, swiperButtonsWrap, 20);

swiperOffert.init()

//swiper Testimonial Class declaration and passing paramethers
const swiperTestimonialRoot = document.querySelector(".swiper--testimonial");
const swiperTestimonialCards = swiperTestimonialRoot.querySelectorAll(".swiper__card");
const swiperTestimonialButtonsWrap = document.querySelector('[data-info="buttons-testimonial"]');
const swiperTestimonialOffert = new HandleSwiper(
    swiperTestimonialRoot, swiperTestimonialCards,
    swiperTestimonialButtonsWrap, 20);

swiperTestimonialOffert.init();

// Import of Swipers JS module

import {FormValidation} from "./partials/forms.js";
const form = document.querySelector(".section__form");
const successElement = document.querySelector('[data-info="contact-success"]')
const contactForm = new FormValidation(form, ["inputPhone","inputLogin", "inputPassword"] ,successElement);

contactForm.init();