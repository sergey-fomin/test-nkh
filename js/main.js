document.location.replace("/index.html#test_01");

document.querySelectorAll(".accordeon__title").forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (!parent.classList.contains("accordeon__item--active")) {
      document
        .querySelectorAll(".accordeon__item")
        .forEach((child) => child.classList.remove("accordeon__item--active"));
    }

    parent.classList.toggle("accordeon__item--active");
  })
);
