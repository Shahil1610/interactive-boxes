const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");

    // Close other boxes
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove("active");
      }
    });
  });
});
