let darkMode = localStorage.getItem("darkMode");
const mode = document.getElementById("mode");

function setDarkMode() {
    document.getElementsByTagName("body")[0].setAttribute("id", "dark-page");
    Array.from(document.getElementsByClassName("dark-mode-button")).forEach(e => e.classList.add("dark-button"));
    Array.from(document.getElementsByClassName("dark-mode-text")).forEach(e => e.classList.add("dark-text"));
    
    mode.textContent = "Light Mode"
    localStorage.setItem("darkMode", "enabled");
}

function unsetDarkMode() {
    document.getElementsByTagName("body")[0].removeAttribute("id")
    Array.from(document.getElementsByClassName("dark-mode-button")).forEach(e => e.classList.remove("dark-button"));
    Array.from(document.getElementsByClassName("dark-mode-text")).forEach(e => e.classList.remove("dark-text"));
    
    mode.textContent = "Dark Mode"
    localStorage.setItem("darkMode", "disabled");
}

darkMode === "enabled" ? setDarkMode() : false;

mode.addEventListener("click", () => {
    darkMode =localStorage.getItem("darkMode");
    darkMode !== "enabled" ? setDarkMode() : unsetDarkMode();
})