import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ClientArea from './modules/ClientArea';

new ClientArea();
new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

new StickyHeader();
let modal;

const newLocal = "The page was opened";
console.log(newLocal);



if (module.hot) {
    module.hot.accept()
}


document.querySelectorAll(".open-modal").forEach(el => {
    console.log("something was found");
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
                }).catch(() => console.log("There was a problem"));
        }else {
            modal.openTheModal();
        }
    });
});


