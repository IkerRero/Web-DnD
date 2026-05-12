const readMoreBtn = document.getElementById("readMore");

let expanded = false;

readMoreBtn.addEventListener("click", () => {
    expanded = !expanded;

    descripcion.classList.toggle("expanded");

    readMoreBtn.textContent = expanded
        ? "Read less"
        : "Read more";
});