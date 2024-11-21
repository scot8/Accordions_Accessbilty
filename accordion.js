const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion, index) => {
  // Click event to toggle accordion
  accordion.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Collapse content
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand content
    }
  });

  // Keyboard interaction for toggling and navigation
  accordion.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.click(); // Simulate click on keypress
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (accordionBtns[index + 1]) accordionBtns[index + 1].focus(); // Move to next
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (accordionBtns[index - 1]) accordionBtns[index - 1].focus(); // Move to previous
    }
  });
});
