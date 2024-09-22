import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/main.css';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/));
const icons = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));
  
const allImages = { ...images, ...icons };
  
document.addEventListener('DOMContentLoaded', () => {
    const imgElements = document.querySelectorAll('img');
    imgElements.forEach((img) => {
        const imgName = img.getAttribute('data-src');
        if (allImages[imgName]) {
            img.src = allImages[imgName];
        }
    });
});
  
// Import of MainNav JS module
import { handleMainNavigation } from "./partials/main-nav.js";

const nav = document.querySelector(".nav");
const mainnav = new handleMainNavigation(nav);
mainnav.init();

// Import of Swipers JS module

// swiper Offert Class declaration and passing paramethers
import { HandleSwiper } from "./partials/swipers.js";

document.addEventListener('DOMContentLoaded',()=>{

    const swiperOfferRoot = document.querySelector(".swiper--offert");
    const swiperCards = swiperOfferRoot.querySelectorAll(".swiper__card");
    const swiperButtonsWrap = document.querySelector('[data-info="buttons-offer"]');
    //universal value
    const swiperCardWidth = document.querySelector(".swiper__card").offsetWidth
    //universal value
    const swiperOffert = new HandleSwiper(
        swiperOfferRoot,
        swiperCards,
        swiperButtonsWrap,
        20,
        swiperCardWidth
    );

    swiperOffert.init();

    // swiper Testimonial Class declaration and passing paramethers
    const swiperTestimonialRoot = document.querySelector(".swiper--testimonial");
    const swiperTestimonialCards = swiperTestimonialRoot.querySelectorAll(".swiper__card");
    const swiperTestimonialButtonsWrap = document.querySelector('[data-info="buttons-testimonial"]');
    const swiperTestimonialOffert = new HandleSwiper(
        swiperTestimonialRoot,
        swiperTestimonialCards,
        swiperTestimonialButtonsWrap,
        20,
        swiperCardWidth
    );
    
    swiperTestimonialOffert.init();
})

// Import of Swipers React module
const Form = lazy(() => import('./partials/Form'));

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');

    if (container) {
        const root = createRoot(container);

        root.render(
            <React.StrictMode>
             <Form />
            </React.StrictMode>
        );
    } else {
        console.error('Root element not found');
    }
});

