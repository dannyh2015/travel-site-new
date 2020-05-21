import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

 new StickyHeader();
let modal;

const newLocal = "The page was opened";
console.log(newLocal);

newFunction();

if (module.hot) {
    module.hot.accept()
}

function newFunction() {
    document.querySelectorAll(".open-modal").forEach(el => {
        console.log("something was found");
        el.addEventListener("click", e => {
            console.log("something was clicked");
            e.preventDefault();
            if (typeof modal == "undefined") {
                console.log("modal not defined");
                import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                    modal = new x.default();
                    setTimeout(() => modal.openTheModal(), 20);
                }).catch(() => console.log("There was a problem"));
            }
            else {
                modal.openTheModal();
            }
        });
    });
}

