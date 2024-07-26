window.scrollTo(0, 1);

function switchMode() {
  var body = document.body;
  var linkedin_btn = document.getElementsByClassName("linkedin-btn")[0]
  var github_btn = document.getElementsByClassName("github-btn")[0]
  var dark_mode_btn = document.getElementsByClassName("switch-mode-btn")[0]
  linkedin_btn.classList.toggle("linkedin-btn-light")
  github_btn.classList.toggle("github-btn-light")
  dark_mode_btn.classList.toggle("switch-mode-btn-light")
  body.classList.toggle("body-light");
}