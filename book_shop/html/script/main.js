//Slider
import { Slider } from "./handlers/Slider.js";
import { Search } from "./handlers/Search.js";
import { Login } from "./handlers/Login.js";
import { ShadowHeader } from "./handlers/ShodowHeader.js";
import { Scroll } from "./handlers/Scroll.js";
import { Theme } from "./handlers/Theme.js";
import { prepareSwiper } from "./handlers/Swiper.js";
// ================ DARK LIGHT THEME ================
Theme.run();
// ================ SLIDER API ================
Slider.run();
// ================ SEARCH ================
Search.run();
// ================ LOGIN ================
Login.run();
// ================ ADD SHADOW HEADER ================
ShadowHeader.run();
prepareSwiper();
// ================ SHOW SCROLL UP ================
Scroll.scrollUp();
// ================ SCROLL SECTIONS ACTIVE LINK ================
Scroll.scrollSections();
// ================ SCROLL REVEAL ANIMATION ================
Scroll.animation();