const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", function toggle() {
    panel.classList.toggle("open");
    panel.classList.toggle("active-open");
  })
);
