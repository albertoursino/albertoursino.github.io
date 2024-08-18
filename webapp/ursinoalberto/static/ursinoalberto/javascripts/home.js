/* Android: workaround to avoid browsers toolbar messing up with the UI */
window.scrollTo(0, 1);

/* Mouse scroll listeners */
function mouseScroll(event) {
  scrollPage(event.deltaY);
}
document.addEventListener("wheel", mouseScroll);

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

/* Animates the arrow, rotating it upside down or upwards */
function rotateArrow(side) {
  if (side == "up") {
    document.getElementsByClassName("fas fa-caret-down")[0].animate(
      [
        {
          transform: "rotate(0)",
        },
        {
          transform: "rotate(0.5turn)",
        },
      ],
      { duration: 500, fill: "forwards" }
    );
  } else if (side == "down") {
    document.getElementsByClassName("fas fa-caret-down")[0].animate(
      [
        {
          transform: "rotate(0.5turn)",
        },
        {
          transform: "rotate(0)",
        },
      ],
      { duration: 500, fill: "forwards" }
    );
  }
}

/**
 * Smoothly scrolls the page between the about section and the landing page.
 */
function scrollPage(mouseScrollY = null) {
  // Avoids to scroll while the page is scrolling because I want to avoid two problems:
  // - "window.scrollY <= 1"
  // - the arrow rotation
  document
    .getElementsByClassName("arrow-down normal-btn")[0]
    .setAttribute("onclick", null);
  document.removeEventListener("wheel", mouseScroll);

  if (
    (window.scrollY <= 1 && mouseScrollY == null) ||
    Math.sign(mouseScrollY) == 1
  ) {
    window.scrollTo(0, window.innerHeight);
    rotateArrow("up");
  } else {
    window.scrollTo(0, 1);
    rotateArrow("down");
  }

  // Reactivates the scroll
  setTimeout(() => {
    document
      .getElementsByClassName("arrow-down normal-btn")[0]
      .setAttribute("onclick", "scrollPage()");
    document.addEventListener("wheel", mouseScroll);
  }, "650");
}
