const sectionHeroEL = document.querySelector(".sticky-background");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);

        if(ent.isIntersecting === false) {
            document.body.classList.add('sticky')
        }

        if(ent.isIntersecting === true) {
            document.body.classList.remove('sticky')
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: '46px',
    }
)
observer.observe(sectionHeroEL)


// menu Section 

// const navTogglerBtn = document.querySelector(".queries-menu-wrap"),
//   aside = document.querySelector(".nav-item-wrap");
// navTogglerBtn.addEventListener("click", () => {
//   aside.classList.toggle("open");
// });