window.onload = () => {
  const anchors = document.querySelectorAll(".icone");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);
};
document.oncontextmenu = new Function("return false;");
