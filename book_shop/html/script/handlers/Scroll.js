class Scroll
{
    static scrollUp()
    {
        function scrollUp() {
            const scrollUp = document.getElementById("scroll-up");
            // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
            else scrollUp.classList.remove("show-scroll");
          }
          window.addEventListener("scroll", scrollUp);
          
    }
    static scrollSections()
    {
        const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

    }
    static animation()
    {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 400,
            // reset: true, // Animation repeat
          });
          
          sr.reveal(
            ".home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer"
          );
          sr.reveal(".home__images", { delay: 600 });
          sr.reveal(".services__card", { interval: 100 });
          sr.reveal("discount__data", { origin: left });
          sr.reveal("discount__images", { origin: right });
          
    }
}
export {Scroll}