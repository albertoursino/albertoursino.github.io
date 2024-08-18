/* Android: workaround to avoid browsers toolbar messing up with the UI */
window.scrollTo(0, 1);

/* Mouse scroll listeners */
document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    scrollToAbout();
  } else if (event.deltaY < 0) {
    scrollToLandingPage();
  }
});

/**
 * Changes the UI colors when the user switches between the dark and light modes.
 */
function switchMode() {
  var body = document.body;
  body.classList.toggle("body-light");
  /* these buttons needs special colors */
  var linkedin_btn = document.getElementsByClassName("linkedin-btn")[0];
  var github_btn = document.getElementsByClassName("github-btn")[0];
  linkedin_btn.classList.toggle("linkedin-btn-light");
  github_btn.classList.toggle("github-btn-light");
  /* normal buttons which do not need special colors */
  var normal_btns = document.getElementsByClassName("normal-btn");
  for (let i = 0; i < normal_btns.length; i++) {
    normal_btns[i].classList.toggle("normal-btn-light");
  }
}

/**
 * Smoothly scrolls the page to the about section.
 */
function scrollToAbout() {
  window.scrollTo(0, window.innerHeight);
}

/**
 * Smoothly scrolls the page to the landing page.
 */
function scrollToLandingPage() {
  window.scrollTo(0, 1);
}
