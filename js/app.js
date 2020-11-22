document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
        document.body.className = e.target.id;
        console.log(e);
    });
});
