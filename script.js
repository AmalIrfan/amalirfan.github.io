console.log("Its working");

let theme = localStorage.getItem("theme");

if (theme == null) {
    setTheme("light");
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener("click", function () {
        let mode = this.dataset.mode;
        console.log("Option clicked:", mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == "light") {
        document.body.className = "";
    }

    if (mode == "blue") {
        document.body.className = "blue";
    }

    if (mode == "green") {
        document.body.className = "green";
    }

    if (mode == "purple") {
        document.body.className = "purple";
    }

    localStorage.setItem("theme", mode);
}
