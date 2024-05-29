class ShadowHeader
{
    static run()
    {
        const shadowHeader = () => {
            const header = document.getElementById("header");
            // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
            this.scrollY >= 50
              ? header.classList.add("shadow-header")
              : header.classList.remove("shadow-header");
          };
          window.addEventListener("scroll", shadowHeader);
          
          
    }
}
export {ShadowHeader}