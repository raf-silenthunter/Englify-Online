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

