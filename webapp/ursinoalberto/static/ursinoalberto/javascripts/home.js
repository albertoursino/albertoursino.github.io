center_central_section();

window.onresize = center_central_section;

function center_central_section() {
  // get div elements
  let title_section = document.querySelector(".title-section");
  let variable_div = document.querySelector(".variable-div");
  let central_section = document.querySelector(".profile-pic-section");
  // get their real height
  let x = title_section.clientHeight;
  let tot = window.innerHeight;
  let ch = central_section.clientHeight;
  // modify the height of the "variable" div
  let y = (tot - 2 * x - ch) / 2;
  variable_div.style.height = y + "px";
}
