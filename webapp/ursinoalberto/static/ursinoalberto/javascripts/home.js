// global variable for animations speed
let speed = 500;

/** Function for the listener of type "wheel"
 *
 * @param event: WheelEvent (https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent)
 */
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

/**
 * Sets an animation to the landing page which decreases its opacity to zero.
 *
 * @param type: 1 if you are scrolling to the about section, 2 if scrolling to the landing page
 */
function fadeLandingPage(type) {
  if (type == 1) {
    document
      .getElementsByClassName("landing-page")
      .item(0)
      .animate(
        [
          {},
          {
            opacity: "0",
          },
        ],
        { duration: speed + 300 }
      );
  } else if (type == 2) {
    document
      .getElementsByClassName("landing-page")
      .item(0)
      .animate(
        [
          { opacity: "0" },
          {
            opacity: "100",
          },
        ],
        { duration: speed + 200 }
      );
  }
}

/**
 * Smoothly scrolls the page between the about section and the landing page.
 *
 * @param mouseScrollY: double representing the vertical scroll amount in the WheelEvent.deltaMode unit
 */
function scrollPage(mouseScrollY = null) {
  // Avoids to scroll while the page is scrolling because I want to avoid two problems:
  // - "window.scrollY <= 1"
  document
    .getElementsByClassName("about-btn normal-btn")[0]
    .setAttribute("onclick", null);
  document.removeEventListener("wheel", mouseScroll);

  const about_section = document.getElementById("about_section");

  if (mouseScrollY == null) {
    if (window.scrollY <= 1) {
      about_section.scrollIntoView();
      fadeLandingPage(1);
    } else {
      window.scrollTo(0, 1);
      fadeLandingPage(2);
    }
  } else {
    if (Math.sign(mouseScrollY) == 1 && window.scrollY < window.innerHeight) {
      about_section.scrollIntoView();
      fadeLandingPage(1);
    } else if (
      Math.sign(mouseScrollY) == -1 &&
      window.scrollY >= window.innerHeight
    ) {
      window.scrollTo(0, 1);
      fadeLandingPage(2);
    }
  }

  // Reactivates the scroll
  setTimeout(() => {
    document
      .getElementsByClassName("about-btn normal-btn")[0]
      .setAttribute("onclick", "scrollPage()");
    document.addEventListener("wheel", mouseScroll);
  }, speed.toString());
}
