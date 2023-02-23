const swiper = new Swiper('.swiper-all', {
    loop: true,
});

const filterSlider = document.querySelectorAll(".project__nav-item");
document.querySelector(".project__nav").addEventListener("click", event => {
   if (event.target.tagName !== "LI") return false;

   let filterClass = event.target.classList;

   console.log(filterClass);

    filterSlider.forEach (elem => {
        if (!elem.classList.contains(filterClass)) {
            elem.classList.remove("active-item");
        }
        else if (!elem.classList.contains("active-item")) {
            elem.classList.add("active-item");
        }
    });
});
