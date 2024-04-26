const header = document.querySelector(".primary-header");
const nav = document.querySelector(".primary-navbar");
console.log(header);
console.log(nav);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.remove("position-absolute");
    nav.classList.add("position-fixed");
    nav.classList.add("bg-light");
  } else {
    nav.classList.add("position-absolute");
    nav.classList.remove("position-fixed");
    nav.classList.remove("bg-light");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
